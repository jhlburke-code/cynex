// Cynex workshop reminders (CF Worker)
// Cron every 5 minutes. Queues workshop_t24h / workshop_t1h / recording_ready notifications
// for upcoming and recently-finished workshops based on lms_workshops.starts_at and recording_url.
//
// Uniqueness is enforced at the DB layer via lms_notif_dedupe_idx, so re-runs are safe.

export interface Env {
  SUPABASE_URL: string;
  SUPABASE_SERVICE_ROLE_KEY: string;
  RESEND_API_KEY: string;
  EMAIL_FROM_NAME: string;
  EMAIL_FROM_ADDRESS: string;
  WORKER_SECRET: string;
}

const REMINDER_WINDOW_MS = {
  '24h': 24 * 60 * 60 * 1000,
  '1h':  60 * 60 * 1000,
} as const;

type Window = keyof typeof REMINDER_WINDOW_MS;

async function postgrest<T>(env: Env, path: string, init: RequestInit = {}): Promise<{ data: T | null; status: number; ok: true } | { ok: false; status: number; error: string }> {
  const headers = new Headers(init.headers || {});
  headers.set('apikey', env.SUPABASE_SERVICE_ROLE_KEY);
  headers.set('Authorization', `Bearer ${env.SUPABASE_SERVICE_ROLE_KEY}`);
  if (init.body && !headers.has('Content-Type')) headers.set('Content-Type', 'application/json');
  const resp = await fetch(`${env.SUPABASE_URL}${path}`, { ...init, headers });
  const status = resp.status;
  if (!resp.ok) return { ok: false, status, error: (await resp.text()).slice(0, 500) };
  let data: any = null;
  if (status !== 204) {
    try { data = await resp.json(); } catch { data = null; }
  }
  return { data, status, ok: true };
}

async function queueReminder(env: Env, userId: string, courseId: string, template: 'workshop_t24h' | 'workshop_t1h' | 'recording_ready', payload: Record<string, any>): Promise<'inserted' | 'duplicate' | 'error'> {
  const r = await postgrest(env, '/rest/v1/lms_notification_queue', {
    method: 'POST',
    headers: { 'Prefer': 'return=representation' },
    body: JSON.stringify({
      user_id: userId,
      template,
      payload: { course_id: courseId, ...payload },
      send_at: new Date().toISOString(),
    }),
  });
  if (r.ok) return 'inserted';
  if (r.status === 409 || (typeof r.error === 'string' && r.error.includes('lms_notif_dedupe_idx'))) return 'duplicate';
  return 'error';
}

