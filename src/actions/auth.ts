import { getSupabaseServerClient } from "@/lib/supabase/server";
import { z } from "astro/zod";
import { ActionError, defineAction } from "astro:actions";

const LoginSchema = z.object({
  email: z.email("Informe um e-mail válido.").trim(),
  password: z.string().min(1, "Informe a senha."),
});

export const authActions = {
  auth: {
    login: defineAction({
      accept: "form",
      input: LoginSchema,
      handler: async ({ email, password }, context) => {
        const supabase = getSupabaseServerClient(
          context.cookies,
          context.request,
        );

        if (!supabase) {
          throw new ActionError({
            code: "INTERNAL_SERVER_ERROR",
            message:
              "Supabase não configurado. Defina SUPABASE_URL e SUPABASE_ANON_KEY.",
          });
        }

        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error || !data.user) {
          throw new ActionError({
            code: "UNAUTHORIZED",
            message: "E-mail ou senha inválidos.",
          });
        }

        return { success: true, email: data.user.email ?? email };
      },
    }),
  },
};
