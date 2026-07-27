/**
 * Rise content upload helpers.
 *
 * Takes a Rise "Web" export — either as a single ZIP or a webkitdirectory folder
 * pick — and pushes the contents to the `rise-content` Supabase Storage bucket.
 *
 * Pure functions only. No HTTP, no Supabase calls. The endpoint that uses
 * these (`/api/admin/courses/[id]/upload-rise`) handles request parsing,
 * admin auth, and the actual storage upload.
 */

import { unzipSync, type Unzipped } from 'fflate';

export type RiseEntry = {
  /** Path relative to the bundle root, e.g. "index.html" or "assets/logo.png". Always uses forward slashes. */
  path: string;
  /** Raw file bytes. */
  data: Uint8Array;
  /** Best-effort content type. */
  contentType: string;
};

export type ExtractResult = {
  /** All entries that survived sanitisation. May be empty. */
  entries: RiseEntry[];
  /** Paths that were dropped (for telemetry / debug). */
  skipped: { path: string; reason: string }[];
  /** True if `index.html` exists at the root. */
  hasIndex: boolean;
};

/** Files / paths we never want to push. */
const SKIP_PREFIXES = ['__MACOSX/', '.'];
const SKIP_NAMES = new Set(['.DS_Store', 'Thumbs.db']);

/** Conservative content-type table. Falls back to octet-stream. */
const MIME_BY_EXT: Record<string, string> = {
  html: 'text/html; charset=utf-8',
  htm: 'text/html; charset=utf-8',
  css: 'text/css; charset=utf-8',
  js: 'application/javascript; charset=utf-8',
  mjs: 'application/javascript; charset=utf-8',
  json: 'application/json; charset=utf-8',
  xml: 'application/xml; charset=utf-8',
  svg: 'image/svg+xml',
  png: 'image/png',
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  gif: 'image/gif',
  webp: 'image/webp',
  avif: 'image/avif',
  ico: 'image/x-icon',
  woff: 'font/woff',
  woff2: 'font/woff2',
  ttf: 'font/ttf',
  otf: 'font/otf',
  eot: 'application/vnd.ms-fontobject',
  mp4: 'video/mp4',
  webm: 'video/webm',
  mp3: 'audio/mpeg',
  wav: 'audio/wav',
  pdf: 'application/pdf',
  txt: 'text/plain; charset=utf-8',
  md: 'text/markdown; charset=utf-8',
};

export function contentTypeFor(path: string, fallback?: string): string {
  if (fallback && fallback !== 'application/octet-stream') return fallback;
  const ext = path.split('.').pop()?.toLowerCase();
  if (!ext) return 'application/octet-stream';
  return MIME_BY_EXT[ext] ?? 'application/octet-stream';
}

/** Normalise a path: forward slashes, no leading slash, no trailing slash, no `..`. */
export function sanitisePath(rawPath: string): string | null {
  // Normalise separators and trim.
  let p = rawPath.replace(/\\/g, '/').trim();
  // Drop leading slashes.
  while (p.startsWith('/')) p = p.slice(1);
  // Empty path or "." — useless.
  if (!p || p === '.' || p === '..') return null;
  // Any ".." segment is a traversal attempt.
  const parts = p.split('/');
  if (parts.some((seg) => seg === '..')) return null;
  // macOS resource fork / Windows metadata — drop.
  if (parts.some((seg) => seg.startsWith('.'))) return null;
  if (SKIP_PREFIXES.some((prefix) => p.startsWith(prefix))) return null;
  if (SKIP_NAMES.has(parts[parts.length - 1])) return null;
  return p;
}

/**
 * Detect the common first path segment of a folder-pick upload and strip it.
 * If every file shares the same first segment (the folder the user clicked on),
 * drop it so files land at the bundle root.
 */
function stripCommonRoot(paths: string[]): string[] {
  if (paths.length === 0) return paths;
  const firstSegments = new Set(paths.map((p) => p.split('/')[0]));
  if (firstSegments.size !== 1) return paths;
  const root = [...firstSegments][0] + '/';
  return paths.map((p) => (p.startsWith(root) ? p.slice(root.length) : p));
}

/**
 * Extract entries from a Rise "Web" ZIP file.
 *
 * @param zipBytes  raw ZIP bytes (Uint8Array)
 */
export function extractFromZip(zipBytes: Uint8Array): ExtractResult {
  const skipped: { path: string; reason: string }[] = [];
  let raw: Unzipped;
  try {
    raw = unzipSync(zipBytes, {
      filter: (file) => {
        // Cheap pre-filter: skip the obvious cruft before inflating.
        const normalised = file.name.replace(/\\/g, '/');
        if (normalised.includes('..')) return false;
        if (normalised.includes('__MACOSX/')) return false;
        const base = normalised.split('/').pop() ?? '';
        if (base.startsWith('._') || base === '.DS_Store' || base === 'Thumbs.db') return false;
        return true;
      },
    });
  } catch (e) {
    throw new Error(`Could not read ZIP: ${(e as Error).message}`);
  }

  const entries: RiseEntry[] = [];
  for (const [name, data] of Object.entries(raw)) {
    // fflate returns directories as empty Uint8Arrays with trailing slash.
    const isDirEntry = name.endsWith('/') || data.length === 0;
    const path = sanitisePath(name);
    if (!path) {
      skipped.push({ path: name, reason: 'unsafe or metadata path' });
      continue;
    }
    if (isDirEntry) {
      skipped.push({ path: name, reason: 'directory entry' });
      continue;
    }
    entries.push({ path, data, contentType: contentTypeFor(path) });
  }

  const hasIndex = entries.some((e) => e.path === 'index.html');
  return { entries, skipped, hasIndex };
}

/**
 * Extract entries from a `webkitdirectory` FileList. Each File has a
 * `webkitRelativePath` like "rise-export/index.html" or "rise-export/assets/logo.png".
 *
 * Common first segment is stripped so the bundle root is "index.html" rather than
 * "rise-export/index.html".
 */
export async function extractFromWebkitFiles(files: File[]): Promise<ExtractResult> {
  const skipped: { path: string; reason: string }[] = [];
  if (files.length === 0) {
    return { entries: [], skipped: [], hasIndex: false };
  }

  const relativePaths = files.map((f) => f.webkitRelativePath || f.name);
  const stripped = stripCommonRoot(relativePaths);

  const entries: RiseEntry[] = [];
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const path = sanitisePath(stripped[i]);
    if (!path) {
      skipped.push({ path: stripped[i], reason: 'unsafe or metadata path' });
      continue;
    }
    const buf = new Uint8Array(await file.arrayBuffer());
    entries.push({
      path,
      data: buf,
      contentType: contentTypeFor(path, file.type),
    });
  }

  const hasIndex = entries.some((e) => e.path === 'index.html');
  return { entries, skipped, hasIndex };
}

/**
 * Build the public URL of a file inside the `rise-content` Supabase Storage bucket.
 */
export function riseContentUrl(supabaseUrl: string, slug: string, filePath: string): string {
  const cleanPath = filePath.replace(/^\/+/, '');
  return `${supabaseUrl.replace(/\/+$/, '')}/storage/v1/object/public/rise-content/${slug}/${cleanPath}`;
}