async function run(env: Env, log: (m: string) => void): Promise<{ enqueued: number; dupe: number; failed: number; scraped: number }> {
  const now = new Date();
  const in24h = new Date(now.getTime() + REMINDER_WINDOW_MS['24h']).toISOString();
  const in1h = new Date(now.getTime() + REMINDER_WINDOW_MS['1h']).toISOString();

  // All workshops starting in the next 24h
  const upcomingRes = await postgrest<any[]>(env,
    `/rest/v1/lms_workshops?select=course_id,starts_at,ends_at,remind_24h,remind_1h,lms_courses(slug,title)&starts_at=gt.${encodeURIComponent(now.toISOString())}&starts_at=lte.${encodeURIComponent(in24h)}`,
  );
  if (!upcomingRes.ok) {
    log(`upcoming fetch failed: ${upcomingRes.status} ${upcomingRes.error.slice(0, 200)}`);
    return { enqueued: 0, dupe: 0, failed: 0, scraped: 0 };
  }
  const upcoming = upcomingRes.data || [];

  // Workshops that ended recently with a recording now set
  const pastWindowAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000).toISOString();
  const pastRes = await postgrest<any[]>(env,
    `/rest/v1/lms_workshops?select=course_id,ends_at,recording_url,lms_courses(slug,title)&ends_at=gt.${encodeURIComponent(pastWindowAgo)}&ends_at=lte.${encodeURIComponent(now.toISOString())}&recording_url=not.is.null`,
  );
  if (!pastRes.ok) {
    log(`past fetch failed: ${pastRes.status} ${pastRes.error.slice(0, 200)}`);
  }
  const past = pastRes.ok ? (pastRes.data || []) : [];

  let enqueued = 0, dupe = 0, failed = 0;

  // For each upcoming workshop, queue reminders for all enrolled learners
  for (const ws of upcoming) {
    const enrollRes = await postgrest<any[]>(env,
      `/rest/v1/lms_enrollments?select=user_id&course_id=eq.${encodeURIComponent(ws.course_id)}`,
    );
    if (!enrollRes.ok) continue;
    const learners = enrollRes.data || [];
    log(`workshop ${ws.lms_courses.slug} ${ws.starts_at} → ${learners.length} learners`);

    const in1hCutoff = new Date(now.getTime() + REMINDER_WINDOW_MS['1h']).getTime();
    const startMs = new Date(ws.starts_at).getTime();

    // 24h reminder
    if (ws.remind_24h && startMs > in1hCutoff) {
      for (const enr of learners) {
        const r = await queueReminder(env, enr.user_id, ws.course_id, 'workshop_t24h', {
          slug: ws.lms_courses.slug, title: ws.lms_courses.title,
          starts_at: ws.starts_at, ends_at: ws.ends_at,
        });
        if (r === 'inserted') enqueued += 1;
        else if (r === 'duplicate') dupe += 1;
        else failed += 1;
      }
    }
    // 1h reminder
    if (ws.remind_1h && startMs <= in1hCutoff) {
      for (const enr of learners) {
        const r = await queueReminder(env, enr.user_id, ws.course_id, 'workshop_t1h', {
          slug: ws.lms_courses.slug, title: ws.lms_courses.title,
          starts_at: ws.starts_at, ends_at: ws.ends_at,
          meeting_url: undefined,  // could pull from ws, omitted for now
        });
        if (r === 'inserted') enqueued += 1;
        else if (r === 'duplicate') dupe += 1;
        else failed += 1;
      }
    }
  }

  // recording_ready for past workshops that now have a recording
  for (const ws of past) {
    const enrollRes = await postgrest<any[]>(env,
      `/rest/v1/lms_enrollments?select=user_id&course_id=eq.${encodeURIComponent(ws.course_id)}`,
    );
    if (!enrollRes.ok) continue;
    for (const enr of enrollRes.data || []) {
      const r = await queueReminder(env, enr.user_id, ws.course_id, 'recording_ready', {
        slug: ws.lms_courses.slug, title: ws.lms_courses.title,
        recording_url: ws.recording_url,
      });
      if (r === 'inserted') enqueued += 1;
      else if (r === 'duplicate') dupe += 1;
      else failed += 1;
    }
  }

  return { enqueued, dupe, failed, scraped: upcoming.length + past.length };
}

export default {
  async scheduled(event: ScheduledController, env: Env, ctx: ExecutionContext): Promise<void> {
    ctx.waitUntil((async () => {
      try {
        const log = (m: string) => console.log(`[cynex-wrkshp-rem ${new Date().toISOString()}] ${m}`);
        const r = await run(env, log);
        log(`done scraped=${r.scraped} enqueued=${r.enqueued} dupe=${r.dupe} failed=${r.failed}`);
      } catch (e) {
        console.error(`[cynex-wrkshp-rem] fatal: ${String(e)}`);
      }
    })());
  },
  async fetch(req: Request, env: Env): Promise<Response> {
    try {
      const url = new URL(req.url);
      if (url.pathname === '/health') return new Response('cynex-workshop-reminders alive', { status: 200 });
      if (url.pathname === '/tick') {
        const secret = url.searchParams.get('secret') || req.headers.get('x-cynex-secret') || '';
        if (!env.WORKER_SECRET || secret !== env.WORKER_SECRET) return new Response('forbidden', { status: 403 });
        const lines: string[] = [];
        const r = await run(env, m => lines.push(`[${new Date().toISOString()}] ${m}`));
        return new Response(JSON.stringify({ ok: true, ...r, log: lines }, null, 2), { status: 200, headers: { 'Content-Type': 'application/json' } });
      }
      return new Response('not found', { status: 404 });
    } catch (e) {
      const err = e as Error;
      return new Response(JSON.stringify({ ok: false, error: String(e), stack: err?.stack?.slice(0, 600) }, null, 2), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
  },
};
