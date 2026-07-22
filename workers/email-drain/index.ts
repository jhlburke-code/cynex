// Cynex email drain Worker
// Triggered every minute by CF cron. Reads pending rows from lms_notification_queue,
// renders the template HTML, calls Resend to send, marks the row as sent.

export interface Env {
  SUPABASE_URL: string;
  SUPABASE_SERVICE_ROLE_KEY: string;
  RESEND_API_KEY: string;
  EMAIL_FROM_NAME: string;        // "Cynex"
  EMAIL_FROM_ADDRESS: string;     // "onboarding@resend.dev"
  WORKER_SECRET: string;          // shared secret for the manual /drain endpoint
}

interface Notification {
  id: string;
  user_id: string;
  template: string;
  payload: Record<string, any>;
  send_at: string;
  attempts: number;
}

interface Profile {
  email: string;
  full_name: string | null;
}

interface Course {
  slug: string;
  title: string;
  description: string | null;
}

// ---------- Templates (HTML emails matching the existing AIINOD brand) ----------

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
  <div class="footer">
    Sent by Cynex for the AIINOD learning program &middot; Ignore this message if it doesn't apply to you
  </div>
</div></body></html>`;
}

const TEXT_LINE = '</p><p>';

function renderTemplate(template: string, payload: Record<string, any>, profile: Profile, course: Course | null): { subject: string; html: string; text: string } {
  const name = escapeHtml(profile.full_name || 'there');
  if (template === 'completion' && course) {
    const url = `${payload.base_url || 'https://lms-e4f.pages.dev'}/me`;
    const subject = `You completed: ${course.title}`;
    const inner = `<div class="body">
      <h1>Nice one, ${name} \u2014 you completed <em>${escapeHtml(course.title)}</em>.</h1>
      <p>Your completion row is recorded. ${payload.cert_url ? 'Your certificate PDF is ready below.' : 'A certificate PDF will be available shortly (we\'re polishing that piece in Phase 5).'}</p>
      <p><a class="btn" href="${url}">View My Learning</a></p>
      <p class="meta">Course: ${escapeHtml(course.title)} (${escapeHtml(course.slug)})</p>
    </div>`;
    return { subject, html: envelope('Completion', inner), text: `Nice one, ${profile.full_name || 'there'} — you completed "${course.title}". View your learning: ${url}` };
  }
  if (template === 'enrollment_welcome' && course) {
    const url = `${payload.base_url || 'https://lms-e4f.pages.dev'}/learn/${course.slug}`;
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
    const url = payload.meeting_url || '#';
    const starts = payload.starts_at ? new Date(payload.starts_at).toUTCString() : 'TBA';
    const subject = `Workshop tomorrow: ${payload.title || 'Live session'}`;
    const inner = `<div class="body">
      <h1>Workshop reminder, ${name}.</h1>
      <p>"<strong>${escapeHtml(payload.title || '')}</strong>" starts at <strong>${escapeHtml(starts)}</strong>.</p>
      <p><a class="btn" href="${url}">Join link</a></p>
      <p class="meta">Set by the operator; unsubscribe by replying.</p>
    </div>`;
    return { subject, html: envelope('Workshop reminder', inner), text: `Workshop "${payload.title}" starts at ${starts}. Join: ${url}` };
  }
  // Generic fallback
  const subject = `Cynex: ${template}`;
  const inner = `<div class="body"><h1>${escapeHtml(subject)}</h1><p>${escapeHtml(profile.full_name || 'there')}</p><pre style="font-size:13px;background:#F4F7FA;padding:12px;border-radius:6px;overflow:auto;">${escapeHtml(JSON.stringify(payload, null, 2))}</pre></div>`;
  return { subject, html: envelope(template, inner), text: JSON.stringify(payload) };
}

// ---------- HTTP plumbing ----------

async function postgrest<T>(env: Env, path: string, init: RequestInit = {}): Promise<{ data: T; status: number } | { error: any; status: number }> {
  const headers = new Headers(init.headers || {});
  headers.set('apikey', env.SUPABASE_SERVICE_ROLE_KEY);
  headers.set('Authorization', `Bearer ${env.SUPABASE_SERVICE_ROLE_KEY}`);
  if (init.body && !headers.has('Content-Type')) headers.set('Content-Type', 'application/json');
  const resp = await fetch(`${env.SUPABASE_URL}${path}`, { ...init, headers });
  const status = resp.status;
  if (!resp.ok) return { error: await resp.text(), status };
  const data = resp.status === 204 ? (null as any) : await resp.json();
  return { data, status };
}

async function postgrestRpc<T>(env: Env, fn: string, args: Record<string, any>): Promise<{ data: T; status: number } | { error: any; status: number }> {
  return postgrest<T>(env, `/rest/v1/rpc/${fn}`, { method: 'POST', body: JSON.stringify(args) });
}

async function sendViaResend(env: Env, to: string, subject: string, html: string, text: string): Promise<{ id: string }> {
  const resp = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${env.RESEND_API_KEY}`,
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
  if (!resp.ok) throw new Error(`resend ${resp.status}: ${await resp.text()}`);
  const j = await resp.json() as { id: string };
  return j;
}

