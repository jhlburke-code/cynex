import type { APIRoute } from 'astro';
import { requireAdmin } from '../../../../lib/auth';
import { makeAuthenticatedClient } from '../../../../lib/supabase';

export const POST: APIRoute = async (ctx) => {
  const gate = await requireAdmin(ctx);
  if (gate instanceof Response) return gate;

  const form = await ctx.request.formData();
  const course_id = String(form.get('course_id') ?? '');
  const starts_at_raw = String(form.get('starts_at') ?? '');
  const duration_minutes_str = String(form.get('duration_minutes') ?? '');
  const capacity_str = String(form.get('capacity') ?? '');
  const meeting_url = String(form.get('meeting_url') ?? '').trim();
  const remind_24h = form.get('remind_24h') === '1';
  const remind_1h = form.get('remind_1h') === '1';
  const remind_15m = form.get('remind_15m') === '1';

  if (!course_id || !starts_at_raw || !duration_minutes_str || !meeting_url) {
    return ctx.redirect('/admin/workshops/new?error=' + encodeURIComponent('course, start time, duration, and meeting URL are required.'));
  }

  const starts_at = new Date(starts_at_raw);
  if (isNaN(starts_at.getTime())) {
    return ctx.redirect('/admin/workshops/new?error=' + encodeURIComponent('Invalid start time.'));
  }

  const duration_minutes = parseInt(duration_minutes_str, 10);
  if (isNaN(duration_minutes) || duration_minutes < 5) {
    return ctx.redirect('/admin/workshops/new?error=' + encodeURIComponent('Duration must be at least 5 minutes.'));
  }
  const ends_at = new Date(starts_at.getTime() + duration_minutes * 60_000);

  const capacity = capacity_str ? parseInt(capacity_str, 10) : null;
  if (capacity_str && (isNaN(capacity as number) || (capacity as number) < 1)) {
    return ctx.redirect('/admin/workshops/new?error=' + encodeURIComponent('Capacity must be a positive integer.'));
  }

  const client = makeAuthenticatedClient(ctx);
  const { data, error } = await client
    .from('lms_workshops')
    .insert({
      course_id,
      starts_at: starts_at.toISOString(),
      ends_at: ends_at.toISOString(),
      capacity,
      meeting_url,
      remind_24h, remind_1h, remind_15m,
    })
    .select('course_id')
    .single();

  if (error || !data) {
    return ctx.redirect('/admin/workshops/new?error=' + encodeURIComponent(error?.message ?? 'unknown'));
  }
  return ctx.redirect(`/admin/workshops/${data.course_id}?saved=1`);
};
