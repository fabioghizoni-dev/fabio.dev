import personal from "./personal";

export interface Project {
  id: "renext" | "jvmPortfolio" | "qrGenerator" | "gradientGenerator" | "fabioDev" | "restApi";
  title: string;
  description: string;
  techs: string[];
  image?: string;
  links: {
    web?: string;
    github?: string;
  };
}

const projects: Project[] = [
  {
    id: "renext",
    title: "Renext",
    description:
      "Institutional website for a renewable energy company. Modern design with information about solar energy services, benefits, and company presentation.",
    techs: ["Astro", "Typescript", "Vanilla Extract"],
    links: {
      web: personal.socials.projects.renext,
    },
  },
  {
    id: "jvmPortfolio",
    title: "JVM Portfolio",
    description:
      "Modern and responsive portfolio for a developer, built with React and featuring smooth animations, dark theme, and a clean UI to showcase projects and skills.",
    techs: ["React", "Typescript"],
    links: {
      web: personal.socials.projects.jvmPortfolio,
    },
  },
  {
    id: "qrGenerator",
    title: "QR Code Generator",
    description:
      "Customizable QR Code generation tool with styling options for colors, shapes, and sizes. Supports SVG and canvas output formats with auto-download.",
    techs: ["React", "Typescript", "CSS"],
    links: {
      github: personal.socials.github,
    },
  },
  {
    id: "gradientGenerator",
    title: "Gradient Generator",
    description:
      "Interactive gradient generation tool with noise effect support. Create, preview, and export custom gradients with multiple color stops and real-time preview.",
    techs: ["React", "Typescript", "CSS"],
    links: {
      github: personal.socials.github,
    },
  },
  {
    id: "fabioDev",
    title: "Fabio Dev",
    description:
      "Personal portfolio website built with Astro and React. Features i18n support for 10 languages, dark theme, server-side rendering, and a modern tech stack.",
    techs: ["Astro", "React", "Typescript", "Tailwind CSS"],
    links: {
      web: personal.siteUrl,
      github: `${personal.socials.github}/fabio.dev`,
    },
  },
  {
    id: "restApi",
    title: "REST API",
    description:
      "RESTful API built with Node.js and Express, featuring JWT authentication, CRUD operations, database integration with PostgreSQL, and comprehensive error handling.",
    techs: ["Node.js", "Typescript", "Git"],
    links: {
      github: personal.socials.github,
    },
  },
];

export default projects;
