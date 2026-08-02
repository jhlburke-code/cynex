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
  const consent = form.get('consent');

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

  // GDPR Art. 7(1) consent capture. The checkbox is required (HTML `required`
  // + the submit button is disabled until ticked), so the browser won't submit
  // the form without it. We still defense-check here in case the form is
  // submitted programmatically.
  if (consent !== 'on') {
    return ctx.redirect('/login?error=consent_required');
  }

  if (!ctx.locals.runtime.env.SUPABASE_URL) {
    return ctx.redirect('/login?error=config');
  }

  // Capture consent evidence: timestamp, IP, user-agent, text version. The
  // text version is the identifier of the privacy notice the user agreed to;
  // if the privacy info box content changes, the version bumps and returning
  // users are technically re-consenting (the checkbox is still required).
  const consentAt = new Date().toISOString();
  const consentTextVersion = '2026-08-02-v1';
  const ipAtConsent = (ctx.request.headers.get('cf-connecting-ip')
                    ?? ctx.request.headers.get('x-forwarded-for')
                    ?? '').split(',')[0].trim();
  const userAgentAtConsent = ctx.request.headers.get('user-agent') ?? '';

  const client = makeBrowserClient(ctx);
  const origin = requestOrigin(ctx);
  // Pass the name + consent evidence through the magic-link URL so
  // /api/login/finish can write it to lms_profiles — relying on options.data
  // alone doesn't reliably update user_metadata for existing users, so we
  // belt-and-suspender it.
  const callbackParams = new URLSearchParams({ next });
  callbackParams.set('full_name', fullName);
  callbackParams.set('consent_at', consentAt);
  callbackParams.set('consent_text_version', consentTextVersion);
  callbackParams.set('ip_at_consent', ipAtConsent);
  callbackParams.set('user_agent_at_consent', userAgentAtConsent);
  const { error } = await client.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: `${origin}/api/login/callback?${callbackParams.toString()}`,
      data: {
        full_name: fullName,
        consent_at: consentAt,
        consent_text_version: consentTextVersion,
        ip_at_consent: ipAtConsent,
        user_agent_at_consent: userAgentAtConsent,
      },
    },
  });

  if (error) {
    return ctx.redirect(`/login?error=${encodeURIComponent(error.message)}`);
  }
  return ctx.redirect(`/login?sent=${encodeURIComponent(email)}`);
};
