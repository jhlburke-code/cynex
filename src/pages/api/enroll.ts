import type { APIRoute } from 'astro';
import { makeAuthenticatedClient, getCurrentUser } from '../../lib/supabase';

export const POST: APIRoute = async (ctx) => {
  const user = await getCurrentUser(ctx);
  if (!user) {
    const url = new URL(ctx.request.url);
    const slug = String((await ctx.request.formData()).get('course_slug') ?? '');
    return ctx.redirect(`/login?next=/c/${slug}`);
  }

  const form = await ctx.request.formData();
  const courseId = String(form.get('course_id') ?? '');
  const slug = String(form.get('course_slug') ?? '');
  if (!courseId) return new Response('Missing course_id', { status: 400 });

  const client = makeAuthenticatedClient(ctx);
  const { error } = await client
    .from('lms_enrollments')
    .upsert(
      { user_id: user.id, course_id: courseId, enrolled_by: null },
      { onConflict: 'user_id,course_id' },
    );

  if (error) {
    return new Response(`Enroll failed: ${error.message}`, { status: 500 });
  }
  return ctx.redirect(`/learn/${slug}`);
};
