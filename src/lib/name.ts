// src/lib/name.ts — shared full-name normalization.
// Used by /api/login (user-entered) and /api/admin/bulk-enroll/commit
// (operator-imported from CSV). Keeps capitalization + whitespace rules
// in one place so certs, /me, and admin views agree.

const MIN_LEN = 2;
const MAX_LEN = 80;

/**
 * Normalize a user-entered or CSV-imported name.
 *
 * Rules:
 *  - trim leading/trailing whitespace
 *  - collapse internal whitespace runs to a single space
 *  - capitalize the first letter of each whitespace-separated token;
 *    lowercase the rest. ("john doe" → "John Doe", "  JOHN  DOE  " → "John Doe")
 *  - reject names that are empty, all-whitespace, shorter than 2 chars,
 *    or longer than 80 chars after normalization
 *
 * Returns null on invalid input. Naive handling of apostrophes/hyphens
 * ("O'Brien" → "O'brien") is accepted as v0; we'll revisit when
 * /me/settings ships.
 */
export function normalizeName(raw: string | null | undefined): string | null {
	if (raw == null) return null;
	const collapsed = String(raw).trim().replace(/\s+/g, ' ');
	if (collapsed.length < MIN_LEN || collapsed.length > MAX_LEN) return null;
	if (!/\S/.test(collapsed)) return null;

	const tokens = collapsed.split(' ').map((tok) => {
		if (tok.length === 0) return tok;
		// Capitalize first codepoint, lowercase the rest. Handles BMP letters
		// well enough for English/German names we expect in v0.
		const first = tok.charAt(0).toUpperCase();
		const rest = tok.slice(1).toLowerCase();
		return first + rest;
	});
	return tokens.join(' ');
}

/** True if `normalizeName` would accept `raw`. */
export function isValidName(raw: string | null | undefined): boolean {
	return normalizeName(raw) !== null;
}