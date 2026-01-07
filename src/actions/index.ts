import { z } from "astro/zod";
import { ActionError, defineAction } from "astro:actions";
import c, { foreground, strColor } from "clogs.ts";
import { Resend } from "resend";
import getHtml from "../emails/Welcome";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const server = {
  send: defineAction({
    accept: "form",
    input: z.object({
      name: z.string(),
      message: z.string(),
      email: z.string().email(),
    }),
    handler: async (input) => {
      const { name, email, message } = input;

      c.log(`Name from: ${name}`);
      c.log(`Email from: ${email}`);
      c.log(`Message from: ${message}`);

      if (!name || !email || !message) {
        c.error(`${strColor("BAD_REQUEST", foreground.red)}: Missing fields`);
        throw new ActionError({ code: "BAD_REQUEST", message: "Missing fields" })
      };

      const html = getHtml(name, email, message);

      try {
        const { data, error } = await resend.emails.send({
          html: html,
          replyTo: email as string,
          to: "dev6solucoes@gmail.com",
          subject: `Message from ${name}`,
          from: `Dev <delivered@resend.dev>`,
        });

        if (error) {
          c.error(`{\n${error.name}\n${error.message}\n}`);
          throw new ActionError({ code: "BAD_REQUEST", message: `{\n${error.name}\n${error.message}\n}` })
        };

        const result = { success: true, data }
        const json = JSON.stringify(result, null, 2);
        const msgLog = json
          .replace(`"id"`, strColor(`"id"`, foreground.cyan))
          .replace(`"data"`, strColor(`"data"`, foreground.magenta))
          .replace(`"success"`, strColor(`"success"`, foreground.green));
        c.log(msgLog);
        return result;

      } catch (err) { c.error(`Error while trying to send email: ${err}`) };
    },
  }),
};