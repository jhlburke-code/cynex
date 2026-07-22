import type { APIRoute } from 'astro';
import { requireAdmin } from '../../../../lib/auth';
import { makeAuthenticatedClient, makeServiceRoleClient, getCurrentUser } from '../../../../lib/supabase';

export const POST: APIRoute = async (ctx) => {
  const gate = await requireAdmin(ctx);
  if (gate instanceof Response) return gate;

  const form = await ctx.request.formData();
  const courseId = String(form.get('course_id') ?? '');
  const emailsRaw = String(form.get('emails') ?? '');
  const emails = Array.from(new Set(emailsRaw.split(',').map(s => s.trim().toLowerCase()).filter(Boolean)));

  if (!courseId || emails.length === 0) {
    return ctx.redirect('/admin/bulk-enroll?error=' + encodeURIComponent('Missing course or emails.'));
  }

  const admin = makeServiceRoleClient(ctx);
  if (!admin) {
    return ctx.redirect('/admin/bulk-enroll?error=' + encodeURIComponent('Service-role client not configured (SUPABASE_SERVICE_ROLE_KEY missing in env).'));
  }

  const operatorUser = await getCurrentUser(ctx);

  // Look up the course (we need slug for notification payload)
  const { data: course } = await admin
    .from('lms_courses')
    .select('id, slug, title')
    .eq('id', courseId)
    .maybeSingle();
  if (!course) {
    return ctx.redirect('/admin/bulk-enroll?error=' + encodeURIComponent('Course not found.'));
  }

  // Step 1: invite new users (skip ones that already exist)
  const existingEmails = new Set<string>();
  let invitedCount = 0;
  let invitedErrors = 0;

  // Fetch existing auth.users first to know who's new
  const { data: allUsers } = await admin.auth.admin.listUsers({ perPage: 1000 });
  for (const u of allUsers?.users || []) {
    if (u.email) existingEmails.add(u.email.toLowerCase());
  }

  const newEmails = emails.filter(e => !existingEmails.has(e));
  for (const email of newEmails) {
    try {
      const { error } = await admin.auth.admin.inviteUserByEmail(email, {
        redirectTo: `${new URL(ctx.request.url).origin}/learn/${course.slug}`,
      });
      if (error) {
        // Don't bail — keep going so partially-invited users don't block the rest.
        invitedErrors += 1;
      } else {
        invitedCount += 1;
      }
    } catch {
      invitedErrors += 1;
    }
  }

  // Step 2: refresh auth user list to map emails → ids
  const { data: refreshed } = await admin.auth.admin.listUsers({ perPage: 1000 });
  const emailToId = new Map<string, string>();
  for (const u of refreshed?.users || []) {
    if (u.email) emailToId.set(u.email.toLowerCase(), u.id);
  }

  // Step 3: enroll every email + queue welcome notifications
  let enrolledCount = 0;
  let enrollErrors = 0;
  let queuedNotifications = 0;

  for (const email of emails) {
    const userId = emailToId.get(email);
    if (!userId) { enrollErrors += 1; continue; }
    // Upsert enrollment (idempotent on user_id+course_id)
    const { error: enrErr } = await admin
      .from('lms_enrollments')
      .upsert(
        { user_id: userId, course_id: courseId, enrolled_by: operatorUser?.id ?? null },
        { onConflict: 'user_id,course_id' },
      );
    if (enrErr) { enrollErrors += 1; continue; }
    enrolledCount += 1;
    // Queue a welcome notification — for existing users (already authed) it'll drain in ~60s.
    // For freshly-invited users, it'll go out after they accept the invite + get an auth.users row
    // (the drain worker re-resolves email → user_id from lms_profiles each pass).
    const { error: notifErr } = await admin.from('lms_notification_queue').insert({
      user_id: userId,
      template: 'enrollment_welcome',
      payload: { course_id: courseId, slug: course.slug },
      send_at: new Date().toISOString(),
    });
    if (!notifErr) queuedNotifications += 1;
  }

  const summary = `Invited ${invitedCount} new, re-acknowledged ${enrolledCount - invitedCount} existing · ${enrolledCount}/${emails.length} enrolled · ${queuedNotifications} welcome emails queued · ${invitedErrors + enrollErrors} errors`;

  // Cache summary in URL param so it shows in the redirected page
  const params = new URLSearchParams({ summary });
  return ctx.redirect('/admin/bulk-enroll?' + params.toString());
};
