import type { APIRoute } from 'astro';
import { setSessionCookies, makeBrowserClient, makeServiceRoleClient } from '../../../lib/supabase';
import { normalizeName } from '../../../lib/name';

// /api/login/finish — receives tokens from the client-side callback page and
// sets our session cookies. Accepts:
//   { access_token, refresh_token }   — implicit flow (Supabase default)
//   { code }                          — PKCE flow (server-side exchange)
// Also writes the user-provided full_name (passed through the magic-link URL)
// to lms_profiles so certificates and /me show the real name. Idempotent:
// null profile gets written; existing name is left alone unless the form
// value differs.
export const POST: APIRoute = async (ctx) => {
  let payload: any;
  try { payload = await ctx.request.json(); } catch { return json({ ok: false, message: 'Bad JSON' }, 400); }

  const access_token = typeof payload.access_token === 'string' ? payload.access_token : '';
  const refresh_token = typeof payload.refresh_token === 'string' ? payload.refresh_token : '';
  const code = typeof payload.code === 'string' ? payload.code : '';
  const next = typeof payload.next === 'string' && payload.next.startsWith('/') ? payload.next : '/me';
  const fullNameForm = typeof payload.full_name === 'string' ? normalizeName(payload.full_name) : null;

  if (!access_token && !code) return json({ ok: false, message: 'Missing access_token or code' }, 400);

  const client = makeBrowserClient(ctx);
  let resolvedAccess = access_token;
  let resolvedRefresh = refresh_token;

  if (!resolvedAccess && code) {
    const { data, error } = await client.auth.exchangeCodeForSession(code);
    if (error || !data.session) {
      return json({ ok: false, message: `code_exchange_failed: ${error?.message ?? 'no_session'}` }, 400);
    }
    resolvedAccess = data.session.access_token;
    resolvedRefresh = data.session.refresh_token;
  }

  await setSessionCookies(ctx, { access_token: resolvedAccess, refresh_token: resolvedRefresh });

  // Sync full_name to lms_profiles. We have an authenticated context now
  // (cookies are set above), so we can resolve the user_id via the access
  // token and update the profile row directly with the service-role client.
  if (fullNameForm && resolvedAccess) {
    try {
      const { data: userData, error: userErr } = await client.auth.getUser(resolvedAccess);
      const userId = userData?.user?.id;
      if (!userErr && userId) {
        const admin = makeServiceRoleClient(ctx);
        if (admin) {
          const { data: profile } = await admin
            .from('lms_profiles')
            .select('full_name')
            .eq('user_id', userId)
            .maybeSingle();
          const currentName = (profile?.full_name ?? '').trim() || null;
          if (!currentName || currentName.toLowerCase() !== fullNameForm.toLowerCase()) {
            // Upsert so this also handles the rare case where the trigger
            // hasn't created the row yet (e.g. invite-then-immediate-signin).
            await admin
              .from('lms_profiles')
              .upsert(
                { user_id: userId, full_name: fullNameForm, email: userData.user.email ?? undefined },
                { onConflict: 'user_id' },
              );
          }
        }
      }
    } catch (e) {
      // Non-fatal: cookies are set, profile write can be retried on next signin.
      console.error('profile full_name sync failed:', (e as Error).message);
    }
  }

  return json({ ok: true, next });

  function json(body: any, status = 200) {
    return new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });
  }
};
