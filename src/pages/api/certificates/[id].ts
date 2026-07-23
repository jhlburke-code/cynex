// /api/certificates/[id] — generate (if needed) and return a signed download URL
// for a single completion. Admin-gated is not needed — the completion itself
// has RLS so the learner can read it; we additionally verify the caller owns
// the row before issuing a link.

import type { APIRoute } from "astro";
import { getCurrentUser, makeServiceRoleClient } from "../../../lib/supabase";
import { ensureCertificate, signedUrl } from "../../../lib/certificates";

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

	// Fetch the completion with the owning user_id + course title
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

	// Fast path: if the certificate is already in storage, just return a fresh signed URL.
	if (completion.certificate_url) {
		const url = await signedUrl(ctx, completion.certificate_url as string);
		if (url) {
			return new Response(JSON.stringify({
				signedUrl: url,
				path: completion.certificate_url,
				cached: true,
			}), { headers: { "Content-Type": "application/json" } });
		}
	}

	// Cold path: build + upload + return
	const userRes = await admin.auth.admin.getUserById(completion.user_id);
	const profile = await admin
		.from("lms_profiles")
		.select("email, full_name")
		.eq("user_id", completion.user_id)
		.maybeSingle();

	try {
		const r = await ensureCertificate(
			ctx,
			{
				id: completion.id,
				user_id: completion.user_id,
				completed_at: completion.completed_at as string,
				courses: (completion as any).lms_courses,
			},
			profile,
		);
		return new Response(JSON.stringify({
			signedUrl: r.signedUrl,
			path: r.path,
			cached: false,
		}), { headers: { "Content-Type": "application/json" } });
	} catch (e) {
		return new Response(JSON.stringify({ error: (e as Error).message }), {
			status: 500, headers: { "Content-Type": "application/json" },
		});
	}
};
