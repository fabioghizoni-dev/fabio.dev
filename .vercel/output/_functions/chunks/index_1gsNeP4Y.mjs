import { c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate, r as renderComponent, d as createAstro } from './astro/server_n4ezHyd2.mjs';
import 'clsx';
import { d as cn, e as $$Icon, $ as $$Layout } from './Layout_C49sdIfV.mjs';
import { a as actions } from './virtual_1Qf9e1Sc.mjs';
import { d as $$SocialButton, b as $$AsciiArts, $ as $$HeroBadge, a as $$CircularLogo, c as $$Technologies, e as $$ScrollToTop } from './Technologies_dEsOlntn.mjs';
import { $ as $$Image } from './_astro_assets_D7_H3DeT.mjs';

const calculateAge = (birthDate) => {
  const today = /* @__PURE__ */ new Date();
  const birth = new Date(birthDate);
  const month = today.getMonth() - birth.getMonth();
  let age = today.getFullYear() - birth.getFullYear();
  if (month < 0 || month === 4 && today.getDate() < 30) {
    age--;
  }
  return age;
};

const $$AboutMe = createComponent(($$result, $$props, $$slots) => {
  const currentAge = calculateAge("2005-05-30");
  const aboutMeClass = cn(
    `flex relative flex-col w-full h-fit min-h-screen justify-center items-center 
    gap-4 p-8 font-cascadia-code text-white`
  );
  return renderTemplate`${maybeRenderHead()}<section id="about-me"${addAttribute(aboutMeClass, "class")}> <div class="absolute inset-0 -z-10 bg-linear-to-tr from-indigo-500 via-purple-500 to-blue-500
  dark:from-indigo-900 dark:via-purple-900 dark:to-blue-900 transition-colors ease-in-out duration-1000"></div> <div class="flex flex-col max-w-8xl h-full justify-center items-center gap-8"> <h2 id="about" class="text-4xl font-bold text-gray-default dark:text-white/80">
About
<span id="me" class="bg-white/80 text-gray-default rounded p-0.5 -ml-3 hover:bg-transparent hover:text-gray-default
          dark:hover:text-white/80 transition-colors ease-in-out duration-300">me</span> </h2> <p class="bg-gray-default text-xl text-justify p-4 rounded-md">
Hello!! My name is Fábio, I'm ${currentAge} years old, and I live in Manoel Ribas,
      Paraná - Brazil. I'm a very curious guy who enjoys learning how everything works.
      That's why I'm passionate about technology, which is a very broad and interesting
      field. I'm a full-stack developer, creating intuitive and dynamic interfaces
      with interactivity and accessibility. My main experience is in the web, but
      I've also developed desktop and mobile applications. I graduated with a degree
      in Systems Analysis and Development and am now seeking to learn more about various
      technologies, such as Python, Kotlin, Swift, React Native, and more.
</p> </div> </section>`;
}, "C:/Users/fabio/Documents/fabio.dev/src/components/AboutMe.astro", void 0);

const $$ContactMe = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="contact-me"${addAttribute(cn(
    "flex bg-light flex-col w-full min-h-screen justify-center items-center font-cascadia-code gap-8 px-4 py-12"
  ), "class")}> <h1 class="text-3xl dark:text-white md:text-4xl font-medium text-center">
Get in touch
</h1> <h2 class="max-w-5xl dark:text-white text-lg md:text-2xl text-center">
I'm always open to new opportunities and collaborations. Feel free to
    contact me through any of the channels below.
