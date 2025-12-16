import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, e as renderScript, a as renderTemplate, s as spreadAttributes, r as renderComponent, f as renderSlot, u as unescapeHTML } from './astro/server_n4ezHyd2.mjs';
import 'clsx';
import { d as cn, e as $$Icon } from './Layout_C49sdIfV.mjs';
import { $ as $$Image } from './_astro_assets_D7_H3DeT.mjs';

const a = [
  " █████╗ ",
  "██╔══██╗",
  "███████║",
  "██╔══██║",
  "██║  ██║",
  "╚═╝  ╚═╝"
];
const c = [
  " ██████╗ ",
  "██╔════╝ ",
  "██║      ",
  "██║      ",
  "╚██████╗ ",
  " ╚═════╝ "
];
const e = [
  "███████╗",
  "██╔════╝",
  "█████╗  ",
  "██╔══╝  ",
  "███████╗",
  "╚══════╝"
];
const f = [
  "███████╗",
  "██╔════╝",
  "█████╗  ",
  "██╔══╝  ",
  "██║     ",
  "╚═╝     "
];
const n = [
  "███╗   ██╗",
  "████╗  ██║",
  "██╔██╗ ██║",
  "██║╚██╗██║",
  "██║ ╚████║",
  "╚═╝  ╚═══╝"
];
const o = [
  " ██████╗ ",
  "██╔═══██╗",
  "██║   ██║",
  "██║   ██║",
  "╚██████╔╝",
  " ╚═════╝ "
];
const r = [
  "██████╗ ",
  "██╔══██╗",
  "██████╔╝",
  "██╔══██╗",
  "██║  ██║",
  "╚═╝  ╚═╝"
];
const s = [
  "███████╗",
  "██╔════╝",
  "███████╗",
  "╚════██║",
  "███████║",
  "╚══════╝"
];
const v = [
  "██╗   ██╗",
  "██║   ██║",
  "██║   ██║",
  "╚██╗ ██╔╝",
  " ╚████╔╝ ",
  "  ╚═══╝  "
];
const bar = { ascii: ["█╗", "█║", "█║", "█║", "█║", "█║", "╚╝"].join("\n") };
const fabio = f.map((_, y) => `${c[y]} ${o[y]} ${n[y]} ${v[y]} ${e[y]} ${r[y]} ${s[y]} ${a[y]} ${r[y]}`).join("\n");

const $$Astro$5 = createAstro("https://portfolio-fabio-main.vercel.app/");
const $$AsciiArts = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$AsciiArts;
  const nameArray = [
    "F",
    "\xE1",
    "b",
    "i",
    "o\xA0",
    "G",
    "h",
    "i",
    "z",
    "o",
    "n",
    "i",
    ","
  ];
  const baseClass = `flex flex-col text-3xl lg:text-4xl text-left font-space-grotesk font-black justify-center items-start gap-2`;
  const divClass = `flex relative min-w-59ch bg-gradient-to-br bg-clip-text text-transparent from-blue-800 to-rose-600 contrast-125 
  dark:contrast-100 dark:from-sky-400 dark:to-fuchsia-500 text-lg leading-none tracking-max 
    justify-start items-center`;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h1${addAttribute(cn(baseClass, className), "class")}> <p id="hello-world" class="inline text-nowrap text-gray-800 dark:text-white/80"> <span class="inline-block opacity-0 animate-char"> I'm </span> <br class="md:hidden"> ${nameArray.map((letter, i) => renderTemplate`<span translate="no"${addAttribute(`animation-delay: ${i * 0.08}s;`, "style")} class="inline-block opacity-0 animate-char"> ${letter} </span>`)} <span lang="en" id="keywords" class="inline-block animate-blur transition-all duration-500 ease-in-out"></span> </p> <div translate="no"${addAttribute(divClass, "class")}> <pre id="ascii-art">${fabio}</pre> <pre id="bar" class="hidden md:block animate-opacity transition-opacity duration-500 ease-in-out">${bar.ascii}</pre> </div> </h1> ${renderScript($$result, "C:/Users/fabio/Documents/fabio.dev/src/ui/AsciiArts.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/fabio/Documents/fabio.dev/src/ui/AsciiArts.astro", void 0);

