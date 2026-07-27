-- LMS categories (Option A, 2-level hierarchy)
-- Per projects/cynex/_index.md §Catalog hierarchy proposal (deferred → executed 2026-07-27)
-- Owner: operator (jhl.burke@gmail.com)

-- ============================================================
-- lms_categories
-- ============================================================
create table if not exists public.lms_categories (
  id           uuid primary key default gen_random_uuid(),
  slug         text unique not null,
  title        text not null,
  description  text,
  parent_id    uuid references public.lms_categories(id) on delete restrict,
  display_order int not null default 0,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now(),
  -- 2-level cap: a category may be a root (no parent) OR a child of a root.
  -- Enforced via trigger (recursive FK cannot be CHECK-constrained).
  constraint lms_categories_slug_format check (slug ~ '^[a-z0-9][a-z0-9/_-]{2,80}$')
);

create index if not exists lms_categories_parent_idx on public.lms_categories (parent_id, display_order);
create index if not exists lms_categories_root_idx on public.lms_categories (display_order) where parent_id is null;

-- ============================================================
-- 2-level depth enforcement
-- ============================================================
create or replace function public.lms_categories_check_depth()
returns trigger
language plpgsql
as $$
declare
  parent_parent uuid;
begin
  if new.parent_id is null then
    return new;  -- root category: allowed
  end if;

  -- Look up the parent's parent. If it's not null, new row would be depth 3+.
  select parent_id into parent_parent
    from public.lms_categories
    where id = new.parent_id;

  if parent_parent is not null then
    raise exception 'lms_categories: maximum hierarchy depth is 2 (root → child). Parent % already has a parent.', new.parent_id
      using errcode = 'check_violation';
  end if;

  return new;
end;
$$;

drop trigger if exists lms_categories_depth_check on public.lms_categories;
create trigger lms_categories_depth_check
  before insert or update of parent_id on public.lms_categories
  for each row execute function public.lms_categories_check_depth();

-- ============================================================
-- Cycle prevention (moving A under B where B is already under A)
-- ============================================================
create or replace function public.lms_categories_check_cycle()
returns trigger
language plpgsql
as $$
begin
  -- Disallow self-parent.
  if new.parent_id is not null and new.parent_id = new.id then
    raise exception 'lms_categories: a category cannot be its own parent'
      using errcode = 'check_violation';
  end if;

  -- For updates, if parent_id changed, walk up the new chain to ensure we never loop back.
  if tg_op = 'UPDATE' and new.parent_id is not null then
    declare
      cur uuid := new.parent_id;
      depth int := 0;
    begin
      while cur is not null loop
        depth := depth + 1;
        if depth > 10 then
          raise exception 'lms_categories: parent chain too deep (cycle suspected)';
        end if;
        if cur = new.id then
          raise exception 'lms_categories: parent chain loops back to %', new.id
            using errcode = 'check_violation';
        end if;
        select parent_id into cur from public.lms_categories where id = cur;
      end loop;
    end;
  end if;

  return new;
end;
$$;

drop trigger if exists lms_categories_cycle_check on public.lms_categories;
create trigger lms_categories_cycle_check
  before insert or update of parent_id on public.lms_categories
  for each row execute function public.lms_categories_check_cycle();

-- ============================================================
-- lms_courses gains category_id
-- ============================================================
alter table public.lms_courses
  add column if not exists category_id uuid references public.lms_categories(id) on delete set null;

create index if not exists lms_courses_category_idx on public.lms_courses (category_id) where category_id is not null;

-- ============================================================
-- RLS
-- ============================================================
alter table public.lms_categories enable row level security;

drop policy if exists lms_categories_select_public on public.lms_categories;
create policy lms_categories_select_public on public.lms_categories
  for select using (true);  -- categories are navigation metadata; safe to expose.

drop policy if exists lms_categories_admin_write on public.lms_categories;
create policy lms_categories_admin_write on public.lms_categories
  for all using (lms_is_admin()) with check (lms_is_admin());

-- ============================================================
-- Seed: a "Featured" root category so the catalog has something to drill into on day one.
-- Idempotent.
-- ============================================================
insert into public.lms_categories (slug, title, description, parent_id, display_order)
values ('featured', 'Featured', 'Curated picks from the Cynex catalog.', null, 0)
on conflict (slug) do nothing;