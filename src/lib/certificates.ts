// src/lib/certificates.ts
// PDF completion certificate generation + Supabase Storage upload + signed URL.
//
// Uses pdf-lib (pure JS, no native deps) — works in Cloudflare Workers runtime
// and in Node. Stores generated PDFs in the `lms-assets` Supabase Storage bucket
// at `certificates/{user_id}/{completion_id}.pdf` (private, signed URL on read).

import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import type { APIContext } from "astro";
import { makeServiceRoleClient, makeAuthenticatedClient, getCurrentUser } from "./supabase";

// ─── Branded palette (AIINOD/Cynex) ─────────────────────────────────────────

const COLOR = {
	navy:      rgb(0x0F / 255, 0x23 / 255, 0x47 / 255),    // primary background
	navyDeep:  rgb(0x08 / 255, 0x17 / 255, 0x30 / 255),
	red:       rgb(0xCC / 255, 0x22 / 255, 0x29 / 255),    // AIINOD accent
	redBright: rgb(0xE0 / 255, 0x2A / 255, 0x32 / 255),
	gold:      rgb(0xB8 / 255, 0x8A / 255, 0x3A / 255),    // Predator gold accent
	white:     rgb(1, 1, 1),
	gray:      rgb(0xA0 / 255, 0xA8 / 255, 0xB4 / 255),
	grayLight: rgb(0xE0 / 255, 0xE5 / 255, 0xEC / 255),
	black:     rgb(0x10 / 255, 0x10 / 255, 0x10 / 255),
};

// ─── Storage path + signed URL helpers ─────────────────────────────────────

const SIGNED_URL_TTL = 60 * 60 * 24 * 7;   // 7 days

function storagePath(userId: string, completionId: string): string {
	return `certificates/${userId}/${completionId}.pdf`;
}

async function uploadPdf(
	ctx: APIContext,
	path: string,
	pdfBytes: Uint8Array,
): Promise<{ error: string | null }> {
	const admin = makeServiceRoleClient(ctx);
	if (!admin) return { error: "Service-role client not configured" };
	const { error } = await admin.storage
		.from("lms-assets")
		.upload(path, pdfBytes, { contentType: "application/pdf", upsert: true });
	return { error: error?.message ?? null };
}

export async function signedUrl(
	ctx: APIContext,
	path: string,
	expiresIn = SIGNED_URL_TTL,
): Promise<string | null> {
	const admin = makeServiceRoleClient(ctx);
	if (!admin) return null;
	const { data, error } = await admin.storage
		.from("lms-assets")
		.createSignedUrl(path, expiresIn);
	if (error || !data?.signedUrl) return null;
	return data.signedUrl;
}

// ─── PDF builder ─────────────────────────────────────────────────────────

interface CertInput {
	userName: string;
	userEmail: string;
	courseTitle: string;
	courseSlug: string;
	completedAt: Date;       // Date object
	completionId: string;    // uuid, for the filename
}

/**
 * Build a one-page A4-landscape (842 × 595 pt) certificate. No external assets.
 * Returns the PDF as a Uint8Array ready for upload.
 */
