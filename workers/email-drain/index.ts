// Cynex email drain Worker
// Triggered every minute by CF cron. Reads pending rows from lms_notification_queue,
// renders the template HTML, calls Resend to send, marks the row as sent.

export interface Env {
  SUPABASE_URL: string;
  SUPABASE_SERVICE_ROLE_KEY: string;
  RESEND_API_KEY: string;
  EMAIL_FROM_NAME: string;
  EMAIL_FROM_ADDRESS: string;
  WORKER_SECRET: string;
}

interface Notification {
  id: string;
  user_id: string;
  template: string;
  payload: Record<string, any>;
  send_at: string;
  attempts: number;
}

interface Profile { email: string; full_name: string | null; }
interface Course   { slug: string; title: string; description: string | null; }

// ---------- Templates ----------

const baseStyle = `<style>
  body { margin:0;padding:0;background:#F4F7FA;font-family:'Urbanist',Arial,sans-serif;color:#0F2347; }
  .container { max-width:600px;margin:24px auto;background:#FFFFFF;border:1px solid #0F2347;border-radius:8px;overflow:hidden; }
  .header { background:#1B3A6B;padding:36px 32px; }
  .header-tag { font-size:12px;font-weight:600;letter-spacing:0.28em;text-transform:uppercase;color:rgba(255,255,255,0.62);margin-bottom:14px; }
  .header-title { font-size:42px;line-height:1.1;margin:0;font-family:'Urbanist',sans-serif; }
  .header-title .ai { font-weight:800;color:#FFFFFF; }
  .header-title .made { font-weight:300;color:rgba(255,255,255,0.68); }
  .header-title .human { font-weight:800;color:#CC2229; }
  .body { padding:32px; }
  .body h1 { font-size:24px;font-weight:700;color:#1B3A6B;margin:0 0 12px; }
  .body p { font-size:16px;line-height:1.6;color:rgba(15,35,71,0.78);margin:0 0 20px; }
  .btn { display:inline-block;background:#CC2229;color:#FFFFFF !important;text-decoration:none !important;font-weight:700;font-size:16px;padding:14px 32px;border-radius:4px; }
  .meta { font-size:13px;line-height:1.6;color:rgba(15,35,71,0.55);margin-top:24px; }
  .footer { background:#0F2347;padding:20px 32px;color:rgba(255,255,255,0.55);font-size:12px;line-height:1.5;text-align:center; }
</style>`;

