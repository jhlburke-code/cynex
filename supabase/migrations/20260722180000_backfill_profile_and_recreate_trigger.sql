-- Backfill: when the LMS auth.users trigger was first applied, it didn't fire for existing
-- users. Insert any missing profiles + ensure the trigger is in place.
insert into public.lms_profiles (user_id, full_name, role)
select id, coalesce(raw_user_meta_data->>'full_name', split_part(email, '@', 1)), 'admin'
from auth.users
where id not in (select user_id from public.lms_profiles);

drop trigger if exists lms_on_auth_user_created on auth.users;
create trigger lms_on_auth_user_created
  after insert on auth.users
  for each row execute function public.lms_handle_new_user();
