const technologiesData = [
  {
    name: "React Native",
    icon: "devicon:react",
    customIcon: "/react_native.svg",
    class: "w-9.5 h-9.5 rounded-full",
  },
  {
    name: "Next.js",
    icon: "devicon:nextjs",
    class: "size-11 dark:size-14 -m-2 pb-0.5",
  },
  {
    name: "Astro",
    icon: "lineicons:astro",
    class: "w-11 h-11 text-purple-500 pt-0.5",
  },
  { name: "Delphi", icon: "devicon:delphi", class: "w-9.9 h-9.9" },
  { name: "Tortoise", icon: "devicon:tortoisegit", class: "w-14 h-14 pt-0.5" },
  {
    name: "Github",
    icon: "fe:github",
    class: "w-11 h-11 text-black dark:text-white",
  },
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
    class: "w-10 h-10",
  },
  { name: "CSS", icon: "devicon:css3", class: "w-9.9 h-9.9" },
  {
    name: "Node.js",
    icon: "akar-icons:node-fill",
    class: "w-9.8 h-9.8 text-green-500",
  },
];

export default technologiesData;

export const duplicateTechnologies = [...technologiesData, ...technologiesData];

export const ready = typeof document !== "undefined" && document.readyState === "loading";
