import type { APIRoute } from 'astro';
import { makeAuthenticatedClient, getCurrentUser, makeServiceRoleClient } from '../../lib/supabase';
import { ensureCertificate } from '../../lib/certificates';

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
  const { data: completionData, error: cErr } = await client
    .from('lms_completions')
    .upsert(
      { user_id: user.id, course_id, completion_method: method },
      { onConflict: 'user_id,course_id', count: 'exact' },
    )
    .select('id, completed_at, certificate_url')
    .single();

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
    payload: { course_id, slug, certificate_url: completionData?.certificate_url ?? null },
    send_at: new Date().toISOString(),
  });

  // Phase 5: kick off certificate generation in the background.
  // Don't block the response on this — the email/download flow will lazy-load.
  if (completionData?.id && !completionData.certificate_url) {
    ctx.waitUntil(generateCertAsync(ctx, user.id, completionData.id, course_id, slug));
  }

  return json({
    ok: true,
    slug,
    completion_id: completionData?.id ?? null,
  });

  function json(body: any, status = 200) {
    return new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });
  }
};

async function generateCertAsync(
  ctx: any,
  userId: string,
  completionId: string,
  courseId: string,
  slug: string,
): Promise<void> {
  try {
    const admin = makeServiceRoleClient(ctx);
    if (!admin) return;
    const { data: completion } = await admin
      .from("lms_completions")
      .select("id, user_id, completed_at, lms_courses ( title, slug )")
      .eq("id", completionId)
      .maybeSingle();
    if (!completion) return;
    const { data: profile } = await admin
      .from("lms_profiles")
      .select("email, full_name")
      .eq("user_id", userId)
      .maybeSingle();
    await ensureCertificate(
      ctx,
      {
        id: completion.id,
        user_id: completion.user_id,
        completed_at: completion.completed_at,
        courses: (completion as any).lms_courses,
      },
      profile,
    );
  } catch (e) {
    // Silent fail — the user can still download from /me/certificates
    // which lazy-generates via /api/certificates/[id].
    console.error("background cert gen failed:", (e as Error).message);
  }
}

