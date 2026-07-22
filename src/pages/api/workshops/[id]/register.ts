import type { APIRoute } from 'astro';
import { getCurrentUser, makeAuthenticatedClient, makeServiceRoleClient } from '../../../../lib/supabase';

export const POST: APIRoute = async (ctx) => {
  const courseId = ctx.params.id;
  if (!courseId) return new Response('missing id', { status: 400 });

  const user = await getCurrentUser(ctx);
  if (!user) {
    return ctx.redirect(`/login?next=/learn/workshop-${courseId}`);
  }

  const admin = makeServiceRoleClient(ctx);
  if (!admin) {
    return new Response('service_role not configured', { status: 500 });
  }

  // Workshop exists + capacity check
  const { data: ws } = await admin
    .from('lms_workshops')
    .select('course_id, capacity, starts_at')
    .eq('course_id', courseId)
    .maybeSingle();

  if (!ws) return ctx.redirect(`/c/${courseId}`);

  if (ws.capacity != null) {
    const { count } = await admin
      .from('lms_enrollments')
      .select('user_id', { count: 'exact', head: true })
      .eq('course_id', courseId);
    if ((count || 0) >= ws.capacity) {
      return ctx.redirect(`/c/${courseId}#workshop-full`);
    }
  }

  const client = makeAuthenticatedClient(ctx);
  await client
    .from('lms_enrollments')
    .upsert(
      { user_id: user.id, course_id: courseId, status: 'active' },
      { onConflict: 'user_id,course_id' },
    );

  return ctx.redirect(`/learn/${courseId}`);
};
