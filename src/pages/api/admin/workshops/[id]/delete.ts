import type { APIRoute } from 'astro';
import { requireAdmin } from '../../../../../lib/auth';
import { makeAuthenticatedClient } from '../../../../../lib/supabase';

export const POST: APIRoute = async (ctx) => {
  const gate = await requireAdmin(ctx);
  if (gate instanceof Response) return gate;
  const id = ctx.params.id;
  if (!id) return new Response('missing id', { status: 400 });

  const client = makeAuthenticatedClient(ctx);
  const { error } = await client.from('lms_workshops').delete().eq('course_id', id);
  if (error) {
    return ctx.redirect(`/admin/workshops/${id}?error=` + encodeURIComponent(error.message));
  }
  return ctx.redirect('/admin/workshops');
};