</h2> <div class="flex flex-wrap gap-4 md:gap-8 justify-center items-center"> ${renderComponent($$result, "SocialButton", $$SocialButton, {}, { "default": ($$result2) => renderTemplate`Whatsapp` })} ${renderComponent($$result, "SocialButton", $$SocialButton, { "title": "Instagram", "name": "line-md:instagram", "href": "https://www.instagram.com/fabio.ghizoni_" }, { "default": ($$result2) => renderTemplate`Instagram` })} ${renderComponent($$result, "SocialButton", $$SocialButton, { "title": "Github", "name": "line-md:github", "href": "https://github.com/fabioghizoni-dev" }, { "default": ($$result2) => renderTemplate`Github` })} ${renderComponent($$result, "SocialButton", $$SocialButton, { "title": "LinkedIn", "name": "line-md:linkedin", "href": "https://www.linkedin.com/in/f%C3%A1bioghizoni" }, { "default": ($$result2) => renderTemplate`LinkedIn` })} </div> <form method="post" id="contact-form"${addAttribute(actions.send, "action")} class="flex flex-col gap-4 w-full max-w-2xl text-gray-default dark:text-white text-base md:text-2xl"> <div class="flex flex-col gap-2"> <label for="name" class="text-base md:text-2xl font-medium">Your name</label> <input required id="name" name="name" type="text" autocomplete="name" placeholder="Your name here" class="border-2 border-white/30 px-3 md:px-4 py-2 rounded-lg placeholder:text-white/50 bg-black text-white focus:outline-none focus:border-white/70 transition"> </div> <div class="flex flex-col gap-2"> <label for="email" class="text-base md:text-2xl font-medium">Your e-mail</label> <input required id="email" type="email" name="email" autocomplete="email" placeholder="your.email@example.com" class="border-2 border-white/30 px-3 md:px-4 py-2 rounded-lg placeholder:text-white/50 bg-black text-white focus:outline-none focus:border-white/70 transition"> </div> <div class="flex flex-col gap-2"> <label for="message" class="text-base md:text-2xl font-medium">Your message</label> <textarea required rows="6" id="message" name="message" placeholder="Write your message here..." class="border-2 border-white/30 bg-black px-3 md:px-4 py-2 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-white/70 transition resize-none"></textarea> </div> <button id="submit" type="submit"${addAttribute(cn(
    `flex justify-center items-center gap-4 bg-linear-to-r from-purple-default to-purple-blue text-white px-6 py-3 mt-4 cursor-pointer rounded-lg text-base md:text-xl transition hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed`
  ), "class")}>
Send message
</button> </form> </section>`;
}, "C:/Users/fabio/Documents/fabio.dev/src/components/ContactMe.astro", void 0);

const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  const heroClass = cn(
    `flex relative flex-col lg:flex-row w-full h-fit min-h-screen justify-center 
    items-center gap-10 lg:gap-20 overflow-hidden p-4 md:p-0`
  );
  return renderTemplate`${maybeRenderHead()}<section id="hero"${addAttribute(heroClass, "class")}> <div class="absolute inset-0 bg-linear-to-br from-indigo-500 via-purple-500 to-blue-500
  dark:from-indigo-900 dark:via-purple-900 dark:to-blue-900"></div> <div class="relative flex flex-col justify-center items-start gap-2"> ${renderComponent($$result, "AsciiArt", $$AsciiArts, {})} ${renderComponent($$result, "HeroBadge", $$HeroBadge, {})} </div> ${renderComponent($$result, "CircularLogo", $$CircularLogo, { "isAnimated": true })} </section>`;
}, "C:/Users/fabio/Documents/fabio.dev/src/components/HeroSection.astro", void 0);

const img = new Proxy({"src":"/_astro/Logo.DzCuw1wH.png","width":258,"height":129,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/fabio/Documents/fabio.dev/public/Logo.png";
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro("https://portfolio-fabio-main.vercel.app/");
const $$Project = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Project;
  const { titleProject = "My portfolio" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col bg-gray-default rounded-xl"> <h1 class="font-space-grotesk">${titleProject}</h1> ${renderComponent($$result, "Image", $$Image, { "src": img, "alt": "Image Logo" })} ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:github", "class": "text-4xl text-white" })} <a href="/">See project</a> ${renderComponent($$result, "Technologies", $$Technologies, { "list": ["Node"] })} </div>`;
}, "C:/Users/fabio/Documents/fabio.dev/src/ui/Project.astro", void 0);

const $$Astro = createAstro("https://portfolio-fabio-main.vercel.app/");
const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Projects;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section id="projects"${addAttribute(`flex flex-col justify-center items-center h-fit min-h-screen w-full text-white ${className}`, "class")}> <h1 class="text-4xl font-bold font-cascadia-code">Projects</h1> ${renderComponent($$result, "Project", $$Project, {})} </section>`;
}, "C:/Users/fabio/Documents/fabio.dev/src/components/Projects.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "header": true, "footer": true, "title": "Web | F\xE1bio Ghizoni" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroSection", $$HeroSection, {})} ${renderComponent($$result2, "AboutMe", $$AboutMe, {})} ${renderComponent($$result2, "Projects", $$Projects, { "class": "hidden" })} ${renderComponent($$result2, "Technologies", $$Technologies, {})} ${renderComponent($$result2, "ContactMe", $$ContactMe, {})} ${renderComponent($$result2, "ScrollToTop", $$ScrollToTop, {})} ` })}`;
}, "C:/Users/fabio/Documents/fabio.dev/src/pages/index.astro", void 0);

const $$file = "C:/Users/fabio/Documents/fabio.dev/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
