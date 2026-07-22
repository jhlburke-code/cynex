import type { APIContext } from 'astro';
import { makeBrowserClient } from './supabase';

/**
 * Resolve a path segment that may be a slug OR a UUID to the canonical (slug, course)
 * pair. Returns null if neither resolves. Used by /c/[slug] and /learn/[slug] to
 * defensively handle the case where a UUID was mistakenly used instead of a slug
 * (e.g. via a stale redirect or admin link).
 */
export async function resolveCourse(ctx: APIContext, hint: string | undefined): Promise<{ slug: string; course: any } | null> {
  if (!hint) return null;
  const client = makeBrowserClient(ctx);

  // 1) Try slug match first.
  const { data: bySlug } = await client
    .from('lms_courses')
    .select('id, slug, title, content_type, asset_url, widget_key, duration_minutes, is_published')
    .eq('slug', hint)
    .maybeSingle();
  if (bySlug) return { slug: bySlug.slug, course: bySlug };

  // 2) If it looks like a UUID, look up by id and return its canonical slug.
  if (/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(hint)) {
    const { data: byId } = await client
      .from('lms_courses')
      .select('id, slug, title, content_type, asset_url, widget_key, duration_minutes, is_published')
      .eq('id', hint)
      .maybeSingle();
    if (byId) return { slug: byId.slug, course: byId };
  }

  return null;
}
