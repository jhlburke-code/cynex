import type { APIContext } from 'astro';
import { getCurrentUser, isAdminEmail } from './supabase';

export type CurrentUser = { id: string; email: string };

export interface AdminGateResult { user: CurrentUser; }
export interface AnonGateResult { user: null; redirectTo: string; }

/**
 * SSR gate. Returns {user} on pass, or a 302 Response on fail.
 * Call from the frontmatter:
 *
 *   const gate = await requireAdmin(Astro);
 *   if (gate instanceof Response) return gate;
 */
export async function requireAdmin(ctx: APIContext): Promise<AdminGateResult | Response> {
  const user = await getCurrentUser(ctx);
  if (!user) {
    const path = ctx.url?.pathname || '/admin';
    return ctx.redirect(`/login?next=${encodeURIComponent(path)}`, 302);
  }
  if (!isAdminEmail(user.email)) {
    return new Response('forbidden — admin only', { status: 403, headers: { 'Content-Type': 'text/plain' } });
  }
  return { user };
}
