import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import type { APIContext } from 'astro';

const ADMIN_EMAILS = new Set<string>([
  'jhl.burke@gmail.com', // operator bootstrap
]);

export function isAdminEmail(email: string | null | undefined): boolean {
  return !!email && ADMIN_EMAILS.has(email.toLowerCase());
}

export function makeBrowserClient(ctx: APIContext): SupabaseClient {
  return createClient(
    ctx.locals.runtime.env.SUPABASE_URL,
    ctx.locals.runtime.env.SUPABASE_ANON_KEY,
    {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false,
      },
    },
  );
}

export function makeAuthenticatedClient(ctx: APIContext): SupabaseClient {
  // Build a supabase-js client pre-loaded with the user's access_token as the
  // global Authorization header. RLS's auth.uid() resolves correctly server-side.
  const accessToken = ctx.cookies.get('sb-access-token')?.value;
  const headers: Record<string, string> = {};
  if (accessToken) headers.Authorization = `Bearer ${accessToken}`;
  return createClient(
    ctx.locals.runtime.env.SUPABASE_URL,
    ctx.locals.runtime.env.SUPABASE_ANON_KEY,
    {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false,
      },
      global: { headers },
    },
  );
}

export async function setSessionCookies(ctx: APIContext, session: { access_token: string; refresh_token: string }) {
  ctx.cookies.set('sb-access-token', session.access_token, {
    path: '/', httpOnly: true, secure: true, sameSite: 'lax', maxAge: 60 * 60,
  });
  ctx.cookies.set('sb-refresh-token', session.refresh_token, {
    path: '/', httpOnly: true, secure: true, sameSite: 'lax', maxAge: 60 * 60 * 24 * 7,
  });
}

export function clearSessionCookies(ctx: APIContext) {
  ctx.cookies.delete('sb-access-token', { path: '/' });
  ctx.cookies.delete('sb-refresh-token', { path: '/' });
}

// Direct verification — fetches /auth/v1/user with the access token as Bearer.
// Bypasses supabase-js session restore quirks in SSR.
export async function getCurrentUser(ctx: APIContext): Promise<{ id: string; email: string } | null> {
  const accessToken = ctx.cookies.get('sb-access-token')?.value;
  if (!accessToken) return null;

  const supabaseUrl = ctx.locals.runtime.env.SUPABASE_URL;
  const anonKey = ctx.locals.runtime.env.SUPABASE_ANON_KEY;
  const resp = await fetch(`${supabaseUrl}/auth/v1/user`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      apikey: anonKey,
    },
  });
  if (!resp.ok) {
    // token expired or invalid — clear cookies so /me doesn't bounce forever
    clearSessionCookies(ctx);
    return null;
  }
  const user = (await resp.json()) as { id: string; email?: string };
  return { id: user.id, email: user.email ?? '' };
}

// Server-side query helper: postgrest GET with the user's access token.
export async function authenticatedFetch(
  ctx: APIContext,
  path: string,
  init: RequestInit = {},
): Promise<Response> {
  const accessToken = ctx.cookies.get('sb-access-token')?.value;
  const supabaseUrl = ctx.locals.runtime.env.SUPABASE_URL;
  const anonKey = ctx.locals.runtime.env.SUPABASE_ANON_KEY;
  const headers = new Headers(init.headers || {});
  headers.set('apikey', anonKey);
  if (accessToken) headers.set('Authorization', `Bearer ${accessToken}`);
  return fetch(`${supabaseUrl}${path}`, { ...init, headers });
}