// ---------- One drain pass ----------

async function drainPass(env: Env, log: (m: string) => void): Promise<{ processed: number; sent: number; failed: number }> {
  const pendingRes = await postgrest<Notification[]>(env,
    `/rest/v1/lms_notification_queue?select=id,user_id,template,payload,send_at,attempts&sent_at=is.null&order=send_at&limit=50`,
  );
  if ('error' in pendingRes) {
    log(`queue fetch failed: ${pendingRes.status} ${String(pendingRes.error).slice(0, 200)}`);
    return { processed: 0, sent: 0, failed: 0 };
  }
  const items = pendingRes.data || [];
  log(`pending: ${items.length}`);
  let sent = 0, failed = 0;
  for (const item of items) {
    try {
      // Look up profile + (if applicable) course
      const profileRes = await postgrest<Profile[]>(env,
        `/rest/v1/lms_profiles?select=email,full_name&user_id=eq.${encodeURIComponent(item.user_id)}&limit=1`,
      );
      const profile = ('data' in profileRes && profileRes.data && profileRes.data[0]) || { email: '', full_name: null };
      if (!profile.email) throw new Error('profile has no email');

      let course: Course | null = null;
      const courseId = item.payload?.course_id;
      if (courseId) {
        const cr = await postgrest<Course[]>(env,
          `/rest/v1/lms_courses?select=slug,title,description&id=eq.${encodeURIComponent(courseId)}&limit=1`,
        );
        course = ('data' in cr && cr.data && cr.data[0]) || null;
      }

      const { subject, html, text } = renderTemplate(item.template, item.payload || {}, profile, course);
      const res = await sendViaResend(env, profile.email, subject, html, text);

      await postgrest(env,
        `/rest/v1/lms_notification_queue?id=eq.${encodeURIComponent(item.id)}`,
        { method: 'PATCH', body: JSON.stringify({ sent_at: new Date().toISOString(), resend_id: res.id }) },
      );
      sent += 1;
      log(`sent ${item.id} → ${profile.email} (${subject})`);
    } catch (e) {
      failed += 1;
      const attempts = (item.attempts || 0) + 1;
      const backoffMins = Math.min(60, Math.pow(2, attempts)); // 2,4,8,16,32,60min
      const next = new Date(Date.now() + backoffMins * 60_000).toISOString();
      await postgrest(env,
        `/rest/v1/lms_notification_queue?id=eq.${encodeURIComponent(item.id)}`,
        { method: 'PATCH', body: JSON.stringify({ attempts, error: String(e).slice(0, 500), send_at: next }) },
      );
      log(`fail ${item.id} attempt=${attempts}: ${String(e).slice(0, 160)}`);
    }
  }
  return { processed: items.length, sent, failed };
}

// ---------- Entry points ----------

export default {
  // CF cron trigger: every minute
  async scheduled(event: ScheduledController, env: Env, ctx: ExecutionContext): Promise<void> {
    ctx.waitUntil((async () => {
      const log = (m: string) => console.log(`[cynex-email-drain ${new Date().toISOString()}] ${m}`);
      const r = await drainPass(env, log);
      log(`done: processed=${r.processed} sent=${r.sent} failed=${r.failed}`);
    })());
  },

  // Manual / HTTP trigger: shared-secret-gated POST /drain?secret=...
  async fetch(req: Request, env: Env): Promise<Response> {
    const url = new URL(req.url);
    if (url.pathname === '/drain') {
      const secret = url.searchParams.get('secret') || req.headers.get('x-cynex-secret') || '';
      if (!env.WORKER_SECRET || secret !== env.WORKER_SECRET) {
        return new Response('forbidden', { status: 403 });
      }
      const lines: string[] = [];
      const log = (m: string) => lines.push(`[${new Date().toISOString()}] ${m}`);
      const r = await drainPass(env, log);
      return new Response(JSON.stringify({ ok: true, ...r, log: lines }, null, 2), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    if (url.pathname === '/health') {
      return new Response('cynex-email-drain alive', { status: 200 });
    }
    return new Response('not found', { status: 404 });
  },
};
