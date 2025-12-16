import './chunks/virtual_1Qf9e1Sc.mjs';
import { Resend } from 'resend';
import { d as defineAction } from './chunks/server_zFoTX984.mjs';
import { A as ActionError } from './chunks/astro-designed-error-pages_PWXzJJh2.mjs';

const esc = (code) => `\x1B[${code}m`;
const isBrowser = typeof window !== "undefined" && typeof document !== "undefined";
const reset = esc(0);
const foreground = {
  red: esc(31),
  cyan: esc(36),
  magenta: esc(35)
};
const brightForeground = {
  red: esc(91),
  cyan: esc(96),
  green: esc(92),
  yellow: esc(93),
  magenta: esc(95)
};
const strColor = (str, ...codes) => isBrowser ? str : `${(codes.length ? codes : [foreground.cyan]).join("")}${str}${reset}`;

const level = {
  log: strColor("LOG:", brightForeground.green),
  info: strColor("INFO:", brightForeground.cyan),
  error: strColor("ERROR:", brightForeground.red),
  warn: strColor("WARN:", brightForeground.yellow),
  debug: strColor("DEBUG:", brightForeground.magenta)
};
const formatTimestamp = () => {
  const now = /* @__PURE__ */ new Date();
  const time = now.toLocaleTimeString("pt-BR");
  const date = now.toLocaleDateString("pt-BR");
  return `[${strColor(time)} | ${strColor(date, foreground.magenta)}]`;
};
const log = (...msg) => console.log(`${formatTimestamp()} ${level.log} ${msg.map(String).join(" ")}`);
const info = (...msg) => console.info(`${formatTimestamp()} ${level.info} ${msg.map(String).join(" ")}`);
const warn = (...msg) => console.warn(`${formatTimestamp()} ${level.warn} ${msg.map(String).join(" ")}`);
const debug = (...msg) => console.debug(`${formatTimestamp()} ${level.debug} ${msg.map(String).join(" ")}`);
const error = (...msg) => console.error(`${formatTimestamp()} ${level.error} ${msg.map(String).join(" ")}`);
const c = {
  log,
  info,
  warn,
  debug,
  error
};

function getHtml(name, email, message) {
  return `
  <section style="width: 100%; padding: 2rem; box-sizing: border-box;">
  <div
    style="margin: 0 auto; max-width: 36rem; padding: 2rem; border-radius: 0.5rem; background-color: oklch(99% 0 0); 
    box-shadow: 0 0.25rem 0.5rem oklch(0% 0 0 / 0.1);"
  >
    <h1 style="font-size: 1.25rem; margin-bottom: 1rem; color: oklch(25% 0 0);">
      📩 Novo contato pelo site
    </h1>
    <p
      style="font-size: 1rem; line-height: 1.5; color: oklch(30% 0 0); margin: 0.5rem 0;"
    >
      <span style="font-weight: bold;">Nome:</span>
      ${name}
    </p>
    <p
      style="font-size: 1rem; line-height: 1.5; color: oklch(30% 0 0); margin: 0.5rem 0;"
    >
      <span style="font-weight: bold;">Email:</span>
      ${email}
    </p>
    <div
      style="margin-top: 1rem; padding: 1rem; background-color: oklch(97% 0 0); border-radius: 0.25rem; white-space: pre-line;"
    >
      ${message}
    </div>
  </div>
</section>
  `;
}

const resend = new Resend("re_HW4KLXu1_4kFE4d1UiPNcBA4sS4K4bM6a");
const server = {
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
        html,
        replyTo: email,
        to: "dev6solucoes@gmail.com",
        subject: `Message from ${name}`,
        from: `Dev <delivered@resend.dev>`
      });
      if (error) {
        c.error(`{
${error.name}
${error.message}
}`);
        throw new ActionError({ code: "BAD_REQUEST", message: `{
${error.name}
${error.message}
}` });
      }
      c.log(`data: ${JSON.stringify(data, null, 2)}`);
      return data;
    }
  })
};

export { server };
