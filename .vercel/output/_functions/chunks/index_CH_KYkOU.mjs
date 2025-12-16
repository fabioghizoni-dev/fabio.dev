import { c as createComponent, r as renderComponent, e as renderScript, a as renderTemplate, m as maybeRenderHead } from './astro/server_n4ezHyd2.mjs';
import { $ as $$Layout } from './Layout_C49sdIfV.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const description = `QR Code Page | Page for generating custom QR Codes with parameters and attributes sent 
  via URL.`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "clientRouter": false, "title": "QR Code | F\xE1bio Ghizoni", "bodyClass": "flex-row justify-center items-center gap-10 overflow-hidden", "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="qr" class="scale-90"></div> <h2 class="flex flex-col justify-center items-center gap-1 font-cascadia-code
      text-2xl text-white">
Are you unsure how it works?
<a href="/qr/info" class="bg-linear-to-r from-purple-default to-purple-blue font-space-grotesk
        font-bold px-3 py-1 rounded">Click here</a> </h2> ` })} ${renderScript($$result, "C:/Users/fabio/Documents/fabio.dev/src/pages/qr/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/fabio/Documents/fabio.dev/src/pages/qr/index.astro", void 0);

const $$file = "C:/Users/fabio/Documents/fabio.dev/src/pages/qr/index.astro";
const $$url = "/qr";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
