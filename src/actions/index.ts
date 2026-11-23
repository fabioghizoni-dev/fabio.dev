import getHtml from "@/emails/Welcome";
import { DEFAULT_LANGUAGE, dict, resolveLanguage } from "@/i18n";
import p from "@constants/personal";
import { z } from "astro/zod";
import { ActionError, defineAction } from "astro:actions";
import { fg, defaultLogger as logger } from "clogs.ts";
import { Resend } from "resend";
import { authActions } from "./auth";
import { cvActions } from "./cv";
import { projectActions } from "./projects";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

const InputSchema = z.object({
  email: z.email().trim(),
  name: z.string().trim(),
  message: z.string().trim(),
  language: z.string().optional(),
  /** Honeypot: real users never see or fill this field. */
  website: z.string().optional(),
});

export const server = {
  ...authActions,
  ...projectActions,
  ...cvActions,
  send: defineAction({
    accept: "form",
    input: InputSchema,
    handler: async (input) => {
      const {
        name,
        email,
        message,
        website,
        language = DEFAULT_LANGUAGE,
      } = input;

      if (website) {
        logger.Warn("Contact form blocked by honeypot.");
        return { success: true, data: null };
      }

      const messages =
        dict[resolveLanguage(language)].actions ??
        dict[DEFAULT_LANGUAGE].actions;

      if (!name || name.length < 2 || name.length > 100) {
        throw new ActionError({
          code: "BAD_REQUEST",
          message:
            name.length > 100
              ? (messages?.name?.max ?? "Nome muito longo")
              : (messages?.name?.min ??
                "O nome deve ter pelo menos 2 caracteres"),
        });
      }

      if (email.length > 255 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        throw new ActionError({
          code: "BAD_REQUEST",
          message: messages?.email?.email ?? "Endereço de e-mail inválido",
        });
      }

      if (message.length < 10 || message.length > 2000) {
        throw new ActionError({
          code: "BAD_REQUEST",
          message:
            message.length > 2000
              ? (messages?.message?.max ?? "Mensagem muito longa")
              : (messages?.message?.min ??
                "A mensagem deve ter pelo menos 10 caracteres"),
        });
      }

      logger.Log(`New contact request from ${name} <${email}>`);

      const html = getHtml(name, email, message);

      try {
        const { data, error } = await resend.emails.send({
          html,
          replyTo: email,
          to: p.email.main,
          subject: `Message from ${name}`,
          from: `Dev <delivered@resend.dev>`,
        });

        if (error) {
          logger.Error(`{\n${error.name}\n${error.message}\n}`);
          throw new Error(`{\n${error.name}\n${error.message}\n}`);
        }

        const result = { success: true, data };
        logger.Log(
          JSON.stringify(result, null, 2)
            .replace(`"id"`, fg("cyan", "id"))
            .replace(`"data"`, fg("magenta", "data"))
            .replace(`"success"`, fg("green", "success")),
        );

        return result;
      } catch (err) {
        logger.Error(`Error while trying to send email: ${err}`);
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Não foi possível enviar o e-mail. Tente novamente.",
        });
      }
    },
  }),
};