const $$Astro$4 = createAstro("https://portfolio-fabio-main.vercel.app/");
const $$CircularLogo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$CircularLogo;
  const {
    isAnimated,
    id = "circular-logo",
    src = "/fabio_minor.jpg",
    class: className = "relative size-64 group",
    text = "\u2022 CYBERSECURITY \u2022 DEVOPS \u2022 UI \u2022 DATABASES \u2022 UX \u2022 DESIGNER \u2022 AI \u2022 CLOUD",
    ...props
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(id, "id")}${addAttribute(cn(className), "class")}${spreadAttributes(props)}> <svg id="circular-text" viewBox="0 0 500 500"${addAttribute(cn(
    `absolute inset-0 -m-10 whitespace-pre text-4xl font-space-grotesk ${isAnimated ? "animate-spin-slow group-hover:pause" : ""}`
  ), "class")}> <path id="curve" fill="none" d="M250,250 m-200,0 a200,200 0 1,1 400,0 a200,200 0 1,1 -400,0"></path> <text> <textPath href="#curve" class="fill-gray-default dark:fill-white/80 select-none"> ${text} </textPath> </text> </svg> ${renderComponent($$result, "Image", $$Image, { "role": "img", "width": 100, "height": 100, "loading": "eager", "src": src, "alt": "F\xE1bio Henrique Elegant and Social", "class": "size-full rounded-full" })} </span>`;
}, "C:/Users/fabio/Documents/fabio.dev/src/ui/CircularLogo.astro", void 0);

const $$Astro$3 = createAstro("https://portfolio-fabio-main.vercel.app/");
const $$HeroBadge = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$HeroBadge;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`${className} flex flex-col sm:flex-row text-nowrap justify-center items-center gap-4`, "class")}> <div class="flex bg-linear-to-r from-purple-default to-purple-blue justify-center items-center dark:border-none border-2
      border-gray-default/20 gap-1 px-6 py-2 rounded-full"> ${renderComponent($$result, "Icon", $$Icon, { "name": "material-symbols:star-rounded", "class": "w-6 h-6 text-yellow-400 brightness-200 animate-pulse" })} <span class="text-white font-cascadia-code mt-0.5">Full-Stack Developer</span> </div> <a role="link" href="/cv-fabio.pdf" download="cv-fabio.pdf" aria-label="Download CV" class="flex justify-center items-center gap-2 bg-purple-blue text-white font-cascadia-code font-bold dark:border-none
      border-gray-default/20 border-2 animate-pulse-border rounded-full px-6 py-2 cursor-pointer hover:opacity-80
        transition-opacity ease-in-out duration-300">
Download CV
${renderComponent($$result, "Icon", $$Icon, { "name": "material-symbols:download", "class": "w-6 h-6" })} </a> </div>`;
}, "C:/Users/fabio/Documents/fabio.dev/src/ui/HeroBadge.astro", void 0);