function escapeHtml(s: string): string {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function envelope(subject: string, bodyHtml: string): string {
  return `<!DOCTYPE html><html><head><meta charset="UTF-8">${baseStyle}</head><body>
<div class="container">
  <div class="header">
    <div class="header-tag">${escapeHtml(subject)}</div>
    <div class="header-title"><span class="ai">Cy</span><span class="made">n</span><span class="human">ex</span></div>
  </div>
  ${bodyHtml}
  <div class="footer">Sent by Cynex for the AIINOD learning program &middot; Ignore this message if it does not apply to you</div>
</div></body></html>`;
}

function renderTemplate(template: string, payload: Record<string, any>, profile: Profile, course: Course | null, baseUrl: string): { subject: string; html: string; text: string } {
  const name = escapeHtml(profile.full_name || 'there');
  if (template === 'completion' && course) {
    const url = `${baseUrl}/me`;
    const subject = `You completed: ${course.title}`;
    const inner = `<div class="body">
      <h1>Nice one, ${name} — you completed <em>${escapeHtml(course.title)}</em>.</h1>
      <p>Your completion row is recorded. ${payload.cert_url ? 'Your certificate PDF is ready below.' : "A certificate PDF will be available shortly (we're polishing that piece in Phase 5)."}</p>
      <p><a class="btn" href="${url}">View My Learning</a></p>
      <p class="meta">Course: ${escapeHtml(course.title)} (${escapeHtml(course.slug)})</p>
    </div>`;
    return { subject, html: envelope('Completion', inner), text: `Nice one, ${profile.full_name || 'there'} — you completed "${course.title}". View your learning: ${url}` };
  }
  if (template === 'enrollment_welcome' && course) {
    const url = `${baseUrl}/learn/${course.slug}`;
    const subject = `You're enrolled: ${course.title}`;
    const inner = `<div class="body">
      <h1>Welcome aboard, ${name}.</h1>
      <p>You're enrolled in <strong>${escapeHtml(course.title)}</strong>. Click below to start.</p>
      <p><a class="btn" href="${url}">Open course</a></p>
      <p class="meta">Course: ${escapeHtml(course.title)} &middot; You can revisit this link any time from /me</p>
    </div>`;
    return { subject, html: envelope('Enrollment confirmed', inner), text: `You're enrolled in "${course.title}". Open the course: ${url}` };
  }
  if (template === 'workshop_t24h') {
    const url = `${baseUrl}/learn/${payload.slug || ''}`;
    const starts = payload.starts_at ? new Date(payload.starts_at).toLocaleString() : 'TBA';
    const subject = `Workshop tomorrow: ${payload.title || 'Live session'}`;
    const inner = `<div class="body">
      <h1>Workshop tomorrow, ${name}.</h1>
      <p>"<strong>${escapeHtml(payload.title || '')}</strong>" starts at <strong>${escapeHtml(starts)}</strong>.</p>
      <p>Open the course page for the join link 15 minutes before the start.</p>
      <p><a class="btn" href="${url}">View workshop</a></p>
      <p class="meta">Sent by Cynex. Reply if you need to cancel.</p>
    </div>`;
    return { subject, html: envelope('Workshop reminder · 24h', inner), text: `Workshop "${payload.title}" starts at ${starts}. View: ${url}` };
  }
  if (template === 'workshop_t1h') {
    const url = payload.meeting_url || `${baseUrl}/learn/${payload.slug || ''}`;
    const starts = payload.starts_at ? new Date(payload.starts_at).toLocaleString() : 'shortly';
    const subject = `Workshop starts in 1 hour: ${payload.title || 'Live session'}`;
    const inner = `<div class="body">
      <h1>Starting in 1 hour, ${name}.</h1>
      <p>"<strong>${escapeHtml(payload.title || '')}</strong>" begins at <strong>${escapeHtml(starts)}</strong>.</p>
      <p><a class="btn" href="${url}">Join now</a></p>
      <p class="meta">Sent by Cynex.</p>
    </div>`;
    return { subject, html: envelope('Workshop reminder · 1h', inner), text: `Workshop "${payload.title}" starts in ~1 hour. Join: ${url}` };
  }
  if (template === 'recording_ready') {
    const url = payload.recording_url || `${baseUrl}/me`;
    const subject = `Recording available: ${payload.title || 'Workshop'}`;
    const inner = `<div class="body">
      <h1>Recording ready, ${name}.</h1>
      <p>The workshop "<strong>${escapeHtml(payload.title || '')}</strong>" has ended. Catch up on what you missed:</p>
      <p><a class="btn" href="${url}">Watch recording</a></p>
      <p class="meta">Sent by Cynex.</p>
    </div>`;
    return { subject, html: envelope('Recording available', inner), text: `Recording for "${payload.title}" is ready. Watch: ${url}` };
  }
  const subject = `Cynex: ${template}`;
  const inner = `<div class="body"><h1>${escapeHtml(subject)}</h1><p>${escapeHtml(profile.full_name || 'there')}</p><pre style="font-size:13px;background:#F4F7FA;padding:12px;border-radius:6px;overflow:auto;">${escapeHtml(JSON.stringify(payload, null, 2))}</pre></div>`;
  return { subject, html: envelope(template, inner), text: JSON.stringify(payload) };
}

// ---------- HTTP plumbing ----------

async function postgrest<T>(env: Env, path: string, init: RequestInit = {}): Promise<{ data: T | null; status: number; ok: true } | { ok: false; status: number; error: string }> {
  const headers = new Headers(init.headers || {});
  headers.set('apikey', env.SUPABASE_SERVICE_ROLE_KEY);
  headers.set('Authorization', `Bearer ${env.SUPABASE_SERVICE_ROLE_KEY}`);
  if (init.body && !headers.has('Content-Type')) headers.set('Content-Type', 'application/json');
  const resp = await fetch(`${env.SUPABASE_URL}${path}`, { ...init, headers });
  const status = resp.status;
  if (!resp.ok) {
    return { ok: false, status, error: (await resp.text()).slice(0, 500) };
  }
  let data: any = null;
  if (status !== 204) {
    try { data = await resp.json(); } catch { data = null; }
  }
  return { data, status, ok: true };
}

async function sendViaResend(env: Env, to: string, subject: string, html: string, text: string): Promise<{ id: string }> {
  const resp = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: `${env.EMAIL_FROM_NAME} <${env.EMAIL_FROM_ADDRESS}>`,
      to: [to],
      subject,
      html,
      text,
    }),
  });
  if (!resp.ok) throw new Error(`resend ${resp.status}: ${(await resp.text()).slice(0, 500)}`);
  const j = await resp.json() as { id: string };
  return j;
}

const BASE_URL = 'https://lms-e4f.pages.dev';

