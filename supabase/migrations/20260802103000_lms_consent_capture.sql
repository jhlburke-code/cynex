-- Consent capture (Art. 7(1) GDPR): record when the user agreed to the privacy
-- notice, which version of the text they agreed to, and the IP / user-agent at
-- the moment of consent. Required for accountability.

alter table public.lms_profiles
  add column if not exists consent_at timestamptz,
  add column if not exists consent_text_version text,
  add column if not exists ip_at_consent text,
  add column if not exists user_agent_at_consent text;

-- Updated trigger writes the consent cols on first signup. The values are
-- carried through raw_user_meta_data via the signInWithOtp options.data:
--   - consent_at:            ISO timestamp at the moment of form submission
--   - consent_text_version:  "2026-08-02-v1" (the privacy info box content)
--   - ip_at_consent:         The user's IP at the moment of consent
--   - user_agent_at_consent: The user's user-agent at the moment of consent
-- For returning users, /api/login/finish writes the cols on every login so
-- the consent record always reflects the latest accepted text + IP/UA.
create or replace function public.lms_handle_new_user()
returns trigger language plpgsql security definer set search_path = public
as $$
begin
  insert into public.lms_profiles (user_id, full_name, company, email,
                                    consent_at, consent_text_version,
                                    ip_at_consent, user_agent_at_consent)
  values (new.id,
          coalesce(new.raw_user_meta_data->>'full_name', split_part(new.email, '@', 1)),
          new.raw_user_meta_data->>'company',
          new.email,
          nullif(new.raw_user_meta_data->>'consent_at', '')::timestamptz,
          new.raw_user_meta_data->>'consent_text_version',
          new.raw_user_meta_data->>'ip_at_consent',
          new.raw_user_meta_data->>'user_agent_at_consent')
  on conflict (user_id) do update set email = excluded.email;
  return new;
end; $$;

drop trigger if exists lms_on_auth_user_created on auth.users;
create trigger lms_on_auth_user_created
  after insert on auth.users
  for each row execute function public.lms_handle_new_user();
