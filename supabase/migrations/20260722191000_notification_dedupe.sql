-- Prevent duplicate pending notifications for the same user+template+course
-- so the reminder cron Worker can be safely re-run.
create unique index if not exists lms_notif_dedupe_idx
  on public.lms_notification_queue (user_id, template, (payload->>'course_id'))
  where sent_at is null;
