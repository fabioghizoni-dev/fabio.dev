import { d as createAstro, c as createComponent, m as maybeRenderHead, a as renderTemplate, r as renderComponent } from './astro/server_n4ezHyd2.mjs';
import 'clsx';
import { $ as $$Layout } from './Layout_C49sdIfV.mjs';

const $$Astro = createAstro("https://portfolio-fabio-main.vercel.app/");
const $$Welcome = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Welcome;
  const {
    name = "F\xE1bio Ghizoni",
    email = "teste@gmail.com",
    message = "Ol\xE1, eu sou F\xE1bio, tudo bem com vc?"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section style="width: 100%; padding: 2rem; box-sizing: border-box;"> <div style="margin: 0 auto; max-width: 36rem; padding: 2rem; border-radius: 0.5rem; background-color: oklch(99% 0 0); 
    box-shadow: 0 0.25rem 0.5rem oklch(0% 0 0 / 0.1);"> <h1 style="font-size: 1.25rem; margin-bottom: 1rem; color: oklch(25% 0 0);">
📩 Novo contato pelo site
</h1> <p style="font-size: 1rem; line-height: 1.5; color: oklch(30% 0 0); margin: 0.5rem 0;"> <span style="font-weight: bold;">Nome:</span> ${name} </p> <p style="font-size: 1rem; line-height: 1.5; color: oklch(30% 0 0); margin: 0.5rem 0;"> <span style="font-weight: bold;">Email:</span> ${email} </p> <div style="margin-top: 1rem; padding: 1rem; background-color: oklch(97% 0 0); border-radius: 0.25rem; white-space: pre-line;"> ${message} </div> </div> </section>`;
}, "C:/Users/fabio/Documents/fabio.dev/src/emails/Welcome.astro", void 0);

const $$Email = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "bodyClass": "justify-center" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "WelcomeEmail", $$Welcome, {})} ` })}`;
}, "C:/Users/fabio/Documents/fabio.dev/src/pages/email.astro", void 0);

const $$file = "C:/Users/fabio/Documents/fabio.dev/src/pages/email.astro";
const $$url = "/email";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Email,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
