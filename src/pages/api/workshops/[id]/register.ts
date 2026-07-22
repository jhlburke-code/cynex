import type { APIRoute } from 'astro';
import { getCurrentUser, makeAuthenticatedClient, makeServiceRoleClient } from '../../../../lib/supabase';

export const POST: APIRoute = async (ctx) => {
  const courseId = ctx.params.id;
  if (!courseId) return new Response('missing id', { status: 400 });

  const user = await getCurrentUser(ctx);
  if (!user) {
    return ctx.redirect(`/login?next=/workshops/${courseId}`);
  }

  const admin = makeServiceRoleClient(ctx);
  if (!admin) {
    return new Response('service_role not configured', { status: 500 });
  }

  // Workshop + course lookup (we need slug for redirect)
  const { data: row } = await admin
    .from('lms_workshops')
    .select('course_id, capacity, starts_at, lms_courses ( slug )')
    .eq('course_id', courseId)
    .maybeSingle();

  if (!row || !row.lms_courses) return ctx.redirect(`/catalog`);
  const slug = (row.lms_courses as any).slug;

  if (row.capacity != null) {
    const { count } = await admin
      .from('lms_enrollments')
      .select('user_id', { count: 'exact', head: true })
      .eq('course_id', courseId);
    if ((count || 0) >= row.capacity) {
      return ctx.redirect(`/c/${slug}#workshop-full`);
    }
  }

  const client = makeAuthenticatedClient(ctx);
  await client
    .from('lms_enrollments')
    .upsert(
      { user_id: user.id, course_id: courseId, status: 'active' },
      { onConflict: 'user_id,course_id' },
    );

  return ctx.redirect(`/learn/${slug}`);
};
