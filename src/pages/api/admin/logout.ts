import type { APIRoute } from 'astro';
import { clearSessionCookies } from '../../../lib/supabase';

export const GET: APIRoute = async (ctx) => {
  clearSessionCookies(ctx);
  return ctx.redirect('/login');
};
