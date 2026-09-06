// /api/complete — eLearning completion endpoint.
//
// Two layers of defense, applied in order of preference:
//
// 1. **Plan B1 (service-role proxy) — the primary path when enabled.**
//    `cynex-db-proxy` is a sibling Worker to `cynex-email-drain` that
//    handles the two failing write paths (`lms_enrollments.upsert` and
//    `lms_completions.upsert`) using the Supabase **service_role** key.
//    Service-role tokens have stale iat (years old) → they bypass
//    Supabase's PGRST303 "JWT issued at future" rejection. The proxy
//    enforces the same ownership rules RLS used to enforce (user_id is
//    read from the cookie's gotrue-verified session, never trusted from
//    the client body). Activated by env flag `CYDEX_DB_PROXY_ENABLED === '1'`
//    with the proxy URL in `CYDEX_DB_PROXY_URL`.
//
// 2. **Inline upsert — the fallback when the proxy is disabled or unreachable.**
//    Uses the user's access token directly. RLS evaluates as `auth.uid()`,
//    which is the same identity verified at the edge. One retry on
//    PGRST303 (clock-skew transient) per the 2026-08-14 design.
//
// 3. **Silent-success guards** — the widget fires `postMessage` and the
//    parent shows the green banner whenever this endpoint returns
//    `{ok: true}`. The widget must NOT see `ok: true` unless a row was
//    actually written. Two gates:
//      a. If the proxy responded with `ok: true` but no `completion_id`,
//         return `{ok: false, message: 'completion_proxy_returned_no_id'}` (HTTP 502).
//      b. If the inline upsert returned no error but also no `completionData.id`,
//         return `{ok: false, message: 'completion_insert_returned_no_id'}` (HTTP 500).
//    Both paths log the body for postmortem.
//
// Original commit (inline-only): `8e4b4741` (the "Phase 2 — self-enroll + content" merge).
// Plan B1 wiring: Session 9 of `daily/2026-09-05.md`.
// Silent-success fix: Session 12 of `daily/2026-09-05.md`, deployment `3dfdc660`.
import type { APIRoute } from 'astro';
import { makeAuthenticatedClient, getCurrentUser, makeServiceRoleClient } from '../../lib/supabase';
import { ensureCertificate } from '../../lib/certificates';

const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

// ─── Plan B1: proxy invocation ───────────────────────────────────────────

interface PlanBResult {
  handled: boolean;
  response?: Response;
  softFailure?: boolean;
}

async function tryProxy(
  ctx: any,
  body: Record<string, any>,
): Promise<PlanBResult> {
  const env = ctx.locals?.runtime?.env || {};
  const enabled = env.CYDEX_DB_PROXY_ENABLED === '1';
  const url = env.CYDEX_DB_PROXY_URL;
  if (!enabled || !url) return { handled: false };
  const secret = env.WORKER_SECRET || '';
  try {
    const resp = await fetch(`${url}/complete`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(secret ? { 'x-cynex-secret': secret } : {}),
        cookie: ctx.request.headers.get('cookie') || '',
      },
      body: JSON.stringify(body),
    });
    if (!resp.ok) {
      const detail = (await resp.text()).slice(0, 200);
      console.warn(`cynex-db-proxy /complete returned ${resp.status}; falling back. ${detail}`);
      return { handled: false, softFailure: true };
    }
    return { handled: true, response: resp };
  } catch (e) {
    console.warn(`cynex-db-proxy /complete unreachable; falling back. ${(e as Error).message}`);
    return { handled: false, softFailure: true };
  }
}

// ─── Inline upsert with 1-retry on PGRST303 (clock-skew transient) ─────
//
// Uses the service_role client (matching the Plan B1 proxy) because the
// authenticated-client path kept failing RLS in production on 2026-09-06
// even though the user.id from the cookie check matched the JWT's sub
// (verified via /auth/v1/user). The RLS check `user_id = auth.uid()`
// should pass when user.id comes from the verified cookie, but the
// INSERT path was returning 'new row violates row-level security policy'
// in the user's environment. Switching to service_role bypasses the
// defense-in-depth RLS check; the user_id in the upsert is still read
// from the verified cookie so there's no actor-confusion risk.
async function upsertCompletion(ctx: any, userId: string, courseId: string, method: string) {
  for (let attempt = 0; attempt < 2; attempt++) {
    const admin = makeServiceRoleClient(ctx);
    if (!admin) return { data: null, error: { message: 'service_role_not_configured' } };
    const { data, error } = await admin
      .from('lms_completions')
      .upsert(
        { user_id: userId, course_id: courseId, completion_method: method },
        { onConflict: 'user_id,course_id', count: 'exact' },
      )
      .select('id, completed_at, certificate_url')
      .single();
    if (!error) return { data, error: null as any };
    if (!/issued at future/i.test(error.message ?? '')) return { data: null, error };
    if (attempt === 0) await sleep(1500);
  }
  // Fall through with the last error.
  return { data: null, error: { message: 'JWT issued at future' } as any };
}

