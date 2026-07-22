import type { APIRoute } from 'astro';
import { requireAdmin } from '../../../../lib/auth';
import { makeAuthenticatedClient } from '../../../../lib/supabase';

export const POST: APIRoute = async (ctx) => {
  const gate = await requireAdmin(ctx);
  if (gate instanceof Response) return gate;

  const form = await ctx.request.formData();
  const get = (k: string) => String(form.get(k) ?? '').trim();

  const slug = get('slug');
  const title = get('title');
  const content_type = get('content_type');
  const description = get('description');
  const widget_key = get('widget_key');
  const asset_url = get('asset_url');
  const duration_str = get('duration_minutes');
  const is_published = form.get('is_published') === '1';

  if (!slug || !title || !content_type) {
    return ctx.redirect('/admin/courses/new?error=' + encodeURIComponent('slug, title, content_type required'));
  }
  if (!/^[a-z0-9][a-z0-9/_-]{2,80}$/.test(slug)) {
    return ctx.redirect('/admin/courses/new?error=' + encodeURIComponent('slug must be lowercase, hyphens or underscores only, 3–80 chars'));
  }
  const duration_minutes = duration_str ? parseInt(duration_str, 10) : null;
  if (duration_str && (isNaN(duration_minutes as number) || (duration_minutes as number) < 1)) {
    return ctx.redirect('/admin/courses/new?error=' + encodeURIComponent('duration_minutes must be a positive integer'));
  }

  const client = makeAuthenticatedClient(ctx);
  const { data, error } = await client
    .from('lms_courses')
    .insert({
      slug, title, description: description || null, content_type,
      widget_key: widget_key || null, asset_url: asset_url || null,
      duration_minutes, is_published,
    })
    .select('id')
    .single();

  if (error || !data) {
    return ctx.redirect('/admin/courses/new?error=' + encodeURIComponent(error?.message ?? 'unknown'));
  }
  return ctx.redirect(`/admin/courses/${data.id}?saved=1`);
};
