import type { APIContext, AstroGlobal } from 'astro';
import { getCurrentUser, isAdminEmail, clearSessionCookies } from './supabase';

export type CurrentUser = { id: string; email: string };

export interface AdminGateResult {
  user: CurrentUser;
}
export interface AnonGateResult {
  user: null;
  redirectTo: string;
}

/** Redirect to /login if no session, return early if not admin. */
export async function requireAdmin(ctx: APIContext | AstroGlobal): Promise<AdminGateResult | Response> {
  const user = await getCurrentUser(ctx as APIContext);
  if (!user) {
    const url = (ctx as APIContext).request?.url || (ctx as AstroGlobal).url.toString();
    return Response.redirect(new URL('/login?next=' + encodeURIComponent(new URL(url).pathname), new URL(url).origin).toString(), 302);
  }
  if (!isAdminEmail(user.email)) {
    return new Response('forbidden — admin only', { status: 403 });
  }
  return { user };
}
