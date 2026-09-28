export interface Project {
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
    title: "Renew Digital",
    description:
      "Institutional website for a renewable energy company. Modern design with information about solar energy services, benefits, and company presentation.",
    techs: ["Next.js", "Typescript", "Tailwind CSS"],
    links: {
      web: "https://renew-digital.vercel.app/",
    },
  },
  {
    title: "JVM Portfolio",
    description:
      "Modern and responsive portfolio for a developer, built with React and featuring smooth animations, dark theme, and a clean UI to showcase projects and skills.",
    techs: ["React", "Typescript"],
    links: {
      web: "https://jvm-portfolio.vercel.app/",
    },
  },
  {
    title: "QR Code Generator",
    description:
      "Customizable QR Code generation tool with styling options for colors, shapes, and sizes. Supports SVG and canvas output formats with auto-download.",
    techs: ["React", "Typescript", "CSS"],
    links: {
      github: "https://github.com/fabioghizoni-dev",
    },
  },
  {
    title: "Gradient Generator",
    description:
      "Interactive gradient generation tool with noise effect support. Create, preview, and export custom gradients with multiple color stops and real-time preview.",
    techs: ["React", "Typescript", "CSS"],
    links: {
      github: "https://github.com/fabioghizoni-dev",
    },
  },
  {
    title: "Fabio Dev",
    description:
      "Personal portfolio website built with Astro and React. Features i18n support for 10 languages, dark theme, server-side rendering, and a modern tech stack.",
    techs: ["Astro", "React", "Typescript", "Tailwind CSS"],
    links: {
      web: "https://portfolio-fabio-main.vercel.app",
      github: "https://github.com/fabioghizoni-dev/fabio.dev",
    },
  },
  {
    title: "REST API",
    description:
      "RESTful API built with Node.js and Express, featuring JWT authentication, CRUD operations, database integration with PostgreSQL, and comprehensive error handling.",
    techs: ["Node.js", "Typescript", "Git"],
    links: {
      github: "https://github.com/fabioghizoni-dev",
    },
  },
];

export default projects;
