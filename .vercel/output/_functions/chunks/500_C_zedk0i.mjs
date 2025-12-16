import { d as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './astro/server_n4ezHyd2.mjs';
import { $ as $$Layout } from './Layout_C49sdIfV.mjs';

const $$Astro = createAstro("https://portfolio-fabio-main.vercel.app/");
const $$500 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$500;
  const { error } = Astro2.props;
  const description = `Page 500 | Internal server error, please try again later or return to the home page by 
  clicking the logo in the upper left corner or the "home" button in the middle of the screen!!`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "header": true, "footer": true, "title": "500 | F\xE1bio Ghizoni", "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-white text-3xl font-space-grotesk">
Internal server error: <span class="bg-clip-text text-transparent font-bold bg-linear-to-r from-red-500 to-red-800">${error instanceof Error ? error.message : error || "Unknown error"}</span> </h1> ` })}`;
}, "C:/Users/fabio/Documents/fabio.dev/src/pages/500.astro", void 0);

const $$file = "C:/Users/fabio/Documents/fabio.dev/src/pages/500.astro";
const $$url = "/500";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$500,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
