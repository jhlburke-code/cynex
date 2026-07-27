import type { APIRoute } from 'astro';
import { requireAdmin } from '../../../../../lib/auth';
import { makeAuthenticatedClient } from '../../../../../lib/supabase';

export const POST: APIRoute = async (ctx) => {
  const gate = await requireAdmin(ctx);
  if (gate instanceof Response) return gate;

  const id = ctx.params.id;
  if (!id) return new Response('missing id', { status: 400 });

  const client = makeAuthenticatedClient(ctx);

  // ON DELETE SET NULL on lms_courses.category_id handles course reassignment.
  // ON DELETE RESTRICT on lms_categories.parent_id will block if this category
  // is itself a parent — surface that as a friendly error.
  const { data: children, error: childErr } = await client
    .from('lms_categories')
    .select('id')
    .eq('parent_id', id)
    .limit(1);

  if (childErr) {
    return ctx.redirect(`/admin/categories/${id}?error=` + encodeURIComponent(childErr.message));
  }
  if (children && children.length > 0) {
    return ctx.redirect(`/admin/categories/${id}?error=` + encodeURIComponent('Cannot delete: this category has sub-categories. Delete or reparent them first.'));
  }

  const { error } = await client.from('lms_categories').delete().eq('id', id);

  if (error) {
    return ctx.redirect(`/admin/categories/${id}?error=` + encodeURIComponent(error.message));
  }
  return ctx.redirect('/admin/categories?saved=1');
};