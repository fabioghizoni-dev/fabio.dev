import { c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate } from './astro/server_n4ezHyd2.mjs';
import { e as $$Icon, $ as $$Layout } from './Layout_C49sdIfV.mjs';
import 'clsx';

const $$AboutQrCode = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="bg-gray-900 border border-gray-700 rounded-lg p-2 hover:border-purple-blue/80 transition-colors ease-in-out duration-200"> <h2 class="flex items-center font-space-grotesk font-bold italic text-xl"> ${renderComponent($$result, "Icon", $$Icon, { "name": "fluent-emoji-flat:books", "class": "mr-2" })} Sobre
</h2> <p class="text-gray-300 text-lg mt-1">
Esta aplicação utiliza a biblioteca
<a href="https://github.com/kozakdenys/qr-code-styling" class="text-blue-400 underline" target="_blank">
qr-code-styling
</a>
para gerar QR Codes com alta personalização.
</p> </div>`;
}, "C:/Users/fabio/Documents/fabio.dev/src/ui/AboutQrCode.astro", void 0);

const $$ExampleQrCode = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="bg-gray-900 border border-gray-700 rounded-lg p-2 hover:border-purple-blue/80 transition-colors ease-in-out duration-200"> <h2 class="flex items-center font-space-grotesk font-bold italic text-xl"> ${renderComponent($$result, "Icon", $$Icon, { "name": "line-md:link", "class": "text-slate-400 mr-2" })} Exemplo de uso
</h2> <div class="bg-gray-800 text-green-300 px-3 py-2 mt-1 rounded">
http://localhost:4321/qr?data=https://openai.com&size=300&shape=rounded&download=png&name=meu-qr
</div> </div>`;
}, "C:/Users/fabio/Documents/fabio.dev/src/ui/ExampleQrCode.astro", void 0);

const $$HowWorksQrCode = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="bg-gray-900 border border-gray-700 rounded-lg p-2 hover:border-purple-blue/80 transition-colors ease-in-out duration-200"> <h2 class="flex items-center font-space-grotesk font-bold italic text-xl"> ${renderComponent($$result, "Icon", $$Icon, { "name": "typcn:info", "class": "text-yellow-400 mr-2" })} Como funciona
</h2> <p class="text-gray-300 text-lg mt-1">
Gere QR Codes personalizados com base em parâmetros fornecidos via URL. Você
    pode definir dados, cores, formas e até baixar o resultado automaticamente.
</p> </div>`;
}, "C:/Users/fabio/Documents/fabio.dev/src/ui/HowWorksQrCode.astro", void 0);

const $$QrInfoTable = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<table class="min-w-full max-w-4xl text-sm text-left text-gray-300"> <thead class="bg-gray-800 text-xs uppercase text-gray-400"> <tr> <th class="px-4 py-2">Parâmetro</th> <th class="px-4 py-2">Tipo</th> <th class="px-4 py-2">Descrição / Valores</th> </tr> </thead> <tbody> <tr><td class="px-4 py-1">data</td><td>string</td><td>Texto ou URL codificada</td></tr> <tr><td class="px-4 py-1">size</td><td>number</td><td>Largura e altura iguais</td></tr> <tr><td class="px-4 py-1">w</td><td>number</td><td>Largura personalizada</td></tr> <tr><td class="px-4 py-1">h</td><td>number</td><td>Altura personalizada</td></tr> <tr><td class="px-4 py-1">margin</td><td>number</td><td>Margem externa (padrão: 10)</td></tr> <tr><td class="px-4 py-1">shape</td><td>enum</td><td><code>square</code>, <code>rounded</code></td></tr> <tr><td class="px-4 py-1">type</td><td>enum</td><td><code>svg</code> ou <code>canvas</code></td></tr> <tr><td class="px-4 py-1">dotsColor</td><td>string</td><td>Cor dos pontos (ex: <code>#000</code>)</td></tr> <tr><td class="px-4 py-1">dotsType</td><td>enum</td><td><code>rounded</code>, <code>square</code></td></tr> <tr><td class="px-4 py-1">bgColor</td><td>string</td><td>Cor de fundo do QR</td></tr> <tr><td class="px-4 py-1">bgRound</td><td>number</td><td>Arredondamento do fundo (0–1)</td></tr> <tr><td class="px-4 py-1">img</td><td>string</td><td>URL da imagem central</td></tr> <tr><td class="px-4 py-1">imgSize</td><td>number</td><td>Tamanho relativo da imagem (0–1)</td></tr> <tr><td class="px-4 py-1">imgMargin</td><td>number</td><td>Margem ao redor da imagem</td></tr> <tr><td class="px-4 py-2">download</td><td>enum</td><td><code>svg</code>, <code>png</code>, <code>jpeg</code>, <code>webp</code></td></tr> <tr><td class="px-4 py-2">name</td><td>string</td><td>Nome do arquivo baixado</td></tr> </tbody> </table>`;
}, "C:/Users/fabio/Documents/fabio.dev/src/ui/QrInfoTable.astro", void 0);

const $$ResultQrCode = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="bg-gray-900 border border-gray-700 rounded-lg p-2 hover:border-purple-blue/80 transition-colors ease-in-out duration-200"> <h2 class="flex items-center font-space-grotesk font-bold italic text-xl"> ${renderComponent($$result, "Icon", $$Icon, { "name": "fluent-emoji-flat:inbox-tray", "class": "mr-2" })} Resultado
</h2> <p class="text-gray-300 text-lg mt-1">
O QR Code será gerado com os parâmetros definidos e o arquivo <code class="bg-gray-800 text-white px-1 rounded">meu-qr.png</code>
será baixado automaticamente.
</p> </div>`;
}, "C:/Users/fabio/Documents/fabio.dev/src/ui/ResultQrCode.astro", void 0);

const $$Info = createComponent(($$result, $$props, $$slots) => {
  const description = `Page QR Info | Information page about the QR Code generator, including usage instructions and 
  available parameters.`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "QR Info | F\xE1bio Ghizoni", "bodyClass": "flex-row justify-center items-center", "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="flex flex-col text-white gap-4"> <h1 class="text-3xl font-bold">Gerador de QR Code</h1> ${renderComponent($$result2, "HowWorksQrCode", $$HowWorksQrCode, {})} ${renderComponent($$result2, "ExampleQrCode", $$ExampleQrCode, {})} ${renderComponent($$result2, "ResultQrCode", $$ResultQrCode, {})} ${renderComponent($$result2, "AboutQrCode", $$AboutQrCode, {})} </section> <section class="bg-gray-900 border border-gray-700 rounded-lg p-5 overflow-x-auto
      hover:border-purple-blue/80 transition-colors ease-in-out duration-200"> <h2 class="flex text-white text-xl font-semibold justify-center items-center gap-2 mb-4"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "icon-park-outline:setting-config" })} Parâmetros disponíveis
</h2> ${renderComponent($$result2, "QrInfoTable", $$QrInfoTable, {})} </section> ` })}`;
}, "C:/Users/fabio/Documents/fabio.dev/src/pages/qr/info.astro", void 0);

const $$file = "C:/Users/fabio/Documents/fabio.dev/src/pages/qr/info.astro";
const $$url = "/qr/info";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Info,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
