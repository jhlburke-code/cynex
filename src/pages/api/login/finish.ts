import type { APIRoute } from 'astro';
import { setSessionCookies, makeBrowserClient } from '../../../lib/supabase';

// /api/login/finish — receives tokens from the client-side callback page and
// sets our session cookies. Accepts:
//   { access_token, refresh_token }   — implicit flow (Supabase default)
//   { code }                          — PKCE flow (server-side exchange)
export const POST: APIRoute = async (ctx) => {
  let payload: any;
  try { payload = await ctx.request.json(); } catch { return json({ ok: false, message: 'Bad JSON' }, 400); }

  const access_token = typeof payload.access_token === 'string' ? payload.access_token : '';
  const refresh_token = typeof payload.refresh_token === 'string' ? payload.refresh_token : '';
  const code = typeof payload.code === 'string' ? payload.code : '';
  const next = typeof payload.next === 'string' && payload.next.startsWith('/') ? payload.next : '/me';

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
  return json({ ok: true, next });

  function json(body: any, status = 200) {
    return new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });
  }
};
