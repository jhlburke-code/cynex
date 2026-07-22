import type { APIRoute } from 'astro';
import { makeAuthenticatedClient, getCurrentUser } from '../../lib/supabase';

export const POST: APIRoute = async (ctx) => {
  const user = await getCurrentUser(ctx);
  if (!user) return json({ ok: false, message: 'not_authenticated' }, 401);

  let payload: any;
  try { payload = await ctx.request.json(); } catch { return json({ ok: false, message: 'bad_json' }, 400); }

  const course_id = typeof payload.course_id === 'string' ? payload.course_id : '';
  const slug = typeof payload.slug === 'string' ? payload.slug : '';
  const method = typeof payload.method === 'string' ? payload.method : 'iframe_postmessage';
  if (!course_id) return json({ ok: false, message: 'missing_course_id' }, 400);

  const client = makeAuthenticatedClient(ctx);

  // Insert completion (RLS policy allows self-insert on user_id = auth.uid()).
  // unique (user_id, course_id) ensures idempotency.
  const { error: cErr } = await client
    .from('lms_completions')
    .upsert(
      { user_id: user.id, course_id, completion_method: method },
      { onConflict: 'user_id,course_id', count: 'exact' },
    );

  if (cErr) {
    return json({ ok: false, message: `completion_insert_failed: ${cErr.message}` }, 500);
  }

  // Mark enrollment completed
  await client
    .from('lms_enrollments')
    .update({ status: 'completed' })
    .eq('user_id', user.id)
    .eq('course_id', course_id);

  // Queue a completion notification — drained by pg_cron every minute
  // (Phase 2 wires up the drain function + Resend SMTP).
  await client.from('lms_notification_queue').insert({
    user_id: user.id,
    template: 'completion',
    payload: { course_id, slug },
    send_at: new Date().toISOString(),
  });

  return json({ ok: true, slug });

  function json(body: any, status = 200) {
    return new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });
  }
};
