import type { APIRoute } from 'astro';
import { requireAdmin } from '../../../../../lib/auth';
import { makeAuthenticatedClient } from '../../../../../lib/supabase';

export const POST: APIRoute = async (ctx) => {
  const gate = await requireAdmin(ctx);
  if (gate instanceof Response) return gate;

  const id = ctx.params.id;
  if (!id) return new Response('missing id', { status: 400 });

  const form = await ctx.request.formData();
  const starts_at_raw = String(form.get('starts_at') ?? '');
  const duration_minutes_str = String(form.get('duration_minutes') ?? '');
  const capacity_str = String(form.get('capacity') ?? '');
  const meeting_url = String(form.get('meeting_url') ?? '').trim();
  const recording_url = String(form.get('recording_url') ?? '').trim();

  if (!starts_at_raw || !duration_minutes_str || !meeting_url) {
    return ctx.redirect(`/admin/workshops/${id}?error=` + encodeURIComponent('start time, duration, and meeting URL are required.'));
  }
  const starts_at = new Date(starts_at_raw);
  if (isNaN(starts_at.getTime())) {
    return ctx.redirect(`/admin/workshops/${id}?error=` + encodeURIComponent('Invalid start time.'));
  }
  const duration_minutes = parseInt(duration_minutes_str, 10);
  if (isNaN(duration_minutes) || duration_minutes < 5) {
    return ctx.redirect(`/admin/workshops/${id}?error=` + encodeURIComponent('Invalid duration.'));
  }
  const ends_at = new Date(starts_at.getTime() + duration_minutes * 60_000);

  const capacity = capacity_str ? parseInt(capacity_str, 10) : null;
  const updates: Record<string, any> = {
    starts_at: starts_at.toISOString(),
    ends_at: ends_at.toISOString(),
    capacity: capacity_str && capacity ? capacity : null,
    meeting_url,
    remind_24h: form.get('remind_24h') === '1',
    remind_1h: form.get('remind_1h') === '1',
    remind_15m: form.get('remind_15m') === '1',
  };
  if (recording_url) updates.recording_url = recording_url;
  else updates.recording_url = null;

  const client = makeAuthenticatedClient(ctx);
  const { error } = await client.from('lms_workshops').update(updates).eq('course_id', id);
  if (error) {
    return ctx.redirect(`/admin/workshops/${id}?error=` + encodeURIComponent(error.message));
  }
  return ctx.redirect(`/admin/workshops/${id}?saved=1`);
};
