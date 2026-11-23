import type { AstroCookies } from "astro";
import { ActionError } from "astro:actions";
import { getSupabaseUser } from "@/lib/supabase/server";

/** Returns the authenticated Supabase client or throws an action error. */
export async function requireActionUser(
  cookies: AstroCookies,
  request: Request,
) {
  const { supabase, user } = await getSupabaseUser(cookies, request);

  if (!supabase || !user) {
    throw new ActionError({
      code: "UNAUTHORIZED",
      message: "Faça login para continuar.",
    });
  }

  return supabase;
}
