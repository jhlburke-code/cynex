import type { APIRoute } from 'astro';
import { makeBrowserClient } from '../../lib/supabase';
import { normalizeName } from '../../lib/name';

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
  const fullNameRaw = String(form.get('full_name') ?? '');
  const next = String(form.get('next') ?? '/me');

  if (!email || !email.includes('@')) {
    return ctx.redirect('/login?error=invalid');
  }

  // Normalize name server-side: trim, collapse whitespace, capitalize tokens.
  // The Supabase auth trigger reads raw_user_meta_data->>'full_name' on insert;
  // returning users keep their stored name (trigger only sets full_name on first
  // insert via the ON CONFLICT clause in 20260722180001_lms_profiles_email_sync).
  const fullName = normalizeName(fullNameRaw);
  if (!fullName) {
    return ctx.redirect('/login?error=name_required');
  }

  if (!ctx.locals.runtime.env.SUPABASE_URL) {
    return ctx.redirect('/login?error=config');
  }

  const client = makeBrowserClient(ctx);
  const origin = requestOrigin(ctx);
  // Pass the name through the magic-link URL so /api/login/finish can write it
  // to lms_profiles — relying on options.data alone doesn't reliably update
  // user_metadata for existing users, so we belt-and-suspender it.
  const callbackParams = new URLSearchParams({ next });
  callbackParams.set('full_name', fullName);
  const { error } = await client.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: `${origin}/api/login/callback?${callbackParams.toString()}`,
      data: { full_name: fullName },
    },
  });

  if (error) {
    return ctx.redirect(`/login?error=${encodeURIComponent(error.message)}`);
  }
  return ctx.redirect(`/login?sent=${encodeURIComponent(email)}`);
};
