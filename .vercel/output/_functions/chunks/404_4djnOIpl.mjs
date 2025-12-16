import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './astro/server_n4ezHyd2.mjs';
import { $ as $$Layout, a as $$UnderlineButton } from './Layout_C49sdIfV.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  const description = `Page 404 | Route not found, return to the home page by clicking on the logo in the upper 
  left corner or the "home" button in the middle of the screen!!`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "header": true, "footer": true, "bodyClass": "bg-light", "title": "404 | F\xE1bio Ghizoni", "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl text-center text-white font-space-grotesk
      tracking-wide leading-tight">
Page not found | 404, <br>return to the home
${renderComponent($$result2, "UnderlineButton", $$UnderlineButton, { "href": "/", "variant": "primary", "class": "h-0.8 text-purple-blue hover:text-white after:bg-purple-blue/60 text-5xl transition-colors ease-in-out duration-300" }, { "default": ($$result3) => renderTemplate`page` })} </h1> ` })}`;
}, "C:/Users/fabio/Documents/fabio.dev/src/pages/404.astro", void 0);

const $$file = "C:/Users/fabio/Documents/fabio.dev/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
