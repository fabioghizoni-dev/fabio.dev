import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_9MyQP83A.mjs';
import { manifest } from './manifest_DgXm9Hnw.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/_actions/_---path_.astro.mjs');
const _page2 = () => import('./pages/404.astro.mjs');
const _page3 = () => import('./pages/500.astro.mjs');
const _page4 = () => import('./pages/components.astro.mjs');
const _page5 = () => import('./pages/curriculum.astro.mjs');
const _page6 = () => import('./pages/email.astro.mjs');
const _page7 = () => import('./pages/gradients.astro.mjs');
const _page8 = () => import('./pages/qr/info.astro.mjs');
const _page9 = () => import('./pages/qr.astro.mjs');
const _page10 = () => import('./pages/routes.astro.mjs');
const _page11 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.16.5_@types+node@25_a9666d528e8cbded71f288d5eacadf39/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/.pnpm/astro@5.16.5_@types+node@25_a9666d528e8cbded71f288d5eacadf39/node_modules/astro/dist/actions/runtime/route.js", _page1],
    ["src/pages/404.astro", _page2],
    ["src/pages/500.astro", _page3],
    ["src/pages/components.astro", _page4],
    ["src/pages/curriculum.astro", _page5],
    ["src/pages/email.astro", _page6],
    ["src/pages/gradients.astro", _page7],
    ["src/pages/qr/info.astro", _page8],
    ["src/pages/qr/index.astro", _page9],
    ["src/pages/routes.astro", _page10],
    ["src/pages/index.astro", _page11]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "92060c1d-dc06-46dc-a353-9071e806d86a",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
