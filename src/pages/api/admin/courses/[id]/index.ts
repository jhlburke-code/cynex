import type { APIRoute } from 'astro';
import { requireAdmin } from '../../../../../lib/auth';
import { makeAuthenticatedClient } from '../../../../../lib/supabase';

export const POST: APIRoute = async (ctx) => {
  const gate = await requireAdmin(ctx);
  if (gate instanceof Response) return gate;

  const id = ctx.params.id;
  if (!id) return new Response('missing id', { status: 400 });

  const form = await ctx.request.formData();
  const get = (k: string) => String(form.get(k) ?? '').trim();

  const updates: Record<string, any> = {
    updated_at: new Date().toISOString(),
  };

  const slug = get('slug');
  if (slug) {
    if (!/^[a-z0-9][a-z0-9/_-]{2,80}$/.test(slug)) {
      return ctx.redirect(`/admin/courses/${id}?error=` + encodeURIComponent('invalid slug format'));
    }
    updates.slug = slug;
  }
  updates.title = get('title') || undefined;
  updates.description = get('description') || null;
  updates.widget_key = get('widget_key') || null;
  updates.asset_url = get('asset_url') || null;
  const dur = get('duration_minutes');
  if (dur) {
    const n = parseInt(dur, 10);
    if (!isNaN(n) && n >= 1 && n <= 600) updates.duration_minutes = n;
  }
  updates.is_published = form.get('is_published') === '1';

  // Drop undefined values
  for (const k of Object.keys(updates)) if (updates[k] === undefined) delete updates[k];

  const client = makeAuthenticatedClient(ctx);
  const { error } = await client.from('lms_courses').update(updates).eq('id', id);

  if (error) {
    return ctx.redirect(`/admin/courses/${id}?error=` + encodeURIComponent(error.message));
  }
  return ctx.redirect(`/admin/courses/${id}?saved=1`);
};
