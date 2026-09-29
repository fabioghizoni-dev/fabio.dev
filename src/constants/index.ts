const devicon = "devicon:";
const customClassBase = "size-6";

const technologiesData = [
  {
    name: "React Native",
    icon: "reactnative",
    class: `size-9.5 rounded-full`,
  },
  {
    name: "Next.js",
    icon: `${devicon}nextjs`,
    fill: "var(--color-gray-default)",
    class: "size-11 dark:size-14 -m-2 pb-1 dark:pb-0.5",
  },
  {
    name: "Astro",
    icon: "lineicons:astro",
    class: "size-11 text-purple-500 pt-0.5",
    customClass: `${customClassBase} text-purple-500`,
  },
  {
    name: "Vanilla Extract",
    icon: "material-icon-theme:vanilla-extract",
    customClass: `${customClassBase}`,
  },
  { name: "Delphi", icon: `${devicon}delphi`, class: "size-9.9" },
  {
    name: "Tortoise",
    icon: `${devicon}tortoisegit`,
    class: "size-14 pt-0.5",
  },
  {
    name: "Github",
    icon: "fe:github",
    class: "size-11 text-black dark:text-white",
  },
  { name: "Figma", icon: `${devicon}figma`, class: "size-9" },
  {
    name: "Tailwind CSS",
    icon: `${devicon}tailwindcss`,
    class: "size-10.2",
    customClass: customClassBase
  },
  { name: "React", icon: `${devicon}react`, class: "size-10 pt-0.5", customClass: `${customClassBase.replace("6", "5.5")}`, },
  { name: "Javascript", icon: `${devicon}javascript`, class: "size-9" },
  { name: "Illustrator", icon: `${devicon}illustrator`, class: "size-10" },
  { name: "Typescript", icon: `${devicon}typescript`, class: "size-9", customClass: `${customClassBase}`,},
  { name: "Python", icon: `${devicon}python`, class: "size-10.2" },
  { name: "Git", icon: `${devicon}git`, class: "size-9.8 pb-0.5", customClass: customClassBase },
  { name: "HTML", icon: `${devicon}html5`, class: "size-9.9" },
  { name: "Kotlin", icon: `${devicon}kotlin`, class: "size-10" },
  {
    name: "Object Pascal",
    icon: "material-icon-theme:pascal",
    class: "size-10",
  },
  { name: "CSS", icon: `${devicon}css3`, class: "size-9.9", customClass: customClassBase },
  {
    name: "Node.js",
    icon: "akar-icons:node-fill",
    class: "size-9.8 text-green-500",
    customClass: `${customClassBase} text-green-500`
  },
];

export default technologiesData;

export const duplicateTechnologies = [...technologiesData, ...technologiesData];

export const ready =
  typeof document !== "undefined" && document.readyState === "loading";
