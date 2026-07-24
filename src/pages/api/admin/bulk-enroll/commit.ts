import type { APIRoute } from 'astro';
import { requireAdmin } from '../../../../lib/auth';
import { makeServiceRoleClient, getCurrentUser } from '../../../../lib/supabase';

interface Entry {
	email: string;
	name: string | null;
}

export const POST: APIRoute = async (ctx) => {
	const gate = await requireAdmin(ctx);
	if (gate instanceof Response) return gate;

	const form = await ctx.request.formData();
	const courseId = String(form.get('course_id') ?? '');

	// Entries are JSON-encoded by the preview step. Each entry carries an
	// optional name that will be passed as Supabase user_metadata on invite.
	let entries: Entry[] = [];
	const entriesRaw = String(form.get('entries') ?? '');
	if (entriesRaw) {
		try {
			const parsed = JSON.parse(entriesRaw);
			if (Array.isArray(parsed)) {
				entries = parsed
					.filter((x: any) => x && typeof x.email === 'string')
					.map((x: any) => ({
						email: String(x.email).trim().toLowerCase(),
						name: typeof x.name === 'string' && x.name.trim() ? x.name.trim() : null,
					}));
			}
		} catch {
			/* fall through to legacy comma-list below */
		}
	}
	if (entries.length === 0) {
		// Back-compat: legacy comma-separated emails without names
		const emailsRaw = String(form.get('emails') ?? '');
		entries = Array.from(
			new Set(emailsRaw.split(',').map((s) => s.trim().toLowerCase()).filter(Boolean)),
		).map((email) => ({ email, name: null }));
	}

	if (!courseId || entries.length === 0) {
		return ctx.redirect('/admin/bulk-enroll?error=' + encodeURIComponent('Missing course or emails.'));
	}

	const admin = makeServiceRoleClient(ctx);
	if (!admin) {
		return ctx.redirect('/admin/bulk-enroll?error=' + encodeURIComponent('Service-role client not configured (SUPABASE_SERVICE_ROLE_KEY missing in env).'));
	}

	const operatorUser = await getCurrentUser(ctx);

	// Look up the course (we need slug for notification payload)
	const { data: course } = await admin
		.from('lms_courses')
		.select('id, slug, title')
		.eq('id', courseId)
		.maybeSingle();
	if (!course) {
		return ctx.redirect('/admin/bulk-enroll?error=' + encodeURIComponent('Course not found.'));
	}

	// Step 1: invite new users (skip ones that already exist)
	const existingEmails = new Set<string>();
	const { data: allUsers } = await admin.auth.admin.listUsers({ perPage: 1000 });
	for (const u of allUsers?.users || []) {
		if (u.email) existingEmails.add(u.email.toLowerCase());
	}

	let invitedCount = 0;
	let invitedErrors = 0;
	for (const entry of entries) {
		if (existingEmails.has(entry.email)) continue;
		try {
			const { error } = await admin.auth.admin.inviteUserByEmail(entry.email, {
				redirectTo: `${new URL(ctx.request.url).origin}/learn/${course.slug}`,
				// Names flow through to the auth trigger, which sets lms_profiles.full_name
				// on insert. Existing users keep their stored name (trigger does not update
				// full_name on conflict — see 20260722180001_lms_profiles_email_sync).
				...(entry.name ? { data: { full_name: entry.name } } : {}),
			});
			if (error) {
				invitedErrors += 1;
			} else {
				invitedCount += 1;
			}
		} catch {
			invitedErrors += 1;
		}
	}

	// Step 2: refresh auth user list to map emails → ids
	const { data: refreshed } = await admin.auth.admin.listUsers({ perPage: 1000 });
	const emailToId = new Map<string, string>();
	for (const u of refreshed?.users || []) {
		if (u.email) emailToId.set(u.email.toLowerCase(), u.id);
	}

	// Step 3: enroll every email + queue welcome notifications
	let enrolledCount = 0;
	let enrollErrors = 0;
	let queuedNotifications = 0;

	for (const entry of entries) {
		const userId = emailToId.get(entry.email);
		if (!userId) { enrollErrors += 1; continue; }
		const { error: enrErr } = await admin
			.from('lms_enrollments')
			.upsert(
				{ user_id: userId, course_id: courseId, enrolled_by: operatorUser?.id ?? null },
				{ onConflict: 'user_id,course_id' },
			);
		if (enrErr) { enrollErrors += 1; continue; }
		enrolledCount += 1;
		const { error: notifErr } = await admin.from('lms_notification_queue').insert({
			user_id: userId,
			template: 'enrollment_welcome',
			payload: { course_id: courseId, slug: course.slug },
			send_at: new Date().toISOString(),
		});
		if (!notifErr) queuedNotifications += 1;
	}

	const summary = `Invited ${invitedCount} new, re-acknowledged ${enrolledCount - invitedCount} existing · ${enrolledCount}/${entries.length} enrolled · ${queuedNotifications} welcome emails queued · ${invitedErrors + enrollErrors} errors`;
	const params = new URLSearchParams({ summary });
	return ctx.redirect('/admin/bulk-enroll?' + params.toString());
};