export async function buildCertificatePdf(input: CertInput): Promise<Uint8Array> {
	const doc = await PDFDocument.create();
	const page = doc.addPage([842, 595]);    // A4 landscape (pt)
	const { width, height } = page.getSize();

	const helv      = await doc.embedFont(StandardFonts.Helvetica);
	const helvBold  = await doc.embedFont(StandardFonts.HelveticaBold);
	const helvObl   = await doc.embedFont(StandardFonts.HelveticaOblique);
	const timesBold = await doc.embedFont(StandardFonts.TimesRomanBold);

	// Outer border — gold frame
	page.drawRectangle({
		x: 28, y: 28, width: width - 56, height: height - 56,
		borderColor: COLOR.gold, borderWidth: 3,
	});
	page.drawRectangle({
		x: 40, y: 40, width: width - 80, height: height - 80,
		borderColor: COLOR.red, borderWidth: 1,
	});

	// Decorative corners (small dots)
	for (const [x, y] of [[52, 52], [width - 52, 52], [52, height - 52], [width - 52, height - 52]] as [number, number][]) {
		page.drawCircle({ x, y, size: 4, color: COLOR.red });
	}

	// Header band — "C Y N E X" wordmark
	page.drawText("C Y N E X", {
		x: width / 2 - 110, y: height - 100,
		size: 56, font: timesBold, color: COLOR.navy,
	});
	page.drawLine({
		start: { x: width / 2 - 130, y: height - 115 },
		end:   { x: width / 2 + 130, y: height - 115 },
		thickness: 2, color: COLOR.red,
	});
	page.drawText("certificate of completion", {
		x: width / 2 - 92, y: height - 138,
		size: 14, font: helvObl, color: COLOR.gray,
	});

	// Recipient label
	page.drawText("this certifies that", {
		x: width / 2 - 50, y: height - 200,
		size: 12, font: helvObl, color: COLOR.gray,
	});

	// Recipient name (large, centered)
	const name = (input.userName || input.userEmail).toUpperCase();
	const nameWidth = helvBold.widthOfTextAtSize(name, 38);
	page.drawText(name, {
		x: (width - nameWidth) / 2, y: height - 260,
		size: 38, font: helvBold, color: COLOR.navy,
	});
	// Underline accent
	page.drawLine({
		start: { x: (width - nameWidth) / 2 - 10, y: height - 268 },
		end:   { x: (width + nameWidth) / 2 + 10, y: height - 268 },
		thickness: 1, color: COLOR.gold,
	});

	// "has completed"
	page.drawText("has successfully completed the course", {
		x: width / 2 - 132, y: height - 300,
		size: 13, font: helvObl, color: COLOR.gray,
	});

	// Course title (large)
	const course = input.courseTitle;
	const courseSize = 22;
	const courseWidth = helvBold.widthOfTextAtSize(course, courseSize);
	// Wrap or shrink if too long
	let titleSize = courseSize;
	if (courseWidth > width - 160) {
		titleSize = Math.max(14, courseSize * (width - 160) / courseWidth);
	}
	const finalCourseWidth = helvBold.widthOfTextAtSize(course, titleSize);
	page.drawText(course, {
		x: (width - finalCourseWidth) / 2, y: height - 340,
		size: titleSize, font: helvBold, color: COLOR.redBright,
	});

	// Date (formatted)
	const dateStr = input.completedAt.toLocaleDateString("en-US", {
		year: "numeric", month: "long", day: "numeric",
	});
	page.drawText(`on  ${dateStr.toLowerCase()}`, {
		x: width / 2 - 90, y: height - 380,
		size: 14, font: helv, color: COLOR.gray,
	});

	// Footer line
	page.drawLine({
		start: { x: 80, y: 110 }, end: { x: width - 80, y: 110 },
		thickness: 0.5, color: COLOR.gray,
	});

	// Footer: tagline + verification
	page.drawText("\"Get to the chopper.\"", {
		x: 80, y: 78,
		size: 11, font: helvObl, color: COLOR.red,
	});
	page.drawText("— Predator (1987)", {
		x: 80, y: 60,
		size: 9, font: helv, color: COLOR.gray,
	});

	// Verification block (right side)
	const verify = `verification id\n${input.completionId}`;
	const verifyLines = verify.split("\n");
	verifyLines.forEach((ln, i) => {
		page.drawText(ln, {
			x: width - 200, y: 78 - i * 13,
			size: i === 0 ? 9 : 8,
			font: i === 0 ? helvBold : helv,
			color: i === 0 ? COLOR.gray : COLOR.gray,
		});
	});

	// Bottom: institution name
	page.drawText("AIINOD", {
		x: width / 2 - 22, y: 36,
		size: 10, font: timesBold, color: COLOR.navy,
	});

	return await doc.save();
}

// ─── Public API: generate + store + signed URL ───────────────────────────

export interface CertResult {
	path: string;
	signedUrl: string;
}

/**
 * Ensure a certificate exists for the given completion row. If one is already
 * stored, return the existing signed URL. Otherwise build, upload, and return.
 * Throws on error.
 */
export async function ensureCertificate(
	ctx: APIContext,
	completion: {
		id: string;
		user_id: string;
		courses: { title: string; slug: string } | null;
		completed_at: string;
	},
	userProfile: { full_name: string | null; email: string | null } | null,
): Promise<CertResult> {
	if (!completion.courses) throw new Error("Course not joined on completion");
	const admin = makeServiceRoleClient(ctx);
	if (!admin) throw new Error("Service-role client not configured");

	const path = storagePath(completion.user_id, completion.id);

	// Check existing — but signed URLs expire. We just regenerate the signed URL each time.
	// Build always (fast: ~50ms). If we want to skip, we can hash inputs and cache in a comment field.
	const pdf = await buildCertificatePdf({
		userName: userProfile?.full_name ?? userProfile?.email ?? "Cynex Learner",
		userEmail: userProfile?.email ?? "",
		courseTitle: completion.courses.title,
		courseSlug: completion.courses.slug,
		completedAt: new Date(completion.completed_at),
		completionId: completion.id,
	});

	const { error: upErr } = await uploadPdf(ctx, path, pdf);
	if (upErr) throw new Error(`upload failed: ${upErr}`);

	// Update lms_completions.certificate_url = path (just the path, not the signed URL)
	const { error: updErr } = await admin
		.from("lms_completions")
		.update({ certificate_url: path })
		.eq("id", completion.id);
	if (updErr) {
		// Non-fatal — the PDF is still downloadable via the storage path.
		console.error("certificate_url update failed:", updErr.message);
	}

	const url = await signedUrl(ctx, path);
	if (!url) throw new Error("signed URL generation failed");

	return { path, signedUrl: url };
}
