import { dict, DEFAULT_LANGUAGE } from "@/i18n";
import staticProjects, { type Project } from "@constants/projects";
import type { SupabaseClient } from "@supabase/supabase-js";
import { defaultLogger as logger } from "clogs.ts";
import { getPublicSupabaseClient } from "./supabase/server";

export interface ProjectRow {
  id: string;
  title: string;
  description: string;
  techs: string[] | null;
  web_url: string | null;
  github_url: string | null;
  sort_order: number | null;
  created_at?: string;
}

const columns =
  "id, title, description, techs, web_url, github_url, sort_order, created_at";

const mapRow = (row: ProjectRow): Project => ({
  id: row.id,
  title: row.title,
  description: row.description,
  techs: row.techs ?? [],
  links: {
    web: row.web_url ?? undefined,
    github: row.github_url ?? undefined,
  },
  localized: false,
  sortOrder: row.sort_order ?? 0,
});

const localizeStaticProject = (project: Project): Project => ({
  ...project,
  localized: true,
});

const staticFallback = (): Project[] =>
  staticProjects.map(localizeStaticProject);

const CACHE_TTL = 30_000;
let publicCache: { data: Project[]; expiresAt: number } | null = null;
let warnedAboutReadError = false;

export const invalidateProjectsCache = (): void => {
  publicCache = null;
};

/** Projects for the public site: database when configured, static otherwise. */
export async function getProjects(): Promise<Project[]> {
  if (publicCache && publicCache.expiresAt > Date.now()) {
    return publicCache.data;
  }

  const supabase = getPublicSupabaseClient();
  if (!supabase) return staticFallback();

  const { data, error } = await supabase
    .from("projects")
    .select(columns)
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false });

  if (error) {
    if (!warnedAboutReadError) {
      logger.Warn(`Could not load projects from Supabase: ${error.message}`);
      warnedAboutReadError = true;
    }
    return staticFallback();
  }

  const projects = data?.length
    ? (data as ProjectRow[]).map(mapRow)
    : staticFallback();

  publicCache = { data: projects, expiresAt: Date.now() + CACHE_TTL };
  return projects;
}

export async function getAdminProjects(
  supabase: SupabaseClient,
): Promise<Project[]> {
  const { data, error } = await supabase
    .from("projects")
    .select(columns)
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false });

  if (error) {
    logger.Error(`Could not load admin projects: ${error.message}`);
    return [];
  }

  return (data as ProjectRow[] | null)?.map(mapRow) ?? [];
}

export async function getProjectById(
  supabase: SupabaseClient,
  id: string,
): Promise<Project | null> {
  const { data, error } = await supabase
    .from("projects")
    .select(columns)
    .eq("id", id)
    .maybeSingle();

  if (error || !data) return null;
  return mapRow(data as ProjectRow);
}

/** Copies the static project list into Supabase (Portuguese copy when available). */
export async function seedProjects(supabase: SupabaseClient): Promise<number> {
  const items = dict[DEFAULT_LANGUAGE].components?.projects?.items as
    Record<string, { title?: string; description?: string }> | undefined;

  const rows = staticProjects.map((project, index) => {
    const localized = items?.[project.id];
    return {
      title: localized?.title ?? project.title,
      description: localized?.description ?? project.description,
      techs: project.techs,
      web_url: project.links.web ?? null,
      github_url: project.links.github ?? null,
      sort_order: project.sortOrder ?? index,
    };
  });

  const { error } = await supabase.from("projects").insert(rows);
  if (error) throw new Error(error.message);

  return rows.length;
}
