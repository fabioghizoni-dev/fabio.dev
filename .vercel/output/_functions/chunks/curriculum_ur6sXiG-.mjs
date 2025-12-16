import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './astro/server_n4ezHyd2.mjs';
import { $ as $$Layout } from './Layout_C49sdIfV.mjs';

const $$Curriculum = createComponent(($$result, $$props, $$slots) => {
  const description = `Page Curriculum | Resume page containing all professional and academic information 
  of F\xE1bio Ghizoni`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "header": true, "footer": true, "title": "Curriculum | F\xE1bio Ghizoni", "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-white">Curriculum</h1> ` })}`;
}, "C:/Users/fabio/Documents/fabio.dev/src/pages/curriculum.astro", void 0);

const $$file = "C:/Users/fabio/Documents/fabio.dev/src/pages/curriculum.astro";
const $$url = "/curriculum";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Curriculum,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
