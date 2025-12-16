import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_n4ezHyd2.mjs';
import { $ as $$Layout } from '../chunks/Layout_C49sdIfV.mjs';
export { renderers } from '../renderers.mjs';

const $$Routes = createComponent(($$result, $$props, $$slots) => {
  const files = /* #__PURE__ */ Object.assign({"/src/pages/404.astro": () => import('../chunks/404_4djnOIpl.mjs').then(n => n._),"/src/pages/500.astro": () => import('../chunks/500_C_zedk0i.mjs').then(n => n._),"/src/pages/components.astro": () => import('../chunks/components_BAT7WVv4.mjs').then(n => n._),"/src/pages/curriculum.astro": () => import('../chunks/curriculum_ur6sXiG-.mjs').then(n => n._),"/src/pages/email.astro": () => import('../chunks/email_DzV9Vc-X.mjs').then(n => n._),"/src/pages/gradients.astro": () => import('../chunks/gradients_VBI9xD88.mjs').then(n => n._),"/src/pages/index.astro": () => import('../chunks/index_1gsNeP4Y.mjs').then(n => n._),"/src/pages/qr/index.astro": () => import('../chunks/index_CH_KYkOU.mjs').then(n => n._),"/src/pages/qr/info.astro": () => import('../chunks/info_DqwE7qtr.mjs').then(n => n._)

});
  const routes = Object.keys(files).map((p) => {
    let path = p.replace("/src/pages", "").replace(/index\.(astro|md|mdx|jsx|tsx)$/, "").replace(/\.(astro|md|mdx|jsx|tsx)$/, "") || "/";
    if (path !== "/" && path.endsWith("/")) path = path.slice(0, -1);
    return path;
  }).filter((r) => !["/404", "/500"].includes(r)).sort((a, b) => a.length - b.length || a.localeCompare(b));
  const displayRoutes = routes.map((path) => ({
    path,
    name: path === "/" ? "Home" : path.replace(/^\//, "").replace(/(^\w)/, (c) => c.toUpperCase())
  }));
  const description = `Page Routes | Page listing all routes available on the website for easy navigation.`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Routes | F\xE1bio Ghizoni", "bodyClass": "justify-center items-center", "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<ul translate="no" class="text-white"> ${displayRoutes.map((r) => renderTemplate`<li${addAttribute(r.path, "title")}> <a${addAttribute(r.path, "href")}>${r.name}</a> </li>`)} </ul> ` })}`;
}, "C:/Users/fabio/Documents/fabio.dev/src/pages/routes.astro", void 0);

const $$file = "C:/Users/fabio/Documents/fabio.dev/src/pages/routes.astro";
const $$url = "/routes";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Routes,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
