import type { APIRoute } from 'astro';
import { requireAdmin } from '../../../../lib/auth';
import { makeAuthenticatedClient, makeServiceRoleClient } from '../../../../lib/supabase';

// Parse emails from CSV or pasted input. Returns { emails: string[], invalid: {line, value, reason}[] }.
function parseEmails(text: string): { emails: string[]; invalids: { line: number; value: string; reason: string }[] } {
  const out: string[] = [];
  const invalids: { line: number; value: string; reason: string }[] = [];
  const EMAIL_RE = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const lines = text.split(/\r?\n/);
  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i].trim();
    if (!raw) continue;
    // Skip CSV header if first non-empty line looks like "email"
    if (i === 0 && /^e[\-_]?mail[\s,:]/i.test(raw)) continue;

    // Split by both comma and whitespace for pasted lists
    const parts = raw.split(/[\s,;]+/).map(s => s.trim()).filter(Boolean);
    for (const p of parts) {
      const val = p.replace(/^["']|["']$/g, '').trim(); // strip quotes
      if (!val) continue;
      if (!EMAIL_RE.test(val)) {
        invalids.push({ line: i + 1, value: val, reason: 'invalid format' });
      } else {
        out.push(val.toLowerCase());
      }
    }
  }
  return { emails: Array.from(new Set(out)).sort(), invalids };
}

// Renders the HTML preview page (re-uses AdminLayout visual style).
async function renderPreview(ctx: any, body: string, status = 200): Promise<Response> {
  // We re-serve the same /admin/bulk-enroll page shape, but with the diff HTML injected.
  // Simpler: compose a tiny inline HTML response with shared look-and-feel.
  const html = `<!doctype html>
<html lang="en"><head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Bulk-enroll preview — Cynex Admin</title>
  <style>
    body { font-family: 'Inter', system-ui, sans-serif; background: #F4F7FA; color: #0F2347; line-height: 1.5; margin: 0; }
    header { background: #0F2347; color: #fff; padding: 16px 24px; }
    .hd { max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; }
    .hd h1 { font-size: 18px; margin: 0; }
    .hd a { color: rgba(255,255,255,0.7); text-decoration: none; font-size: 14px; }
    main { max-width: 1200px; margin: 0 auto; padding: 24px; }
    .tabs { display: flex; gap: 4px; border-bottom: 1px solid #E5E9F0; margin-bottom: 24px; }
    .tabs a { padding: 12px 16px; text-decoration: none; color: #0F2347; font-weight: 600; }
    .card { background: #fff; border-radius: 8px; padding: 24px; border: 1px solid #E5E9F0; margin-bottom: 16px; }
    .btn { display: inline-block; padding: 12px 24px; border-radius: 6px; font-weight: 600; cursor: pointer; text-decoration: none; border: 1px solid transparent; font-size: 15px; }
    .btn-primary { background: #CC2229; color: #fff; }
    .btn-secondary { background: transparent; color: #0F2347; border-color: #0F2347; }
    h1 { margin: 0 0 16px; }
    .muted { color: rgba(15,35,71,0.7); }
    code { font-family: ui-monospace, monospace; font-size: 13px; background: #F4F7FA; padding: 2px 6px; border-radius: 4px; }
    table { width: 100%; border-collapse: collapse; font-size: 13px; }
    th, td { padding: 8px; border-top: 1px solid #E5E9F0; text-align: left; }
    th { background: #F4F7FA; font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: rgba(15,35,71,0.7); }
  </style>
</head><body>
  <header><div class="hd"><h1>Cynex · Admin</h1><a href="/admin/bulk-enroll">← Back to bulk-enroll</a></div></header>
  <main>
    <nav class="tabs">
      <a href="/admin">Dashboard</a>
      <a href="/admin/courses">Courses</a>
      <a href="/admin/bulk-enroll" style="color:#CC2229;border-bottom:2px solid #CC2229;">Bulk enroll</a>
    </nav>
    ${body}
  </main>
</body></html>`;
  return new Response(html, { status, headers: { 'Content-Type': 'text/html; charset=utf-8' } });
}

