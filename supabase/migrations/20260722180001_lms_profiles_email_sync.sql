-- Denormalise auth.users.email into lms_profiles so PostgREST can read it
-- (PostgREST only exposes public.*, no auth schema).
alter table public.lms_profiles add column if not exists email text;
create index if not exists lms_profiles_email_idx on public.lms_profiles (lower(email));

-- One-shot backfill from current auth.users.
update public.lms_profiles p
set email = u.email
from auth.users u
where u.id = p.user_id and p.email is null;

-- Updated trigger to also store email on signup.
create or replace function public.lms_handle_new_user()
returns trigger language plpgsql security definer set search_path = public
as $$
begin
  insert into public.lms_profiles (user_id, full_name, company, email)
  values (new.id,
          coalesce(new.raw_user_meta_data->>'full_name', split_part(new.email, '@', 1)),
          new.raw_user_meta_data->>'company',
          new.email)
  on conflict (user_id) do update set email = excluded.email;
  return new;
end; $$;

drop trigger if exists lms_on_auth_user_created on auth.users;
create trigger lms_on_auth_user_created
  after insert on auth.users
  for each row execute function public.lms_handle_new_user();

-- Email-change propagates after signup too.
create or replace function public.lms_handle_user_email_change()
returns trigger language plpgsql security definer set search_path = public
as $$
begin
  if new.email is distinct from old.email then
    update public.lms_profiles set email = new.email where user_id = new.id;
  end if;
  return new;
end; $$;
drop trigger if exists lms_on_auth_user_email_changed on auth.users;
create trigger lms_on_auth_user_email_changed
  after update of email on auth.users
  for each row execute function public.lms_handle_user_email_change();
