import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate, r as renderComponent, e as renderScript } from './astro/server_n4ezHyd2.mjs';
import { d as cn, $ as $$Layout } from './Layout_C49sdIfV.mjs';
import 'clsx';
/* empty css                             */

const $$Astro = createAstro("https://portfolio-fabio-main.vercel.app/");
const $$NoiseBg = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$NoiseBg;
  let {
    seed = "1",
    numOctaves = "1",
    baseFrequency = "0.7"
  } = Astro2.props;
  const {
    random,
    id = "preview",
    class: className,
    filterId = "noise",
    type = "fractalNoise",
    stitchTiles = "stitch",
    ariaLabel = "Filter Noise Gradient",
    style = "mix-blend-mode: soft-light;"
  } = Astro2.props;
  if (random) {
    seed = Math.floor(Math.random() * 9999).toString();
    baseFrequency = (Math.random() * 1.4 + 0.1).toFixed(3);
    numOctaves = Math.floor(Math.random() * 4 + 1).toString();
  }
  const baseClass = `absolute inset-0 opacity-100 bg-gradient-to-br from-red-400 to-purple-blue 
  dark:from-gray-500 dark:to-gray-default -z-1`;
  const finalClass = cn(baseClass, className);
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(id, "id")}${addAttribute(finalClass, "class")}> <svg width="100%" height="100%"> <filter${addAttribute(filterId, "id")}${addAttribute(ariaLabel, "aria-label")}> <feTurbulence${addAttribute(seed, "seed")}${addAttribute(numOctaves, "numOctaves")}${addAttribute(type, "type")}${addAttribute(stitchTiles, "stitchTiles")}${addAttribute(baseFrequency, "baseFrequency")}></feTurbulence> </filter> <rect width="100%" height="100%"${addAttribute(`url(#${filterId})`, "filter")}${addAttribute(style, "style")}></rect> </svg> </div>`;
}, "C:/Users/fabio/Documents/fabio.dev/src/ui/NoiseBg.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Gradients = createComponent(($$result, $$props, $$slots) => {
  const description = `Page Gradients | Page for generating custom gradients with various colors and even a 
  noise effect.`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "header": true, "footer": true, "title": "Gradients | F\xE1bio Ghizoni", "description": description, "data-astro-cid-u73ucvs7": true }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(["  ", '<div class="max-w-4xl mx-auto p-6 text-white" data-astro-cid-u73ucvs7> <h1 class="text-3xl font-bold mb-6 text-center" data-astro-cid-u73ucvs7>\nCriador de Gradientes Avan\xE7ado \u{1F308}\n</h1> <form id="gradientForm" class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6" data-astro-cid-u73ucvs7> <!-- Dire\xE7\xE3o --> <div class="md:col-span-2" data-astro-cid-u73ucvs7> <label for="direction" class="block mb-1 text-sm font-medium" data-astro-cid-u73ucvs7>Dire\xE7\xE3o</label> <select id="direction" name="direction" class="w-full rounded border border-white bg-black p-2 text-white focus:outline-2 focus:outline-purple-400" data-astro-cid-u73ucvs7> <option value="r" data-astro-cid-u73ucvs7>Para a direita \u2B95</option> <option value="l" data-astro-cid-u73ucvs7>Para a esquerda \u2B05</option> <option value="t" data-astro-cid-u73ucvs7>Para cima \u2B06</option> <option value="b" data-astro-cid-u73ucvs7>Para baixo \u2B07</option> <option value="tl" data-astro-cid-u73ucvs7>Diagonal \u2B09</option> <option value="tr" data-astro-cid-u73ucvs7>Diagonal \u2B08</option> <option value="bl" data-astro-cid-u73ucvs7>Diagonal \u2B0B</option> <option value="br" data-astro-cid-u73ucvs7>Diagonal \u2B0A</option> </select> </div> <!-- Cores do Gradiente --> <div class="md:col-span-2" data-astro-cid-u73ucvs7> <label class="block mb-1 text-sm font-medium" data-astro-cid-u73ucvs7>Cores do Gradiente</label> <div id="colorsContainer" class="space-y-2" data-astro-cid-u73ucvs7> <div class="color-pair" data-astro-cid-u73ucvs7> <input type="color" class="color-picker h-10 w-10" value="#ff0000" data-astro-cid-u73ucvs7> <input type="text" name="color" value="oklch(62% 0.2 29)" class="flex-1 p-2 rounded bg-black border border-white text-white" placeholder="oklch(60% 0.3 29)" data-astro-cid-u73ucvs7> </div> <div class="color-pair" data-astro-cid-u73ucvs7> <input type="color" class="color-picker h-10 w-10" value="#6b21a8" data-astro-cid-u73ucvs7> <input type="text" name="color" value="#6b21a8" class="flex-1 p-2 rounded bg-black border border-white text-white" placeholder="#6b21a8" data-astro-cid-u73ucvs7> </div> </div> <button type="button" id="addColor" class="mt-2 px-4 py-2 bg-purple-600 rounded hover:bg-purple-700 focus:outline-2 focus:outline-white" data-astro-cid-u73ucvs7>\n\u2795 Adicionar Cor\n</button> </div> <!-- Noise Controls --> <div class="md:col-span-2 grid grid-cols-3 gap-2" data-astro-cid-u73ucvs7> <div data-astro-cid-u73ucvs7> <label for="baseFreq" class="block text-sm" data-astro-cid-u73ucvs7>baseFrequency</label> <input type="number" step="0.01" min="0" max="1" id="baseFreq" value="0.6" class="w-full p-2 rounded text-white bg-black border border-white" data-astro-cid-u73ucvs7> </div> <div data-astro-cid-u73ucvs7> <label for="octaves" class="block text-sm" data-astro-cid-u73ucvs7>numOctaves</label> <input type="number" min="1" max="10" id="octaves" value="3" class="w-full p-2 rounded text-white bg-black border border-white" data-astro-cid-u73ucvs7> </div> <div data-astro-cid-u73ucvs7> <label for="seed" class="block text-sm" data-astro-cid-u73ucvs7>seed</label> <input type="number" min="0" max="1000" id="seed" value="2" class="w-full p-2 rounded text-white bg-black border border-white" data-astro-cid-u73ucvs7> </div> </div> <!-- Noise Checkbox --> <div class="md:col-span-2" data-astro-cid-u73ucvs7> <label class="inline-flex items-center gap-2 mt-2" data-astro-cid-u73ucvs7> <input type="checkbox" id="enableNoise" class="h-5 w-5" data-astro-cid-u73ucvs7>\nAdicionar efeito de ru\xEDdo\n</label> </div> <!-- Bot\xF5es --> <div class="md:col-span-2 flex gap-4 mt-4" data-astro-cid-u73ucvs7> <button type="button" id="downloadGradient" class="bg-green-600 px-4 py-2 rounded hover:bg-green-700 focus:outline-2 focus:outline-white" data-astro-cid-u73ucvs7>\n\u2B07\uFE0F Baixar Gradiente\n</button> <button type="button" id="downloadSVG" class="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 focus:outline-2 focus:outline-white" data-astro-cid-u73ucvs7>\n\u2B07\uFE0F Baixar SVG Noise\n</button> </div> </form> <!-- Preview --> ', ` <div id="preview" class="gradient-box" data-astro-cid-u73ucvs7> <div id="gradient" class="custom-gradient" data-astro-cid-u73ucvs7></div> <div class="noise-overlay hidden" id="noiseLayer" data-astro-cid-u73ucvs7> <svg id="noiseSVG" data-astro-cid-u73ucvs7> <filter id="noise" data-astro-cid-u73ucvs7> <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" seed="2" stitchTiles="stitch" data-astro-cid-u73ucvs7></feTurbulence> </filter> <rect width="100%" height="100%" filter="url(#noise)" data-astro-cid-u73ucvs7></rect> </svg> </div> </div> </div> <script>
    const form = document.getElementById("gradientForm");
    const gradient = document.getElementById("gradient");
    const noiseLayer = document.getElementById("noiseLayer");
    const noiseSVG = document.getElementById("noiseSVG");
    const addColorBtn = document.getElementById("addColor");
    const colorsContainer = document.getElementById("colorsContainer");

    const downloadGradientBtn = document.getElementById("downloadGradient");
    const downloadSVGBtn = document.getElementById("downloadSVG");

    // Atualiza gradiente
    function updateGradient() {
      const direction = form.direction.value;
      const baseFreq = form.baseFreq.value;
      const numOctaves = form.octaves.value;
      const seed = form.seed.value;
      const noiseEnabled = form.enableNoise.checked;

      const dirMap = {
        r: "to right",
        l: "to left",
        t: "to top",
        b: "to bottom",
        tl: "to top left",
        tr: "to top right",
        bl: "to bottom left",
        br: "to bottom right",
      };

      const colorPairs = form.querySelectorAll(".color-pair");
      const colors = Array.from(colorPairs).map((pair) => {
        return pair.querySelector('input[name="color"]').value;
      });

      gradient.style.backgroundImage = \`linear-gradient(\${dirMap[direction]}, \${colors.join(", ")})\`;

      const feTurbulence = noiseSVG.querySelector("feTurbulence");
      feTurbulence.setAttribute("baseFrequency", baseFreq);
      feTurbulence.setAttribute("numOctaves", numOctaves);
      feTurbulence.setAttribute("seed", seed);

      noiseLayer.classList.toggle("hidden", !noiseEnabled);
    }

    // Adicionar novo par de cor
    addColorBtn.addEventListener("click", () => {
      const wrapper = document.createElement("div");
      wrapper.className = "color-pair";

      const colorInput = document.createElement("input");
      colorInput.type = "color";
      colorInput.className = "color-picker h-10 w-10";

      const textInput = document.createElement("input");
      textInput.type = "text";
      textInput.name = "color";
      textInput.placeholder = "oklch(60% 0.3 320)";
      textInput.className =
        "flex-1 p-2 rounded bg-black border border-white text-white";

      // Vincular cor \u2194 texto
      colorInput.addEventListener(
        "input",
        () => (textInput.value = colorInput.value),
      );
      textInput.addEventListener("input", () => {
        if (/^#([0-9A-F]{3}){1,2}$/i.test(textInput.value.trim())) {
          colorInput.value = textInput.value;
        }
      });

      wrapper.appendChild(colorInput);
      wrapper.appendChild(textInput);
      colorsContainer.appendChild(wrapper);
    });

    // Sincronizar os pares j\xE1 existentes
    document.querySelectorAll(".color-pair").forEach((pair) => {
      const colorInput = pair.querySelector("input[type='color']");
      const textInput = pair.querySelector("input[type='text']");

      colorInput.addEventListener(
        "input",
        () => (textInput.value = colorInput.value),
      );
      textInput.addEventListener("input", () => {
        if (/^#([0-9A-F]{3}){1,2}$/i.test(textInput.value.trim())) {
          colorInput.value = textInput.value;
        }
      });
    });

    // Baixar gradiente
    downloadGradientBtn.addEventListener("click", () => {
      html2canvas(document.getElementById("preview")).then((canvas) => {
        const link = document.createElement("a");
        link.download = "gradient.png";
        link.href = canvas.toDataURL();
        link.click();
      });
    });

    // Baixar SVG
    downloadSVGBtn.addEventListener("click", () => {
      const svgBlob = new Blob([noiseSVG.outerHTML], {
        type: "image/svg+xml;charset=utf-8",
      });
      const url = URL.createObjectURL(svgBlob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "noise.svg";
      link.click();
    });

    form.addEventListener("input", updateGradient);
    window.addEventListener("DOMContentLoaded", updateGradient);
  <\/script>  `, " "], ["  ", '<div class="max-w-4xl mx-auto p-6 text-white" data-astro-cid-u73ucvs7> <h1 class="text-3xl font-bold mb-6 text-center" data-astro-cid-u73ucvs7>\nCriador de Gradientes Avan\xE7ado \u{1F308}\n</h1> <form id="gradientForm" class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6" data-astro-cid-u73ucvs7> <!-- Dire\xE7\xE3o --> <div class="md:col-span-2" data-astro-cid-u73ucvs7> <label for="direction" class="block mb-1 text-sm font-medium" data-astro-cid-u73ucvs7>Dire\xE7\xE3o</label> <select id="direction" name="direction" class="w-full rounded border border-white bg-black p-2 text-white focus:outline-2 focus:outline-purple-400" data-astro-cid-u73ucvs7> <option value="r" data-astro-cid-u73ucvs7>Para a direita \u2B95</option> <option value="l" data-astro-cid-u73ucvs7>Para a esquerda \u2B05</option> <option value="t" data-astro-cid-u73ucvs7>Para cima \u2B06</option> <option value="b" data-astro-cid-u73ucvs7>Para baixo \u2B07</option> <option value="tl" data-astro-cid-u73ucvs7>Diagonal \u2B09</option> <option value="tr" data-astro-cid-u73ucvs7>Diagonal \u2B08</option> <option value="bl" data-astro-cid-u73ucvs7>Diagonal \u2B0B</option> <option value="br" data-astro-cid-u73ucvs7>Diagonal \u2B0A</option> </select> </div> <!-- Cores do Gradiente --> <div class="md:col-span-2" data-astro-cid-u73ucvs7> <label class="block mb-1 text-sm font-medium" data-astro-cid-u73ucvs7>Cores do Gradiente</label> <div id="colorsContainer" class="space-y-2" data-astro-cid-u73ucvs7> <div class="color-pair" data-astro-cid-u73ucvs7> <input type="color" class="color-picker h-10 w-10" value="#ff0000" data-astro-cid-u73ucvs7> <input type="text" name="color" value="oklch(62% 0.2 29)" class="flex-1 p-2 rounded bg-black border border-white text-white" placeholder="oklch(60% 0.3 29)" data-astro-cid-u73ucvs7> </div> <div class="color-pair" data-astro-cid-u73ucvs7> <input type="color" class="color-picker h-10 w-10" value="#6b21a8" data-astro-cid-u73ucvs7> <input type="text" name="color" value="#6b21a8" class="flex-1 p-2 rounded bg-black border border-white text-white" placeholder="#6b21a8" data-astro-cid-u73ucvs7> </div> </div> <button type="button" id="addColor" class="mt-2 px-4 py-2 bg-purple-600 rounded hover:bg-purple-700 focus:outline-2 focus:outline-white" data-astro-cid-u73ucvs7>\n\u2795 Adicionar Cor\n</button> </div> <!-- Noise Controls --> <div class="md:col-span-2 grid grid-cols-3 gap-2" data-astro-cid-u73ucvs7> <div data-astro-cid-u73ucvs7> <label for="baseFreq" class="block text-sm" data-astro-cid-u73ucvs7>baseFrequency</label> <input type="number" step="0.01" min="0" max="1" id="baseFreq" value="0.6" class="w-full p-2 rounded text-white bg-black border border-white" data-astro-cid-u73ucvs7> </div> <div data-astro-cid-u73ucvs7> <label for="octaves" class="block text-sm" data-astro-cid-u73ucvs7>numOctaves</label> <input type="number" min="1" max="10" id="octaves" value="3" class="w-full p-2 rounded text-white bg-black border border-white" data-astro-cid-u73ucvs7> </div> <div data-astro-cid-u73ucvs7> <label for="seed" class="block text-sm" data-astro-cid-u73ucvs7>seed</label> <input type="number" min="0" max="1000" id="seed" value="2" class="w-full p-2 rounded text-white bg-black border border-white" data-astro-cid-u73ucvs7> </div> </div> <!-- Noise Checkbox --> <div class="md:col-span-2" data-astro-cid-u73ucvs7> <label class="inline-flex items-center gap-2 mt-2" data-astro-cid-u73ucvs7> <input type="checkbox" id="enableNoise" class="h-5 w-5" data-astro-cid-u73ucvs7>\nAdicionar efeito de ru\xEDdo\n</label> </div> <!-- Bot\xF5es --> <div class="md:col-span-2 flex gap-4 mt-4" data-astro-cid-u73ucvs7> <button type="button" id="downloadGradient" class="bg-green-600 px-4 py-2 rounded hover:bg-green-700 focus:outline-2 focus:outline-white" data-astro-cid-u73ucvs7>\n\u2B07\uFE0F Baixar Gradiente\n</button> <button type="button" id="downloadSVG" class="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 focus:outline-2 focus:outline-white" data-astro-cid-u73ucvs7>\n\u2B07\uFE0F Baixar SVG Noise\n</button> </div> </form> <!-- Preview --> ', ` <div id="preview" class="gradient-box" data-astro-cid-u73ucvs7> <div id="gradient" class="custom-gradient" data-astro-cid-u73ucvs7></div> <div class="noise-overlay hidden" id="noiseLayer" data-astro-cid-u73ucvs7> <svg id="noiseSVG" data-astro-cid-u73ucvs7> <filter id="noise" data-astro-cid-u73ucvs7> <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" seed="2" stitchTiles="stitch" data-astro-cid-u73ucvs7></feTurbulence> </filter> <rect width="100%" height="100%" filter="url(#noise)" data-astro-cid-u73ucvs7></rect> </svg> </div> </div> </div> <script>
    const form = document.getElementById("gradientForm");
    const gradient = document.getElementById("gradient");
    const noiseLayer = document.getElementById("noiseLayer");
    const noiseSVG = document.getElementById("noiseSVG");
    const addColorBtn = document.getElementById("addColor");
    const colorsContainer = document.getElementById("colorsContainer");

    const downloadGradientBtn = document.getElementById("downloadGradient");
    const downloadSVGBtn = document.getElementById("downloadSVG");

    // Atualiza gradiente
    function updateGradient() {
      const direction = form.direction.value;
      const baseFreq = form.baseFreq.value;
      const numOctaves = form.octaves.value;
      const seed = form.seed.value;
      const noiseEnabled = form.enableNoise.checked;

      const dirMap = {
        r: "to right",
        l: "to left",
        t: "to top",
        b: "to bottom",
        tl: "to top left",
        tr: "to top right",
        bl: "to bottom left",
        br: "to bottom right",
      };

      const colorPairs = form.querySelectorAll(".color-pair");
      const colors = Array.from(colorPairs).map((pair) => {
        return pair.querySelector('input[name="color"]').value;
      });

      gradient.style.backgroundImage = \\\`linear-gradient(\\\${dirMap[direction]}, \\\${colors.join(", ")})\\\`;

      const feTurbulence = noiseSVG.querySelector("feTurbulence");
      feTurbulence.setAttribute("baseFrequency", baseFreq);
      feTurbulence.setAttribute("numOctaves", numOctaves);
      feTurbulence.setAttribute("seed", seed);

      noiseLayer.classList.toggle("hidden", !noiseEnabled);
    }

    // Adicionar novo par de cor
    addColorBtn.addEventListener("click", () => {
      const wrapper = document.createElement("div");
      wrapper.className = "color-pair";

      const colorInput = document.createElement("input");
      colorInput.type = "color";
      colorInput.className = "color-picker h-10 w-10";

      const textInput = document.createElement("input");
      textInput.type = "text";
      textInput.name = "color";
      textInput.placeholder = "oklch(60% 0.3 320)";
      textInput.className =
        "flex-1 p-2 rounded bg-black border border-white text-white";

      // Vincular cor \u2194 texto
      colorInput.addEventListener(
        "input",
        () => (textInput.value = colorInput.value),
      );
      textInput.addEventListener("input", () => {
        if (/^#([0-9A-F]{3}){1,2}$/i.test(textInput.value.trim())) {
          colorInput.value = textInput.value;
        }
      });

      wrapper.appendChild(colorInput);
      wrapper.appendChild(textInput);
      colorsContainer.appendChild(wrapper);
    });

    // Sincronizar os pares j\xE1 existentes
    document.querySelectorAll(".color-pair").forEach((pair) => {
      const colorInput = pair.querySelector("input[type='color']");
      const textInput = pair.querySelector("input[type='text']");

      colorInput.addEventListener(
        "input",
        () => (textInput.value = colorInput.value),
      );
      textInput.addEventListener("input", () => {
        if (/^#([0-9A-F]{3}){1,2}$/i.test(textInput.value.trim())) {
          colorInput.value = textInput.value;
        }
      });
    });

    // Baixar gradiente
    downloadGradientBtn.addEventListener("click", () => {
      html2canvas(document.getElementById("preview")).then((canvas) => {
        const link = document.createElement("a");
        link.download = "gradient.png";
        link.href = canvas.toDataURL();
        link.click();
      });
    });

    // Baixar SVG
    downloadSVGBtn.addEventListener("click", () => {
      const svgBlob = new Blob([noiseSVG.outerHTML], {
        type: "image/svg+xml;charset=utf-8",
      });
      const url = URL.createObjectURL(svgBlob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "noise.svg";
      link.click();
    });

    form.addEventListener("input", updateGradient);
    window.addEventListener("DOMContentLoaded", updateGradient);
  <\/script>  `, " "])), maybeRenderHead(), renderComponent($$result2, "NoiseBg", $$NoiseBg, { "data-astro-cid-u73ucvs7": true }), renderScript($$result2, "C:/Users/fabio/Documents/fabio.dev/src/pages/gradients.astro?astro&type=script&index=0&lang.ts")) })}`;
}, "C:/Users/fabio/Documents/fabio.dev/src/pages/gradients.astro", void 0);

const $$file = "C:/Users/fabio/Documents/fabio.dev/src/pages/gradients.astro";
const $$url = "/gradients";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Gradients,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
