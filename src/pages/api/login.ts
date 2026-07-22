import type { APIRoute } from 'astro';
import { makeBrowserClient } from '../../lib/supabase';

function requestOrigin(ctx: any): string {
  // Cloudflare Pages sits behind a reverse proxy; x-forwarded-proto + host are
  // the reliable signals. request.url on the Worker comes through as http://localhost.
  const proto = ctx.request.headers.get('x-forwarded-proto') ?? 'https';
  const host = ctx.request.headers.get('host') ?? 'lms-e4f.pages.dev';
  return `${proto}://${host}`;
}

export const POST: APIRoute = async (ctx) => {
  const form = await ctx.request.formData();
  const email = String(form.get('email') ?? '').trim().toLowerCase();
  const next = String(form.get('next') ?? '/me');

  if (!email || !email.includes('@')) {
    return ctx.redirect('/login?error=invalid');
  }

  if (!ctx.locals.runtime.env.SUPABASE_URL) {
    return ctx.redirect('/login?error=config');
  }

  const client = makeBrowserClient(ctx);
  const origin = requestOrigin(ctx);
  const { error } = await client.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: `${origin}/api/login/callback?next=${encodeURIComponent(next)}`,
    },
  });

  if (error) {
    return ctx.redirect(`/login?error=${encodeURIComponent(error.message)}`);
  }
  return ctx.redirect(`/login?sent=${encodeURIComponent(email)}`);
};
