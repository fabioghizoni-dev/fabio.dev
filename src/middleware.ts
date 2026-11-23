import { defineMiddleware } from "astro:middleware";
import { getSupabaseUser, isSupabaseConfigured } from "@/lib/supabase/server";

const LOGIN_PATH = "/admin/login";

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname, search } = context.url;

  if (!pathname.startsWith("/admin")) return next();

  if (!isSupabaseConfigured) {
    return pathname === LOGIN_PATH
      ? next()
      : context.redirect(`${LOGIN_PATH}?setup=1`);
  }

  if (pathname === LOGIN_PATH) return next();

  const { supabase, user } = await getSupabaseUser(
    context.cookies,
    context.request,
  );

  context.locals.supabase = supabase;
  context.locals.user = user;

  if (!user) {
    const nextPath = encodeURIComponent(`${pathname}${search}`);
    return context.redirect(`${LOGIN_PATH}?next=${nextPath}`);
  }

  const response = await next();
  response.headers.set("Cache-Control", "private, no-store");
  return response;
});