export const POST: APIRoute = async (ctx) => {
  const gate = await requireAdmin(ctx);
  if (gate instanceof Response) return gate;

  const form = await ctx.request.formData();
  const courseId = String(form.get('course_id') ?? '');
  if (!courseId) {
    return ctx.redirect('/admin/bulk-enroll?error=' + encodeURIComponent('Pick a course first.'));
  }

  // Parse from file or paste
  let rawText = '';
  const file = form.get('csv');
  if (file && typeof file !== 'string') {
    const f = file as File;
    rawText = await f.text();
  }
  const paste = String(form.get('emails_paste') ?? '').trim();
  if (paste) rawText = rawText ? rawText + '\n' + paste : paste;

  if (!rawText.trim()) {
    return ctx.redirect('/admin/bulk-enroll?error=' + encodeURIComponent('No emails found in file or paste.'));
  }

  const { emails, invalids } = parseEmails(rawText);
  if (emails.length === 0) {
    return ctx.redirect('/admin/bulk-enroll?error=' + encodeURIComponent('No valid emails parsed.'));
  }

  // Look up course
  const client = makeAuthenticatedClient(ctx);
  const { data: course } = await client
    .from('lms_courses')
    .select('id, slug, title')
    .eq('id', courseId)
    .maybeSingle();
  if (!course) {
    return ctx.redirect('/admin/bulk-enroll?error=' + encodeURIComponent('Course not found.'));
  }

  // Diff: which emails are existing users
  const admin = makeServiceRoleClient(ctx);
  let existing: { id: string; email: string }[] = [];
  if (admin) {
    const { data } = await admin
      .from('lms_profiles')
      .select('user_id, email')
      .in('email', emails);  // emails lowercased
    const usersByEmail = new Map<string, { id: string }>();
    // We need to also look up auth.users by email to map email -> user_id when profiles missing
    // For new users, profile row gets created on first signup; for bulk-enroll we trust the email.
    if (data) {
      // We need user_id, not in profiles. Use admin auth admin listUsers.
      const { data: authList } = await admin.auth.admin.listUsers({ perPage: 1000 });
      const usersByIdEmail = new Map<string, string>();
      for (const u of authList?.users || []) {
        if (u.email) usersByIdEmail.set(u.id, u.email.toLowerCase());
      }
      const emailToUid = new Map<string, string>();
      for (const [uid, e] of usersByIdEmail) emailToUid.set(e, uid);
      existing = (data || []).map(p => ({ id: p.user_id, email: emailToUid.get(p.email?.toLowerCase() ?? '') || p.user_id }))
        .filter((p: any) => emailToUid.has(p.email?.toLowerCase() ?? ''));
      // Collect all auth.users emails for the diff
      const allEmails = new Set((authList?.users || []).map(u => u.email?.toLowerCase()).filter(Boolean) as string[]);
      // Output:
      const existingEmails = new Set(existing.map(e => e.email));
      const newEmails = emails.filter(e => !existingEmails.has(e) && !allEmails.has(e));
      const knownEmails = emails.filter(e => allEmails.has(e));
      return renderPreview(ctx, `
        <h1>Bulk-enroll preview: <em>${escapeHtml(course.title)}</em></h1>
        <p class="muted">Course: <code>${escapeHtml(course.slug)}</code> · Emails parsed: <strong>${emails.length}</strong></p>

        <div class="card">
          <p style="margin:0 0 8px;"><strong>${existingEmails.size}</strong> existing users with profiles (will re-enroll, no-op)</p>
          <p style="margin:0 0 8px;"><strong>${knownEmails.length - existingEmails.size}</strong> existing users without profiles (will create profile then enroll)</p>
          <p style="margin:0 0 8px;"><strong>${newEmails.length}</strong> new emails — will send an invite email + auto-enroll</p>
          <p style="margin:0;"><strong>${invalids.length}</strong> invalid rows (skipped)</p>
        </div>

        <form method="POST" action="/api/admin/bulk-enroll/commit" style="margin-top: 16px;">
          <input type="hidden" name="course_id" value="${escapeHtml(courseId)}" />
          <input type="hidden" name="emails" value="${escapeHtml(emails.join(','))}" />
          <button type="submit" class="btn btn-primary">Enroll ${emails.length} users</button>
          <a href="/admin/bulk-enroll" class="btn btn-secondary">Cancel</a>
        </form>

        ${invalids.length > 0 ? `
          <h2 style="margin-top:32px;">Invalid rows (${invalids.length})</h2>
          <table>
            <thead><tr><th>Line</th><th>Value</th><th>Reason</th></tr></thead>
            <tbody>${invalids.slice(0, 50).map(i => `<tr><td>${i.line}</td><td>${escapeHtml(i.value)}</td><td>${i.reason}</td></tr>`).join('')}</tbody>
          </table>
          ${invalids.length > 50 ? `<p class="muted">… and ${invalids.length - 50} more</p>` : ''}
        ` : ''}

        <h2 style="margin-top: 32px;">All emails to enroll (${emails.length})</h2>
        <details><summary>Show list</summary>
          <table style="margin-top: 8px;">
            <thead><tr><th>Email</th><th>Status</th></tr></thead>
            <tbody>
              ${emails.map(e => `<tr><td>${escapeHtml(e)}</td><td>${existingEmails.has(e) ? 'existing profile' : (allEmails.has(e) ? 'known user, no profile' : 'new (will invite)')}</td></tr>`).join('')}
            </tbody>
          </table>
        </details>
      `);
    }
  }

  // Fallback: no admin client — render minimal preview
  return renderPreview(ctx, `
    <h1>Bulk-enroll preview</h1>
    <div class="card">
      <p>${emails.length} emails parsed · ${invalids.length} invalid</p>
      <p class="muted">Service-role client not configured. Set SUPABASE_SERVICE_ROLE_KEY in CF Pages env vars, then retry.</p>
    </div>
  `, 500);
};

function escapeHtml(s: string): string {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}
