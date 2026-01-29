import { z } from "astro/zod";
import { ActionError, defineAction } from "astro:actions";
import c from "clogs.ts";
import { foreground, strColor } from "clogs.ts/src/ansi";
import { Resend } from "resend";
import getHtml from "../emails/Welcome";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

const InputSchema = z.object({
  email: z
    .string()
    .trim()
    .max(255, "Email is too long")
    .email("Invalid email address"),

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

      c.log(
        `Name from: ${name}\nEmail from: ${email}\nMessage from: ${message}`,
      );

      if (!name || !email || !message) {
        c.error(`${strColor("BAD_REQUEST", foreground.red)}: Missing fields`);
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
          to: "dev6solucoes@gmail.com",
          subject: `Message from ${name}`,
          from: `Dev <delivered@resend.dev>`,
        });

        if (error) {
          c.error(`{\n${error.name}\n${error.message}\n}`);
          throw new ActionError({
            code: "BAD_REQUEST",
            message: `{\n${error.name}\n${error.message}\n}`,
          });
        }

        const result = { success: true, data };
        const json = JSON.stringify(result, null, 2);
        const msgLog = json
          .replace(`"id"`, strColor(`"id"`, foreground.cyan))
          .replace(`"data"`, strColor(`"data"`, foreground.magenta))
          .replace(`"success"`, strColor(`"success"`, foreground.green));
        c.log(msgLog);
        return result;
      } catch (err) {
        c.error(`Error while trying to send email: ${err}`);
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message: `Failed to send email: ${err}`,
        });
      }
    },
  }),
};