const $$ScrollToTop = createComponent(($$result, $$props, $$slots) => {
  const finalClass = cn(`fixed opacity-0 pointer-events-none w-12 h-12 bg-gray-default text-white right-4 bottom-4 border 
    border-white/35 rounded-full p-1 cursor-pointer hover:bg-gradient-to-br hover:from-purple-default 
      hover:to-purple-blue hover:text-gray-default hover:contrast-125 transition-colors ease-in-out 
        duration-500`);
  return renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "aria-hidden": true, "id": "arrow-up", "type": "button", "name": "ep:arrow-up-bold", "title": "Scroll to top of page", "class": finalClass })} ${renderScript($$result, "C:/Users/fabio/Documents/fabio.dev/src/ui/ScrollToTop.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/fabio/Documents/fabio.dev/src/ui/ScrollToTop.astro", void 0);

const $$Astro$2 = createAstro("https://portfolio-fabio-main.vercel.app/");
const $$WhatsIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$WhatsIcon;
  const {
    name,
    phoneClass,
    borderClass,
    class: className = "w-7 h-7"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(name, "id")}${addAttribute(name, "data-name")}${addAttribute(className, "class")} viewBox="0 0 17.87 17.88" xmlns="http://www.w3.org/2000/svg"> <g> <path style="stroke-miterlimit: 10; stroke-width: 0.088rem;"${addAttribute(`fill-none ${borderClass ? borderClass : "stroke-white"} animate-draw`, "class")} d="M14.76,3.12c-1.55-1.56-3.62-2.42-5.82-2.42C4.4.7.7,4.4.7,8.94c0,1.55.44,3.07,1.26,4.38l.2.31-.83,3.04,3.12-.82.3.18c1.27.75,2.72,1.15,4.2,1.15,4.54,0,8.24-3.69,8.22-8.23,0-2.19-.86-4.29-2.41-5.83Z"></path> <path${addAttribute(`${phoneClass ? phoneClass : "fill-white"} animate-draw-fill`, "class")} d="M6.07,4.52h-.45c-.16,0-.41.05-.63.29-.21.24-.81.81-.81,1.96s.84,2.27.95,2.42c.12.16,1.66,2.53,4.01,3.54.56.25.99.39,1.33.49.33.11.64.14.93.14.2,0,.38-.02.55-.04.45-.07,1.39-.57,1.58-1.12.2-.55.2-1.01.13-1.11-.06-.11-.21-.16-.44-.27-.24-.11-1.39-.68-1.6-.77-.09-.03-.18-.05-.25-.05-.1,0-.19.04-.28.17-.16.23-.61.76-.74.92-.07.09-.15.14-.25.14-.08,0-.16-.03-.26-.09-.24-.11-1-.37-1.89-1.16-.7-.63-1.16-1.39-1.3-1.63-.13-.24-.02-.36.1-.48.11-.11.24-.28.35-.41.12-.13.16-.24.24-.39.08-.16.04-.29-.02-.4-.06-.12-.53-1.27-.72-1.75-.19-.45-.39-.39-.53-.4h0Z"></path> </g> </svg>`;
}, "C:/Users/fabio/Documents/fabio.dev/src/ui/WhatsIcon.astro", void 0);

const $$Astro$1 = createAstro("https://portfolio-fabio-main.vercel.app/");
const $$SocialButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SocialButton;
  const {
    target = "_blank",
    name = "whatsapp",
    title = "Whatsapp",
    rel = "noopener noreferrer",
    href = "https://wa.me/5543998280078",
    ...rest
  } = Astro2.props;
  const baseClass = `group flex items-center justify-center gap-3 px-4 py-3 bg-purple-blue rounded-lg text-white 
  transition-colors duration-300 ease-in-out hover:bg-purple-blue/70 hover:contrast-125`;
  const finalClass = cn(baseClass);
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(title, "title")}${addAttribute(target, "target")}${addAttribute(rel, "rel")}${addAttribute(finalClass, "class")}> <span class="text-shadow-white group-hover:text-shadow-2xs transition-colors duration-300 ease-in-out"> ${renderSlot($$result, $$slots["default"])} </span> ${name === "whatsapp" ? renderTemplate`${renderComponent($$result, "WhatsIcon", $$WhatsIcon, { "name": name, "phoneClass": "fill-white group-hover:fill-gray-default transition-colors duration-300 ease-in-out", "borderClass": "stroke-white group-hover:stroke-gray-default transition-colors duration-300 ease-in-out", ...rest })}` : renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": name, "class": "w-8 h-8 group-hover:text-gray-default transition-colors duration-300 ease-in-out", ...rest })}`} </a>`;
}, "C:/Users/fabio/Documents/fabio.dev/src/ui/SocialButton.astro", void 0);

function createSvgComponent({ meta, attributes, children }) {
  const Component = createComponent((_, props) => {
    const normalizedProps = normalizeProps(attributes, props);
    return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
  });
  Object.defineProperty(Component, "toJSON", {
    value: () => meta,
    enumerable: false
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, props) {
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const LogoReactNative = createSvgComponent({"meta":{"src":"/_astro/react_native.Cax1_Q2I.svg","width":16,"height":16,"format":"svg"},"attributes":{"width":"1em","height":"1em","viewBox":"0 0 128 128"},"children":"<g fill=\"url(#gradient)\"><circle cx=\"64\" cy=\"64\" r=\"11.4\" /><path d=\"M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3c.6-2.4 1.1-4.8 1.5-7.1c2.1-13.2-.2-22.5-6.6-26.1c-1.9-1.1-4-1.6-6.4-1.6c-7 0-15.9 5.2-24.9 13.9c-9-8.7-17.9-13.9-24.9-13.9c-2.4 0-4.5.5-6.4 1.6c-6.4 3.7-8.7 13-6.6 26.1c.4 2.3.9 4.7 1.5 7.1c-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3c-.6 2.4-1.1 4.8-1.5 7.1c-2.1 13.2.2 22.5 6.6 26.1c1.9 1.1 4 1.6 6.4 1.6c7.1 0 16-5.2 24.9-13.9c9 8.7 17.9 13.9 24.9 13.9c2.4 0 4.5-.5 6.4-1.6c6.4-3.7 8.7-13 6.6-26.1c-.4-2.3-.9-4.7-1.5-7.1c2.4-.7 4.7-1.4 6.9-2.3c12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8M92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3c-.3 2.1-.8 4.3-1.4 6.6c-5.2-1.2-10.7-2-16.5-2.5c-3.4-4.8-6.9-9.1-10.4-13c7.4-7.3 14.9-12.3 21-12.3c1.3 0 2.5.3 3.5.9M81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6c-3.7.3-7.4.4-11.2.4c-3.9 0-7.6-.1-11.2-.4q-3.3-4.8-6-9.6c-1.9-3.3-3.7-6.7-5.3-10c1.6-3.3 3.4-6.7 5.3-10c1.8-3.2 3.9-6.4 6.1-9.6c3.7-.3 7.4-.4 11.2-.4c3.9 0 7.6.1 11.2.4q3.3 4.8 6 9.6c1.9 3.3 3.7 6.7 5.3 10c-1.7 3.3-3.4 6.6-5.3 10m8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3c-3.4.8-7 1.4-10.8 1.9c1.2-1.9 2.5-3.9 3.6-6c1.2-2.1 2.3-4.2 3.4-6.2M64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3c2.3.1 4.6.2 6.9.2s4.6-.1 6.9-.2c-2.2 2.9-4.5 5.7-6.9 8.3m-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9c1.1-3.3 2.3-6.8 3.8-10.3c1.1 2 2.2 4.1 3.4 6.1c1.2 2.2 2.4 4.1 3.6 6.1m-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3c3.4-.8 7-1.4 10.8-1.9c-1.2 1.9-2.5 3.9-3.6 6c-1.2 2.1-2.3 4.2-3.4 6.2M64 30.2c2.4 2.6 4.7 5.4 6.9 8.3c-2.3-.1-4.6-.2-6.9-.2s-4.6.1-6.9.2c2.2-2.9 4.5-5.7 6.9-8.3m22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9c-1.1 3.3-2.3 6.8-3.8 10.3c-1.1-2.1-2.2-4.2-3.4-6.2M31.7 35c-1.7-10.5-.3-17.9 3.8-20.3c1-.6 2.2-.9 3.5-.9c6 0 13.5 4.9 21 12.3c-3.5 3.8-7 8.2-10.4 13c-5.8.5-11.3 1.4-16.5 2.5c-.6-2.3-1-4.5-1.4-6.6M7 64c0-4.7 5.7-9.7 15.7-13.4c2-.8 4.2-1.5 6.4-2.1c1.6 5 3.6 10.3 6 15.6c-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64m28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3c.3-2.1.8-4.3 1.4-6.6c5.2 1.2 10.7 2 16.5 2.5c3.4 4.8 6.9 9.1 10.4 13c-7.4 7.3-14.9 12.3-21 12.3c-1.3 0-2.5-.3-3.5-.9M96.3 93c1.7 10.5.3 17.9-3.8 20.3c-1 .6-2.2.9-3.5.9c-6 0-13.5-4.9-21-12.3c3.5-3.8 7-8.2 10.4-13c5.8-.5 11.3-1.4 16.5-2.5c.6 2.3 1 4.5 1.4 6.6m9-15.6c-2 .8-4.2 1.5-6.4 2.1c-1.6-5-3.6-10.3-6-15.6c2.4-5.3 4.5-10.5 6-15.5c13.8 4 22.1 10 22.1 15.6c0 4.7-5.8 9.7-15.7 13.4\" /></g><defs><linearGradient id=\"gradient\"><stop offset=\"0%\" stop-color=\"oklch(55.8% 0.288 302.321)\" /><stop offset=\"100%\" stop-color=\"oklch(65.6% 0.241 354.308)\" /></linearGradient></defs>"});

const technologiesData = [
  {
    name: "React Native",
    icon: "devicon:react",
    customIcon: LogoReactNative,
    class: "w-9.5 h-9.5 rounded-full"
  },
  { name: "Next.js", icon: "devicon:nextjs", class: "size-11 dark:size-14 -m-2 pb-0.5" },
  {
    name: "Astro",
    icon: "lineicons:astro",
    class: "w-11 h-11 text-purple-500 pt-0.5"
  },
  { name: "Delphi", icon: "devicon:delphi", class: "w-9.9 h-9.9" },
  { name: "Tortoise", icon: "devicon:tortoisegit", class: "w-14 h-14 pt-0.5" },
  { name: "Github", icon: "fe:github", class: "w-11 h-11 text-black dark:text-white" },
  { name: "Figma", icon: "devicon:figma", class: "w-9 h-9" },
  { name: "Tailwind CSS", icon: "devicon:tailwindcss", class: "w-10.2 h-10.2" },
  { name: "React", icon: "devicon:react", class: "w-10 h-10 pt-0.5" },
  { name: "Javascript", icon: "devicon:javascript", class: "w-9 h-9" },
  { name: "Illustrator", icon: "devicon:illustrator", class: "w-10 h-10" },
  { name: "Typescript", icon: "devicon:typescript", class: "w-9 h-9" },
  { name: "Python", icon: "devicon:python", class: "w-10.2 h-10.2" },
  { name: "Git", icon: "devicon:git", class: "w-9.8 h-9.8 pb-0.5" },
  { name: "HTML", icon: "devicon:html5", class: "w-9.9 h-9.9" },
  { name: "Kotlin", icon: "devicon:kotlin", class: "w-10 h-10" },
  {
    name: "Object Pascal",
    icon: "material-icon-theme:pascal",
    class: "w-10 h-10"
  },
  { name: "CSS", icon: "devicon:css3", class: "w-9.9 h-9.9" },
  {
    name: "Node.js",
    icon: "akar-icons:node-fill",
    class: "w-9.8 h-9.8 text-green-500"
  }
];
const duplicateTechnologies = [...technologiesData, ...technologiesData];

const $$Astro = createAstro("https://portfolio-fabio-main.vercel.app/");
const $$Technologies = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Technologies;
  const { list, class: className = "" } = Astro2.props;
  const baseClass = "relative w-full group bg-white dark:bg-black border-y-2 dark:border-y border-gray-default/20 dark:border-white/20 py-2 overflow-hidden";
  const finalClass = cn(baseClass, className);
  return renderTemplate`${list ? renderTemplate`${maybeRenderHead()}<div class="">${renderComponent($$result, "Icon", $$Icon, { "name": "akar-icons:node-fill" })}</div>` : renderTemplate`<div${addAttribute(finalClass, "class")}><div translate="no" class="flex w-max justify-center items-center gap-10 will-change-transform animate-horz-loop group-hover:pause">${duplicateTechnologies.map((tech) => {
    const CustomIcon = tech.customIcon || $$Icon;
    return renderTemplate`<span class="flex justify-center items-center gap-2 text-gray-default dark:text-white text-center text-3xl text-nowrap 
                font-cascadia-code font-bold">${tech.name}${renderComponent($$result, "CustomIcon", CustomIcon, { "name": tech.icon, "aria-label": `Icon of ${tech.name}`, "class": `${tech.class || ""}` })}</span>`;
  })}</div></div>`}`;
}, "C:/Users/fabio/Documents/fabio.dev/src/ui/Technologies.astro", void 0);

export { $$HeroBadge as $, $$CircularLogo as a, $$AsciiArts as b, $$Technologies as c, $$SocialButton as d, $$ScrollToTop as e };
