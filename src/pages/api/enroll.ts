// /api/enroll — eLearning self-enrollment endpoint.
//
// Two layers of defense, applied in order of preference:
//
// 1. **Plan B1 (service-role proxy) — the primary path when enabled.**
//    `cynex-db-proxy` is a sibling Worker to `cynex-email-drain` that
//    handles the failing write paths (`lms_enrollments.upsert` and
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
// Original commit (inline-only): `8e4b4741` (the "Phase 2 — self-enroll + content" merge).
// Plan B1 wiring: Session 9 of `daily/2026-09-05.md`.
import type { APIRoute } from 'astro';
import { makeAuthenticatedClient, getCurrentUser } from '../../lib/supabase';

const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

// ─── Plan B1: proxy invocation ───────────────────────────────────────────

interface PlanBResult {
  handled: boolean;
  redirect?: string;
  status?: number;
  body?: string;
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
    const resp = await fetch(`${url}/enroll`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(secret ? { 'x-cynex-secret': secret } : {}),
        cookie: ctx.request.headers.get('cookie') || '',
      },
      body: JSON.stringify(body),
    });
    const text = await resp.text();
    if (!resp.ok) {
      console.warn(`cynex-db-proxy /enroll returned ${resp.status}; falling back. ${text.slice(0, 200)}`);
      return { handled: false, status: resp.status, body: text };
    }
    let parsed: any = null;
    try { parsed = JSON.parse(text); } catch { /* keep raw */ }
    if (parsed?.ok && parsed.slug) {
      return { handled: true, redirect: `/learn/${parsed.slug}` };
    }
    // Proxy said ok but didn't tell us where to send the user — fail safe.
    return { handled: false, status: 502, body: text };
  } catch (e) {
    console.warn(`cynex-db-proxy /enroll unreachable; falling back. ${(e as Error).message}`);
    return { handled: false };
  }
}

// ─── Inline upsert with 1-retry on PGRST303 (clock-skew transient) ─────

async function upsertEnrollment(ctx: any, userId: string, courseId: string) {
  for (let attempt = 0; attempt < 2; attempt++) {
    const client = makeAuthenticatedClient(ctx);
    const { error } = await client
      .from('lms_enrollments')
      .upsert(
        { user_id: userId, course_id: courseId, enrolled_by: null },
        { onConflict: 'user_id,course_id' },
      );
    if (!error) return { error: null };
    if (!/issued at future/i.test(error.message ?? '')) return { error };
    if (attempt === 0) await sleep(1500);
  }
  return { error: { message: 'JWT issued at future' } };
}

function courseSlugForForm(form: FormData): string {
  return String(form.get('course_slug') ?? '');
}

// ─── Handler ─────────────────────────────────────────────────────────────

export const POST: APIRoute = async (ctx) => {
  const user = await getCurrentUser(ctx);
  if (!user) {
    const form = await ctx.request.formData();
    const slug = courseSlugForForm(form);
    return ctx.redirect(`/login?next=/c/${slug}`);
  }

  const form = await ctx.request.formData();
  const courseId = String(form.get('course_id') ?? '');
  const slug = courseSlugForForm(form);
  if (!courseId) return new Response('Missing course_id', { status: 400 });

  // ── Plan B1: try the proxy first when enabled. ────────────────────────
  const proxy = await tryProxy(ctx, {
    course_id: courseId,
    course_slug: slug,
    user_id: user.id,
  });
  if (proxy.handled && proxy.redirect) {
    return ctx.redirect(proxy.redirect);
  }
  // ── end Plan B1 ──────────────────────────────────────────────────────

  const { error } = await upsertEnrollment(ctx, user.id, courseId);
  if (error) {
    return new Response(`Enroll failed: ${error.message}`, { status: 500 });
  }
  return ctx.redirect(`/learn/${slug}`);
};