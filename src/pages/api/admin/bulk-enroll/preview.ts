import type { APIRoute } from 'astro';
import { requireAdmin } from '../../../../lib/auth';
import { makeAuthenticatedClient, makeServiceRoleClient } from '../../../../lib/supabase';
import { normalizeName } from '../../../../lib/name';

interface Entry {
	email: string;
	name: string | null;
}

// Parse emails (and optional names) from CSV/pasted input. Returns
// { entries: {email, name|null}[], invalids: {line, value, reason}[] }.
// Supports three shapes:
//   1. one column (back-compat): `email` per line, whitespace- or comma-separated
//   2. CSV with header: first non-empty line contains a recognised column
//      ("email" / "name" / "full_name"), then parse by columns
//   3. quote-wrapped values are stripped
function parseEntries(text: string): { entries: Entry[]; invalids: { line: number; value: string; reason: string }[] } {
	const lines = text.split(/\r?\n/);
	const out: Entry[] = [];
	const invalids: { line: number; value: string; reason: string }[] = [];
	const EMAIL_RE = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

	// Detect a header row: first non-empty line that contains the literal
	// token "email" (case-insensitive) followed by a delimiter and is itself
	// not a valid email address.
	let firstIdx = 0;
	while (firstIdx < lines.length && !lines[firstIdx].trim()) firstIdx++;
	const first = (lines[firstIdx] ?? '').trim();
	const looksLikeHeader =
		first.length > 0 &&
		!EMAIL_RE.test(first.replace(/^["']|["']$/g, '')) &&
		/^["']?\s*(email|e[\-_ ]?mail)\s*["']?[\s,;]/i.test(first);

	if (!looksLikeHeader) {
		// Back-compat: any-delimiter email list. Whitespace OR commas separate values.
		for (let i = 0; i < lines.length; i++) {
			const raw = lines[i].trim();
			if (!raw) continue;
			const parts = raw.split(/[\s,;]+/).map((s) => s.trim().replace(/^["']|["']$/g, '')).filter(Boolean);
			for (const p of parts) {
				const val = p.trim();
				if (!val) continue;
				if (!EMAIL_RE.test(val)) {
					invalids.push({ line: i + 1, value: val, reason: 'invalid format' });
				} else {
					out.push({ email: val.toLowerCase(), name: null });
				}
			}
		}
	} else {
		// CSV with header
		const headerCols = first
			.split(/[\s,;]+/)
			.map((s) => s.trim().replace(/^["']|["']$/g, '').toLowerCase());
		const emailIdx = headerCols.findIndex((c) => /^e[\-_ ]?mail$/i.test(c));
		const nameIdx = headerCols.findIndex((c) => /^(name|full[\-_\s]?name)$/i.test(c));
		if (emailIdx === -1) {
			invalids.push({ line: firstIdx + 1, value: first, reason: 'header detected but no email column' });
		} else {
			for (let i = firstIdx + 1; i < lines.length; i++) {
				const raw = lines[i].trim();
				if (!raw) continue;
				const cols = raw
					.split(/[\s,;]+/)
					.map((s) => s.trim().replace(/^["']|["']$/g, ''));
				const email = cols[emailIdx]?.toLowerCase();
				if (!email) {
					invalids.push({ line: i + 1, value: raw, reason: 'missing email column' });
					continue;
				}
				if (!EMAIL_RE.test(email)) {
					invalids.push({ line: i + 1, value: email, reason: 'invalid email format' });
					continue;
				}
				const rawName = nameIdx >= 0 ? cols[nameIdx] ?? null : null;
				const name = rawName ? normalizeName(rawName) : null;
				out.push({ email, name });
			}
		}
	}

	// Dedupe by email; keep the first non-null name encountered.
	const seen = new Map<string, Entry>();
	for (const e of out) {
		const existing = seen.get(e.email);
		if (!existing) seen.set(e.email, e);
		else if (!existing.name && e.name) seen.set(e.email, e);
	}
	return { entries: Array.from(seen.values()).sort((a, b) => a.email.localeCompare(b.email)), invalids };
}

// Renders the HTML preview page (re-uses AdminLayout visual style).
async function renderPreview(ctx: any, body: string, status = 200): Promise<Response> {
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

	const { entries, invalids } = parseEntries(rawText);
	if (entries.length === 0) {
		return ctx.redirect('/admin/bulk-enroll?error=' + encodeURIComponent('No valid emails parsed.'));
	}

	const emails = entries.map((e) => e.email);

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

	const admin = makeServiceRoleClient(ctx);
	if (!admin) {
		return ctx.redirect('/admin/bulk-enroll?error=' + encodeURIComponent('Service-role client not configured.'));
	}

	// Look up auth users + profiles
	const { data: authList } = await admin.auth.admin.listUsers({ perPage: 1000 });
	const knownEmails = new Set<string>();
	const emailToUid = new Map<string, string>();
	for (const u of authList?.users || []) {
		if (u.email) {
			const lo = u.email.toLowerCase();
			knownEmails.add(lo);
			emailToUid.set(lo, u.id);
		}
	}

	const { data: profiles } = await admin
		.from('lms_profiles')
		.select('user_id, email')
		.in('email', emails);
	const profileByEmail = new Map<string, string>();
	for (const p of profiles || []) {
		if (p.email) profileByEmail.set(p.email.toLowerCase(), p.user_id);
	}

	let withProfile = 0;
	let withoutProfile = 0;
	let newUsers = 0;
	for (const e of emails) {
		if (profileByEmail.has(e)) withProfile += 1;
		else if (knownEmails.has(e)) withoutProfile += 1;
		else newUsers += 1;
	}
	const namesProvided = entries.filter((e) => e.name).length;

	const entriesJson = JSON.stringify(entries);

	return renderPreview(ctx, `
    <h1>Bulk-enroll preview: <em>${escapeHtml(course.title)}</em></h1>
    <p class="muted">Course: <code>${escapeHtml(course.slug)}</code> · Emails parsed: <strong>${emails.length}</strong>${namesProvided > 0 ? ` · Names: <strong>${namesProvided}</strong>` : ''}</p>

    <div class="card">
      <p style="margin:0 0 8px;"><strong>${withProfile}</strong> existing users with profiles (will re-enroll, no-op)</p>
      <p style="margin:0 0 8px;"><strong>${withoutProfile}</strong> existing users without profiles (will create profile then enroll)</p>
      <p style="margin:0 0 8px;"><strong>${newUsers}</strong> new emails — will send an invite email + auto-enroll</p>
      <p style="margin:0;"><strong>${invalids.length}</strong> invalid rows (skipped)</p>
    </div>

    ${namesProvided > 0 ? `
      <div class="card" style="background: #FFFBEB; border-color: #B88A3A;">
        <p style="margin:0;"><strong>Note:</strong> Names from the CSV apply to <strong>newly-invited</strong> users only (via Supabase user_metadata on invite). Existing users keep their stored name; update later via <code>/admin/users</code> or direct DB edit.</p>
      </div>
    ` : ''}

    <form method="POST" action="/api/admin/bulk-enroll/commit" style="margin-top: 16px;">
      <input type="hidden" name="course_id" value="${escapeHtml(courseId)}" />
      <input type="hidden" name="entries" value="${escapeHtml(entriesJson)}" />
      <button type="submit" class="btn btn-primary">Enroll ${emails.length} users</button>
      <a href="/admin/bulk-enroll" class="btn btn-secondary">Cancel</a>
    </form>

    ${invalids.length > 0 ? `
      <h2 style="margin-top:32px;">Invalid rows (${invalids.length})</h2>
      <table>
        <thead><tr><th>Line</th><th>Value</th><th>Reason</th></tr></thead>
        <tbody>${invalids.slice(0, 50).map((i) => `<tr><td>${i.line}</td><td>${escapeHtml(i.value)}</td><td>${i.reason}</td></tr>`).join('')}</tbody>
      </table>
      ${invalids.length > 50 ? `<p class="muted">… and ${invalids.length - 50} more</p>` : ''}
    ` : ''}

    <h2 style="margin-top: 32px;">All emails to enroll (${emails.length})</h2>
    <details><summary>Show list</summary>
      <table style="margin-top: 8px;">
        <thead><tr><th>Email</th><th>Name</th><th>Status</th></tr></thead>
        <tbody>
          ${entries.map((e) => `<tr><td>${escapeHtml(e.email)}</td><td>${escapeHtml(e.name ?? '—')}</td><td>${profileByEmail.has(e.email) ? 'existing profile' : (knownEmails.has(e.email) ? 'known user, no profile' : 'new (will invite)')}</td></tr>`).join('')}
        </tbody>
      </table>
    </details>
  `);
};

function escapeHtml(s: string): string {
	return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}