async function drainPass(env: Env, log: (m: string) => void): Promise<{ processed: number; sent: number; failed: number }> {
  const pendingRes = await postgrest<Notification[]>(env,
    `/rest/v1/lms_notification_queue?select=id,user_id,template,payload,send_at,attempts&sent_at=is.null&order=send_at&limit=50`,
  );
  if (!pendingRes.ok) {
    log(`queue fetch failed: status=${pendingRes.status} error=${pendingRes.error.slice(0, 200)}`);
    return { processed: 0, sent: 0, failed: 0 };
  }
  const items = pendingRes.data || [];
  log(`pending rows: ${items.length}`);
  let sent = 0, failed = 0;
  for (const item of items) {
    try {
      // email + full_name both live on lms_profiles (denormalised from auth.users via trigger).
      const profileRes = await postgrest<Profile[]>(env,
        `/rest/v1/lms_profiles?select=email,full_name&user_id=eq.${encodeURIComponent(item.user_id)}&limit=1`,
      );
      const email = (profileRes.ok && profileRes.data && profileRes.data[0]?.email) || '';
      const full_name = (profileRes.ok && profileRes.data && profileRes.data[0]?.full_name) || null;
      if (!email) throw new Error('profile has no email');

      let course: Course | null = null;
      const courseId = item.payload?.course_id;
      if (courseId) {
        const cr = await postgrest<Course[]>(env,
          `/rest/v1/lms_courses?select=slug,title,description&id=eq.${encodeURIComponent(courseId)}&limit=1`,
        );
        course = (cr.ok && cr.data && cr.data[0]) || null;
      }

      const { subject, html, text } = renderTemplate(item.template, item.payload || {}, { email, full_name }, course, BASE_URL);
      const res = await sendViaResend(env, email, subject, html, text);

      await postgrest(env,
        `/rest/v1/lms_notification_queue?id=eq.${encodeURIComponent(item.id)}`,
        { method: 'PATCH', body: JSON.stringify({ sent_at: new Date().toISOString(), resend_id: res.id }) },
      );
      sent += 1;
      log(`sent id=${item.id} to=${email} subject="${subject}"`);
    } catch (e) {
      failed += 1;
      const attempts = (item.attempts || 0) + 1;
      const backoffMins = Math.min(60, Math.pow(2, attempts));
      const next = new Date(Date.now() + backoffMins * 60_000).toISOString();
      await postgrest(env,
        `/rest/v1/lms_notification_queue?id=eq.${encodeURIComponent(item.id)}`,
        { method: 'PATCH', body: JSON.stringify({ attempts, error: String(e).slice(0, 500), send_at: next }) },
      );
      log(`fail id=${item.id} attempt=${attempts} err=${String(e).slice(0, 200)}`);
    }
  }
  return { processed: items.length, sent, failed };
}

// ---------- Entry points ----------

export default {
  async scheduled(event: ScheduledController, env: Env, ctx: ExecutionContext): Promise<void> {
    ctx.waitUntil((async () => {
      try {
        const log = (m: string) => console.log(`[cynex-email-drain ${new Date().toISOString()}] ${m}`);
        const r = await drainPass(env, log);
        log(`done processed=${r.processed} sent=${r.sent} failed=${r.failed}`);
      } catch (e) {
        console.error(`[cynex-email-drain] fatal: ${String(e)}`);
      }
    })());
  },

  async fetch(req: Request, env: Env): Promise<Response> {
    try {
      const url = new URL(req.url);
      if (url.pathname === '/health') {
        return new Response(`cynex-email-drain alive\nenv: supabase=${env.SUPABASE_URL ? 'ok' : '?'} service_role=${env.SUPABASE_SERVICE_ROLE_KEY ? env.SUPABASE_SERVICE_ROLE_KEY.slice(0, 8) + '…' : '?'} resend=${env.RESEND_API_KEY ? 'ok' : '?'} work_secret=${env.WORKER_SECRET ? 'ok' : '?'}\nfrom: ${env.EMAIL_FROM_NAME} <${env.EMAIL_FROM_ADDRESS}>`, { status: 200 });
      }
      if (url.pathname === '/drain') {
        const secret = url.searchParams.get('secret') || req.headers.get('x-cynex-secret') || '';
        if (!env.WORKER_SECRET || secret !== env.WORKER_SECRET) {
          return new Response('forbidden', { status: 403 });
        }
        const lines: string[] = [];
        const log = (m: string) => lines.push(`[${new Date().toISOString()}] ${m}`);
        const r = await drainPass(env, log);
        return new Response(JSON.stringify({ ok: true, ...r, log: lines }, null, 2), { status: 200, headers: { 'Content-Type': 'application/json' } });
      }
      return new Response('not found', { status: 404 });
    } catch (e) {
      const err = e as Error;
      return new Response(JSON.stringify({ ok: false, error: String(e), message: err?.message, stack: err?.stack?.slice(0, 800) }, null, 2), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
  },
};
