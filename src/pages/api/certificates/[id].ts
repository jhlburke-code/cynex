// /api/certificates/[id] — generate (if needed) and stream the PDF bytes for a
// single completion. Auth-gated: only the owner (or an admin) can fetch the
// cert. Always returns the PDF binary so there's no Accept-header ambiguity.

import type { APIRoute } from "astro";
import { getCurrentUser, makeServiceRoleClient } from "../../../lib/supabase";
import { getOrCreateCertificateBytes } from "../../../lib/certificates";

export const GET: APIRoute = async (ctx) => {
	const user = await getCurrentUser(ctx);
	if (!user) {
		return new Response(JSON.stringify({ error: "unauthenticated" }), {
			status: 401, headers: { "Content-Type": "application/json" },
		});
	}

	const id = ctx.params.id;
	if (!id) {
		return new Response(JSON.stringify({ error: "missing id" }), {
			status: 400, headers: { "Content-Type": "application/json" },
		});
	}

	const admin = makeServiceRoleClient(ctx);
	if (!admin) {
		return new Response(JSON.stringify({ error: "service-role not configured" }), {
			status: 500, headers: { "Content-Type": "application/json" },
		});
	}

	// Fetch the completion with the owning user_id + course title/slug
	const { data: completion, error } = await admin
		.from("lms_completions")
		.select("id, user_id, completed_at, certificate_url, lms_courses ( title, slug )")
		.eq("id", id)
		.maybeSingle();

	if (error || !completion) {
		return new Response(JSON.stringify({ error: "not_found" }), {
			status: 404, headers: { "Content-Type": "application/json" },
		});
	}

	// Only the owner (or an admin) can fetch the cert
	const isOwner = completion.user_id === user.id;
	const isAdminUser = (() => {
		const email = user.email?.toLowerCase();
		return email === "jhl.burke@gmail.com";
	})();
	if (!isOwner && !isAdminUser) {
		return new Response(JSON.stringify({ error: "forbidden" }), {
			status: 403, headers: { "Content-Type": "application/json" },
		});
	}

	// Profile for the recipient name on the PDF
	// (awaited — without await, `profile` is a Promise and the full_name
	//  fallback in buildCertificatePdf falls through to "Cynex Learner")
	const { data: profile } = await admin
		.from("lms_profiles")
		.select("email, full_name")
		.eq("user_id", completion.user_id)
		.maybeSingle();

	try {
		const { bytes, slug } = await getOrCreateCertificateBytes(
			ctx,
			{
				id: completion.id,
				user_id: completion.user_id,
				completed_at: completion.completed_at as string,
				courses: (completion as any).lms_courses,
			},
			profile,
		);

		// Safe ASCII filename for the browser
		const safeSlug = (slug || "certificate").replace(/[^a-z0-9-]/gi, "-");
		const filename = `cynex-${safeSlug}.pdf`;

		return new Response(bytes, {
			headers: {
				"Content-Type": "application/pdf",
				"Content-Length": String(bytes.byteLength),
				"Content-Disposition": `inline; filename="${filename}"`,
				"Cache-Control": "private, no-store",
				// Defense in depth — should already be a no-op for a same-origin fetch
				"X-Content-Type-Options": "nosniff",
			},
		});
	} catch (e) {
		return new Response(JSON.stringify({ error: (e as Error).message }), {
			status: 500, headers: { "Content-Type": "application/json" },
		});
	}
};