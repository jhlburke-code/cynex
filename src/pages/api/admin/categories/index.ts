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
  const description = get('description');
  const parentRaw = get('parent_id');
  const displayOrderStr = get('display_order');

  if (!slug || !title) {
    return ctx.redirect('/admin/categories/new?error=' + encodeURIComponent('slug and title required'));
  }
  if (!/^[a-z0-9][a-z0-9/_-]{2,80}$/.test(slug)) {
    return ctx.redirect('/admin/categories/new?error=' + encodeURIComponent('slug must be lowercase, hyphens or underscores only, 3-80 chars'));
  }

  const parent_id = parentRaw ? parentRaw : null;
  const display_order = displayOrderStr ? parseInt(displayOrderStr, 10) : 0;

  const client = makeAuthenticatedClient(ctx);
  const { data, error } = await client
    .from('lms_categories')
    .insert({
      slug, title,
      description: description || null,
      parent_id,
      display_order: isNaN(display_order) ? 0 : display_order,
    })
    .select('id')
    .single();

  if (error || !data) {
    return ctx.redirect('/admin/categories/new?error=' + encodeURIComponent(error?.message ?? 'unknown'));
  }
  return ctx.redirect(`/admin/categories/${data.id}?saved=1`);
};