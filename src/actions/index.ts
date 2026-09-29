import getHtml from "@/emails/Welcome";
import { dict } from "@/i18n";
import p from "@constants/personal";
import { z } from "astro/zod";
import { ActionError, defineAction } from "astro:actions";
import { fg, defaultLogger as logger } from "clogs.ts";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

const InputSchema = z.object({
  email: z.string().trim(),
  name: z.string().trim(),
  message: z.string().trim(),
  language: z.string().optional(),
});

export const server = {
  send: defineAction({
    accept: "form",
    input: InputSchema,
    handler: async (input) => {
      const { name, email, message, language = "pt-BR" } = input;
      const messages = dict[language]?.actions ?? dict["pt-BR"].actions;

      logger.Log(
        `Name from: ${name}\nEmail from: ${email}\nMessage from: ${message}`,
      );

      if (!name || name.length < 2 || name.length > 100) {
        logger.Error(
          `${fg("red", "BAD_REQUEST")}: Missing fields`,
        );
        throw new ActionError({
          code: "BAD_REQUEST",
          message: name.length > 100 ? messages.name.max : messages.name.min,
        });
      }

      if (email.length > 255 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        throw new ActionError({ code: "BAD_REQUEST", message: messages.email.email });
      }

      if (message.length < 10 || message.length > 2000) {
        throw new ActionError({
          code: "BAD_REQUEST",
          message: message.length > 2000 ? messages.message.max : messages.message.min,
        });
      }

      const html = getHtml(name, email, message);

      try {
        const { data, error } = await resend.emails.send({
          html: html,
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
        const json = JSON.stringify(result, null, 2);
        const msgLog = json
          .replace(`"id"`, fg("cyan", "id"))
          .replace(`"data"`, fg("magenta", "data"))
          .replace(`"success"`, fg("green", "success"));
        logger.Log(msgLog);
        return result;
      } catch (err) {
        logger.Error(`Error while trying to send email: ${err}`);
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message: `Failed to send email: ${err}`,
        });
      }
    },
  }),
};
