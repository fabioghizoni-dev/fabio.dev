import type { APIRoute } from "astro";
import { getSupabaseServerClient } from "@/lib/supabase/server";

export const POST: APIRoute = async (context) => {
  const supabase = getSupabaseServerClient(context.cookies, context.request);
  await supabase?.auth.signOut();
  return context.redirect("/admin/login");
};