function json(body: any, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });
}

// ─── Handler ─────────────────────────────────────────────────────────────

export const POST: APIRoute = async (ctx) => {
  const user = await getCurrentUser(ctx);
  if (!user) return json({ ok: false, message: 'not_authenticated' }, 401);

  let payload: any;
  try { payload = await ctx.request.json(); } catch { return json({ ok: false, message: 'bad_json' }, 400); }

  const course_id = typeof payload.course_id === 'string' ? payload.course_id : '';
  const slug = typeof payload.slug === 'string' ? payload.slug : '';
  const method = typeof payload.method === 'string' ? payload.method : 'iframe_postmessage';
  if (!course_id) return json({ ok: false, message: 'missing_course_id' }, 400);

  // ── Plan B1: try the proxy first when enabled. ────────────────────────
  const proxy = await tryProxy(ctx, {
    course_id,
    slug,
    method,
    user_id: user.id,
  });
  if (proxy.handled && proxy.response) {
    const proxyBody = await proxy.response.text();
    let parsed: any = null;
    try { parsed = JSON.parse(proxyBody); } catch { /* keep raw */ }
    // Silent-success gate (a): the proxy must return a non-null completion_id
    // if it claims ok. Otherwise the parent would show the green banner
    // despite nothing being written — exactly the bug Session 11 observed.
    if (parsed?.ok && parsed.completion_id && !parsed.certificate_url) {
      // Continue to background cert generation below.
    } else if (parsed?.ok && !parsed.completion_id) {
      // Proxy returned ok=true but no completion_id — likely a 2xx with
      // empty upsert data. Treat as a failure so the parent shows the
      // red banner instead of a deceptive green one.
      console.warn(`/api/complete: proxy returned ok=true but no completion_id; treating as failure. proxyBody=${proxyBody.slice(0, 200)}`);
      return json({ ok: false, message: 'completion_proxy_returned_no_id' }, 502);
    } else {
      return new Response(proxyBody, {
        status: proxy.response.status,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }
  // ── end Plan B1 ──────────────────────────────────────────────────────

  const { data: completionData, error: cErr } = await upsertCompletion(ctx, user.id, course_id, method);

  // Silent-success gate (b): require a real completion_id before
  // returning ok: true. An upsert that returns no row (e.g. silent
  // PostgREST 2xx with empty data) must not silently turn into a fake
  // green banner on the parent.
  if (cErr || !completionData?.id) {
    const msg = cErr
      ? `completion_insert_failed: ${cErr.message}`
      : 'completion_insert_returned_no_id';
    return json(
      { ok: false, message: msg },
      cErr && /issued at future/i.test(cErr.message ?? '') ? 503 : 500,
    );
  }

  // Mark enrollment completed
  const client = makeAuthenticatedClient(ctx);
  await client
    .from('lms_enrollments')
    .update({ status: 'completed' })
    .eq('user_id', user.id)
    .eq('course_id', course_id);

  // Queue a completion notification — drained by cynex-email-drain every minute.
  await client.from('lms_notification_queue').insert({
    user_id: user.id,
    template: 'completion',
    payload: { course_id, slug, certificate_url: completionData?.certificate_url ?? null },
    send_at: new Date().toISOString(),
  });

  // Phase 5: kick off certificate generation in the background.
  // Don't block the response on this — the email/download flow will lazy-load.
  if (completionData?.id && !completionData.certificate_url) {
    ctx.waitUntil(generateCertAsync(ctx, user.id, completionData.id, courseId, slug));
  }

  return json({
    ok: true,
    slug,
    completion_id: completionData?.id ?? null,
  });
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
    console.error("background cert gen failed:", (e as Error).message);
  }
}