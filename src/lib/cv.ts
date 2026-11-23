import { getPublicSupabaseClient } from "./supabase/server";

export const CV_BUCKET = "portfolio";
export const CV_FOLDER = "cv";
export const CV_FILE_NAME = "curriculo.pdf";
export const CV_PATH = `${CV_FOLDER}/${CV_FILE_NAME}`;
export const DEFAULT_CV_URL = "/cv-fabio.pdf";

const CACHE_TTL = 60_000;
let cached: { url: string; expiresAt: number } | null = null;

export const invalidateCvCache = (): void => {
  cached = null;
};

const remember = (url: string): string => {
  cached = { url, expiresAt: Date.now() + CACHE_TTL };
  return url;
};

/**
 * Public URL of the uploaded CV. The bucket is public, so a HEAD request is
 * enough to know whether the object exists. Falls back to the bundled PDF.
 */
export async function getCvUrl(): Promise<string> {
  if (cached && cached.expiresAt > Date.now()) return cached.url;

  const supabase = getPublicSupabaseClient();
  if (!supabase) return DEFAULT_CV_URL;

  const { data } = supabase.storage.from(CV_BUCKET).getPublicUrl(CV_PATH);
  const publicUrl = data.publicUrl;

  try {
    const response = await fetch(publicUrl, {
      method: "HEAD",
      signal: AbortSignal.timeout(2500),
    });

    if (!response.ok) return remember(DEFAULT_CV_URL);

    const version =
      response.headers.get("last-modified") ??
      response.headers.get("etag") ??
      "";

    return remember(
      version ? `${publicUrl}?v=${encodeURIComponent(version)}` : publicUrl,
    );
  } catch {
    return remember(DEFAULT_CV_URL);
  }
}
