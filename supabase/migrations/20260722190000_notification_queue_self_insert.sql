-- Learners can insert their OWN notifications (e.g. completion). Admin gates
-- retained for read/update/delete. Service-role bypasses RLS anyway.
drop policy if exists lms_notification_admin_all on public.lms_notification_queue;
drop policy if exists lms_notification_admin_update on public.lms_notification_queue;
drop policy if exists lms_notification_admin_delete on public.lms_notification_queue;
drop policy if exists lms_notification_self_insert on public.lms_notification_queue;
drop policy if exists lms_notification_admin_only on public.lms_notification_queue;

create policy lms_notification_admin_all on public.lms_notification_queue
  for select using (lms_is_admin() or user_id = auth.uid());

create policy lms_notification_admin_update on public.lms_notification_queue
  for update using (lms_is_admin());

create policy lms_notification_admin_delete on public.lms_notification_queue
  for delete using (lms_is_admin());

create policy lms_notification_self_insert on public.lms_notification_queue
  for insert with check (auth.uid() = user_id or lms_is_admin());
