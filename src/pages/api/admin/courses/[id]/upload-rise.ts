import type { APIRoute } from 'astro';
import { requireAdmin } from '../../../../../lib/auth';
import { makeServiceRoleClient } from '../../../../../lib/supabase';
import { extractFromZip, extractFromWebkitFiles, riseContentUrl, contentTypeFor } from '../../../../../lib/storage/rise-upload';

export const POST: APIRoute = async (ctx) => {
  const gate = await requireAdmin(ctx);
  if (gate instanceof Response) return gate;

  const id = ctx.params.id;
  if (!id) return ctx.redirect(`/admin/courses/${id}?rise_error=missing id`);

  // Find course (must exist and not be archived).
  const admin = makeServiceRoleClient(ctx);
  if (!admin) {
    return ctx.redirect(`/admin/courses/${id}?rise_error=` + encodeURIComponent('service-role key not configured'));
  }
  const { data: course, error: courseErr } = await admin
    .from('lms_courses')
    .select('id, slug, content_type')
    .eq('id', id)
    .maybeSingle();
  if (courseErr || !course) {
    return ctx.redirect(`/admin/courses/${id}?rise_error=` + encodeURIComponent('course not found'));
  }
  if (course.content_type !== 'elearning') {
    return ctx.redirect(`/admin/courses/${id}?rise_error=` + encodeURIComponent('Rise upload only available for content_type=elearning'));
  }

  // Parse multipart. We support two modes:
  //   - field "zip": a single .zip file (fflate-parsed)
  //   - field "files": one or more File objects from <input webkitdirectory>
  const form = await ctx.request.formData();
  const zipField = form.get('zip');
  const filesField = form.getAll('files');

  let entries;
  let hasIndex;
  let skippedCount = 0;

  try {
    if (zipField instanceof File && zipField.size > 0) {
      const buf = new Uint8Array(await zipField.arrayBuffer());
      const result = extractFromZip(buf);
      entries = result.entries;
      hasIndex = result.hasIndex;
      skippedCount = result.skipped.length;
    } else if (filesField.length > 0 && filesField.every((f) => f instanceof File)) {
      const result = await extractFromWebkitFiles(filesField as File[]);
      entries = result.entries;
      hasIndex = result.hasIndex;
      skippedCount = result.skipped.length;
    } else {
      return ctx.redirect(`/admin/courses/${id}?rise_error=` + encodeURIComponent('No ZIP or folder provided'));
    }
  } catch (e) {
    return ctx.redirect(`/admin/courses/${id}?rise_error=` + encodeURIComponent((e as Error).message));
  }

  if (entries.length === 0) {
    return ctx.redirect(`/admin/courses/${id}?rise_error=` + encodeURIComponent('Bundle was empty after filtering'));
  }
  if (!hasIndex) {
    return ctx.redirect(`/admin/courses/${id}?rise_error=` + encodeURIComponent('No index.html found at the bundle root — is this a Rise "Web" export?'));
  }

  // Upload each file to Supabase Storage bucket `rise-content` at path `<slug>/<rel>`.
  // Re-uploads overwrite (Supabase upsert). We deliberately don't delete pre-existing
  // files at the prefix — operators may have hand-edited assets and we don't want to
  // surprise them. Clean-up is a future `/api/admin/courses/[id]/delete-rise` task.
  const supabaseUrl = ctx.locals.runtime.env.SUPABASE_URL;
  let uploaded = 0;
  for (const entry of entries) {
    const objectPath = `${course.slug}/${entry.path}`;
    const { error: upErr } = await admin.storage
      .from('rise-content')
      .upload(objectPath, entry.data, {
        contentType: entry.contentType,
        upsert: true,
      });
    if (upErr) {
      return ctx.redirect(
        `/admin/courses/${id}?rise_error=` +
          encodeURIComponent(`Upload failed for ${entry.path}: ${upErr.message} (after ${uploaded} files)`),
      );
    }
    uploaded++;
  }

  // Compute the public URL of index.html and update the course row.
  const indexUrl = riseContentUrl(supabaseUrl, course.slug, 'index.html');
  const widgetKey = `rise:${course.slug}`;
  const { error: updErr } = await admin
    .from('lms_courses')
    .update({
      asset_url: indexUrl,
      widget_key: widgetKey,
      updated_at: new Date().toISOString(),
    })
    .eq('id', id);
  if (updErr) {
    return ctx.redirect(`/admin/courses/${id}?rise_error=` + encodeURIComponent(`Files uploaded but DB update failed: ${updErr.message}`));
  }

  return ctx.redirect(
    `/admin/courses/${id}?rise_uploaded=1&files=${uploaded}&skipped=${skippedCount}`,
  );
};