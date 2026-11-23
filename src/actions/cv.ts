import { z } from "astro/zod";
import { ActionError, defineAction } from "astro:actions";
import { CV_BUCKET, CV_PATH, invalidateCvCache } from "@/lib/cv";
import { requireActionUser } from "./_helpers";

const MAX_BYTES = 8 * 1024 * 1024;

const isPdf = (file: File): boolean =>
  file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf");

export const cvActions = {
  cv: {
    upload: defineAction({
      accept: "form",
      input: z.object({
        file: z.instanceof(File),
      }),
      handler: async ({ file }, context) => {
        const supabase = await requireActionUser(
          context.cookies,
          context.request,
        );

        if (!file.size) {
          throw new ActionError({
            code: "BAD_REQUEST",
            message: "O arquivo está vazio.",
          });
        }

        if (file.size > MAX_BYTES) {
          throw new ActionError({
            code: "BAD_REQUEST",
            message: "O PDF deve ter no máximo 8 MB.",
          });
        }

        if (!isPdf(file)) {
          throw new ActionError({
            code: "BAD_REQUEST",
            message: "Envie um arquivo PDF.",
          });
        }

        const { error } = await supabase.storage
          .from(CV_BUCKET)
          .upload(CV_PATH, file, {
            contentType: "application/pdf",
            upsert: true,
            cacheControl: "60",
          });

        if (error) {
          throw new ActionError({
            code: "INTERNAL_SERVER_ERROR",
            message: `Não foi possível enviar o currículo: ${error.message}`,
          });
        }

        const { data } = supabase.storage.from(CV_BUCKET).getPublicUrl(CV_PATH);
        invalidateCvCache();

        return {
          success: true,
          url: `${data.publicUrl}?v=${Date.now()}`,
        };
      },
    }),

    remove: defineAction({
      accept: "form",
      input: z.object({}),
      handler: async (_input, context) => {
        const supabase = await requireActionUser(
          context.cookies,
          context.request,
        );
        const { error } = await supabase.storage
          .from(CV_BUCKET)
          .remove([CV_PATH]);

        if (error) {
          throw new ActionError({
            code: "INTERNAL_SERVER_ERROR",
            message: `Não foi possível remover o currículo: ${error.message}`,
          });
        }

        invalidateCvCache();
        return { success: true };
      },
    }),
  },
};
