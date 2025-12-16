import { ActionError, defineAction } from "astro:actions";
import c, { foreground, strColor } from "clogs.ts";
import { Resend } from "resend";
import getHtml from "../emails/Welcome";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const server = {
  send: defineAction({
    accept: "form",
    handler: async (form) => {
      const name = form.get("name");
      const email = form.get("email");
      const message = form.get("message");

      c.log(`Name from: ${name}`);
      c.log(`Email from: ${email}`);
      c.log(`Message from: ${message}`);

      if (!name || !email || !message) throw new ActionError({ code: "BAD_REQUEST", message: "Missing fields" });
      c.error(strColor("BAD_REQUEST", foreground.red));

      const html = getHtml(name, email, message);

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

      c.log(`data: ${JSON.stringify(data, null, 2)}`);

      return data;
    },
  }),
};