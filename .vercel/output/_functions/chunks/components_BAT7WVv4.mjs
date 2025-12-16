import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, f as renderSlot, a as renderTemplate, r as renderComponent } from './astro/server_n4ezHyd2.mjs';
import { $ as $$Layout, b as $$SwitchTheme, c as $$SwitchLang } from './Layout_C49sdIfV.mjs';
import { $ as $$HeroBadge, a as $$CircularLogo, b as $$AsciiArts, c as $$Technologies, d as $$SocialButton, e as $$ScrollToTop } from './Technologies_dEsOlntn.mjs';
import 'clsx';

const $$Astro$1 = createAstro("https://portfolio-fabio-main.vercel.app/");
const $$ListItems = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ListItems;
  const { role = "list", id = "ul-home", class: className = "hidden md:flex" } = Astro2.props;
  const baseClass = "justify-center items-center ml-auto text-xl font-bold text-white font-cascadia-code gap-8";
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute(role, "role")}${addAttribute(id, "id")}${addAttribute(`${baseClass} ${className}`, "class")}> ${renderSlot($$result, $$slots["default"])} </ul> <div${addAttribute(`flex md:hidden ${className}`, "class")}></div>`;
}, "C:/Users/fabio/Documents/fabio.dev/src/ui/ListItems.astro", void 0);

const $$Astro = createAstro("https://portfolio-fabio-main.vercel.app/");
const $$Components = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Components;
  const description = `Page Components | Page listing the components that were used on this website and in some 
  other projects.`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Components | F\xE1bio Ghizoni", "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-white text-3xl font-bold mb-2">Componentes do Site</h1> <h2 class="text-white text-xl font-bold mb-2">Página ainda em dev</h2> <p class="mb-6 text-sm text-slate-600 dark:text-slate-300">
Galeria dos componentes usados no site com exemplos e snippets de uso em <strong>Astro</strong>, <strong>Next (React)</strong> e <strong>HTML</strong>.
</p> <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"> <section class="p-4 rounded-lg border bg-white dark:bg-[--background]"> <h2 class="text-lg font-semibold mb-3">HeroBadge</h2> <div class="mb-4">${renderComponent($$result2, "HeroBadge", $$HeroBadge, {})}</div> <details class="text-sm"> <summary class="cursor-pointer font-medium">Uso / Snippets</summary> <div class="mt-3 space-y-3"> <div> <h3 class="font-semibold">Astro</h3> <pre class="bg-slate-900 text-slate-100 p-3 rounded"><code>---
import HeroBadge from '../ui/HeroBadge.astro';
---

&lt;HeroBadge class="" /&gt;</code></pre> </div> <div> <h3 class="font-semibold">Next (React)</h3> <pre class="bg-slate-900 text-slate-100 p-3 rounded"><code>import HeroBadge from 'path/to/components/HeroBadge';

export default function Page()&#123;
  return &lt;HeroBadge /&gt;
&#125;</code></pre> </div> </div> </details> </section> <section class="p-4 rounded-lg border bg-white dark:bg-[var(--background)]"> <h2 class="text-lg font-semibold mb-3">CircularLogo</h2> <div class="mb-4">${renderComponent($$result2, "CircularLogo", $$CircularLogo, {})}</div> <details class="text-sm"> <summary class="cursor-pointer font-medium">Uso / Snippets</summary> <div class="mt-3 space-y-3"> <pre class="bg-slate-900 text-slate-100 p-3 rounded"><code>---
      import CircularLogo from '../ui/CircularLogo.astro';
      ---

      &lt;CircularLogo /&gt;</code></pre> </div> </details> </section> <section class="p-4 rounded-lg border bg-white dark:bg-[--background]"> <h2 class="text-lg font-semibold mb-3">AsciiArts</h2> <div class="mb-4">${renderComponent($$result2, "AsciiArts", $$AsciiArts, {})}</div> <details class="text-sm"> <summary class="cursor-pointer font-medium">Uso / Snippets</summary> <div class="mt-3"> <pre class="bg-slate-900 text-slate-100 p-3 rounded"><code>---
      import AsciiArts from '../ui/AsciiArts.astro';
      ---

      &lt;AsciiArts /&gt;</code></pre> </div> </details> </section> <section class="p-4 rounded-lg border bg-white dark:bg-[--background]"> <h2 class="text-lg font-semibold mb-3">ListItems</h2> <div class="mb-4">${renderComponent($$result2, "ListItems", $$ListItems, {})}</div> <details class="text-sm"> <summary class="cursor-pointer font-medium">Uso / Snippets</summary> <div class="mt-3"> <pre class="bg-slate-900 text-slate-100 p-3 rounded"><code>---
      import ListItems from '../ui/ListItems.astro';
      ---

      &lt;ListItems /&gt;</code></pre> </div> </details> </section> <section class="p-4 rounded-lg border bg-white dark:bg-[--background]"> <h2 class="text-lg font-semibold mb-3">Technologies</h2> <div class="mb-4">${renderComponent($$result2, "Technologies", $$Technologies, {})}</div> <details class="text-sm"> <summary class="cursor-pointer font-medium">Uso / Snippets</summary> <div class="mt-3"> <pre class="bg-slate-900 text-slate-100 p-3 rounded"><code>---
      import Technologies from '../ui/Technologies.astro';
      ---

      &lt;Technologies /&gt;</code></pre> </div> </details> </section> <section class="p-4 rounded-lg border bg-white dark:bg-[--background]"> <h2 class="text-lg font-semibold mb-3">SwitchTheme / SwitchLang</h2> <div class="mb-4 flex items-center gap-3"> ${renderComponent($$result2, "SwitchTheme", $$SwitchTheme, {})}${renderComponent($$result2, "SwitchLang", $$SwitchLang, {})} </div> <details class="text-sm"> <summary class="cursor-pointer font-medium">Uso / Snippets</summary> <div class="mt-3 space-y-3"> <pre class="bg-slate-900 text-slate-100 p-3 rounded"><code>---
      import SwitchTheme from '../ui/SwitchTheme.astro';
      import SwitchLang from '../ui/SwitchLang.astro';
      ---

      &lt;SwitchTheme /&gt;
      &lt;SwitchLang /&gt;</code></pre> </div> </details> </section> <section class="p-4 rounded-lg border bg-white dark:bg-[--background]"> <h2 class="text-lg font-semibold mb-3">SocialButton & ScrollToTop</h2> <div class="mb-4 flex items-center gap-3"> ${renderComponent($$result2, "SocialButton", $$SocialButton, {})}${renderComponent($$result2, "ScrollToTop", $$ScrollToTop, {})} </div> <details class="text-sm"> <summary class="cursor-pointer font-medium">Uso / Snippets</summary> <div class="mt-3"> <pre class="bg-slate-900 text-slate-100 p-3 rounded"><code>---
      import SocialButton from '../ui/SocialButton.astro';
      import ScrollToTop from '../ui/ScrollToTop.astro';
      ---

      &lt;SocialButton /&gt;
      &lt;ScrollToTop /&gt;</code></pre> </div> </details> </section> </div> ` })}`;
}, "C:/Users/fabio/Documents/fabio.dev/src/pages/components.astro", void 0);

const $$file = "C:/Users/fabio/Documents/fabio.dev/src/pages/components.astro";
const $$url = "/components";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Components,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
