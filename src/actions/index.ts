import getHtml from "@/emails/Welcome";
import p from "@constants/personal";
import { z } from "astro/zod";
import { ActionError, defineAction } from "astro:actions";
import { fg, defaultLogger as logger } from "clogs.ts";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

const InputSchema = z.object({
  email: z.email("Invalid email address").trim().max(255, "Email is too long"),

  name: z
    .string()
    .trim()
    .max(100, "Name is too long")
    .min(2, "Name must have at least 2 characters"),

  message: z
    .string()
    .trim()
    .max(2000, "Message is too long")
    .min(10, "Message must have at least 10 characters"),
});

export const server = {
  send: defineAction({
    accept: "form",
    input: InputSchema,
    handler: async (input) => {
      const { name, email, message } = input;

      logger.Log(
        `Name from: ${name}\nEmail from: ${email}\nMessage from: ${message}`,
      );

      if (!name || !email || !message) {
        logger.Error(
          `${fg("red", "BAD_REQUEST")}: Missing fields`,
        );
        throw new ActionError({
          code: "BAD_REQUEST",
          message: "Missing fields",
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
