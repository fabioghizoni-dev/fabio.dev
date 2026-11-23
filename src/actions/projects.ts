import { invalidateProjectsCache, seedProjects } from "@/lib/projects";
import { z } from "astro/zod";
import { ActionError, defineAction } from "astro:actions";
import { requireActionUser } from "./_helpers";

const ProjectSchema = z.object({
  id: z.uuid().optional(),
  title: z.string().trim().min(2, "Título muito curto.").max(120),
  description: z.string().trim().min(10, "Descrição muito curta.").max(2000),
  techs: z.string().trim().max(500).optional(),
  web_url: z.string().trim().max(500).optional(),
  github_url: z.string().trim().max(500).optional(),
  sort_order: z.coerce.number().int().min(0).max(9999).optional(),
});

const IdSchema = z.object({
  id: z.uuid("Projeto inválido."),
});

const parseTechs = (value?: string): string[] => {
  if (!value) return [];

  return [
    ...new Set(
      value
        .split(/[,;\n]/)
        .map((tech) => tech.trim())
        .filter(Boolean),
    ),
  ].slice(0, 16);
};

const normalizeLink = (value: string | undefined): string | null => {
  const link = value?.trim();
  if (!link) return null;
  if (link.startsWith("/")) return link;

  const withProtocol = /^https?:\/\//i.test(link) ? link : `https://${link}`;

  try {
    const url = new URL(withProtocol);
    if (!["http:", "https:"].includes(url.protocol)) {
      throw new Error("invalid protocol");
    }
    return url.toString();
  } catch {
    throw new ActionError({
      code: "BAD_REQUEST",
      message: "Informe uma URL válida para o projeto.",
    });
  }
};

export const projectActions = {
  projects: {
    create: defineAction({
      accept: "form",
      input: ProjectSchema,
      handler: async (input, context) => {
        const supabase = await requireActionUser(
          context.cookies,
          context.request,
        );
        const row = {
          title: input.title,
          description: input.description,
          techs: parseTechs(input.techs),
          web_url: normalizeLink(input.web_url),
          github_url: normalizeLink(input.github_url),
          sort_order: input.sort_order ?? 0,
        };

        const { data, error } = await supabase
          .from("projects")
          .insert(row)
          .select("id")
          .single();

        if (error) {
          throw new ActionError({
            code: "INTERNAL_SERVER_ERROR",
            message: `Não foi possível criar o projeto: ${error.message}`,
          });
        }

        invalidateProjectsCache();
        return { success: true, id: data.id as string };
      },
    }),

    update: defineAction({
      accept: "form",
      input: ProjectSchema.extend({ id: z.uuid("Projeto inválido.") }),
      handler: async (input, context) => {
        const supabase = await requireActionUser(
          context.cookies,
          context.request,
        );
        const { error } = await supabase
          .from("projects")
          .update({
            title: input.title,
            description: input.description,
            techs: parseTechs(input.techs),
            web_url: normalizeLink(input.web_url),
            github_url: normalizeLink(input.github_url),
            sort_order: input.sort_order ?? 0,
            updated_at: new Date().toISOString(),
          })
          .eq("id", input.id);

        if (error) {
          throw new ActionError({
            code: "INTERNAL_SERVER_ERROR",
            message: `Não foi possível salvar o projeto: ${error.message}`,
          });
        }

        invalidateProjectsCache();
        return { success: true, id: input.id };
      },
    }),

    remove: defineAction({
      accept: "form",
      input: IdSchema,
      handler: async (input, context) => {
        const supabase = await requireActionUser(
          context.cookies,
          context.request,
        );
        const { error } = await supabase
          .from("projects")
          .delete()
          .eq("id", input.id);

        if (error) {
          throw new ActionError({
            code: "INTERNAL_SERVER_ERROR",
            message: `Não foi possível excluir o projeto: ${error.message}`,
          });
        }

        invalidateProjectsCache();
        return { success: true };
      },
    }),

    seed: defineAction({
      accept: "form",
      input: z.object({}),
      handler: async (_input, context) => {
        const supabase = await requireActionUser(
          context.cookies,
          context.request,
        );

        const { count, error } = await supabase
          .from("projects")
          .select("id", { count: "exact", head: true });

        if (error) {
          throw new ActionError({
            code: "INTERNAL_SERVER_ERROR",
            message: error.message,
          });
        }

        if (count && count > 0) {
          throw new ActionError({
            code: "BAD_REQUEST",
            message: "Já existem projetos cadastrados.",
          });
        }

        try {
          const imported = await seedProjects(supabase);
          invalidateProjectsCache();
          return { success: true, imported };
        } catch (err) {
          throw new ActionError({
            code: "INTERNAL_SERVER_ERROR",
            message: `Não foi possível importar os projetos: ${
              err instanceof Error ? err.message : "erro desconhecido"
            }`,
          });
        }
      },
    }),
  },
};
