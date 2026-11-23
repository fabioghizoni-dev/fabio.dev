import { createServerClient } from "@supabase/ssr";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type { AstroCookies } from "astro";

export const supabaseUrl = import.meta.env.SUPABASE_URL;
export const supabaseAnonKey = import.meta.env.SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

/** Client for public, cookie-less reads (projects, CV metadata). */
export function getPublicSupabaseClient(): SupabaseClient | null {
  if (!isSupabaseConfigured) return null;

  return createClient(supabaseUrl!, supabaseAnonKey!, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

/**
 * Request-scoped client that reads and writes the auth session cookies.
 * Always create a new one per request.
 */
const parseCookieHeader = (
  header: string | null,
): { name: string; value: string }[] => {
  if (!header) return [];

  return header.split(";").flatMap((part) => {
    const separator = part.indexOf("=");
    if (separator === -1) return [];

    const name = part.slice(0, separator).trim();
    if (!name) return [];

    let value = part.slice(separator + 1).trim();
    try {
      value = decodeURIComponent(value);
    } catch {
      /* Keep the raw value when it is not URI encoded. */
    }

    return [{ name, value }];
  });
};

/**
 * Request-scoped client that reads and writes the auth session cookies.
 * Always create a new one per request.
 */
export function getSupabaseServerClient(
  cookies: AstroCookies,
  request?: Request,
): SupabaseClient | null {
  if (!isSupabaseConfigured) return null;

  const cookieHeader = request?.headers.get("cookie") ?? null;

  return createServerClient(supabaseUrl!, supabaseAnonKey!, {
    cookies: {
      getAll: () => parseCookieHeader(cookieHeader),
      setAll: (cookiesToSet) => {
        cookiesToSet.forEach(({ name, value, options }) => {
          cookies.set(name, value, {
            ...options,
            sameSite: options.sameSite === true ? "strict" : options.sameSite,
          });
        });
      },
    },
  });
}

export async function getSupabaseUser(
  cookies: AstroCookies,
  request?: Request,
) {
  const supabase = getSupabaseServerClient(cookies, request);
  if (!supabase) return { supabase: null, user: null };

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return { supabase, user };
}
