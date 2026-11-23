import personal from "./personal";

export const PROJECT_IDS = [
  "renext",
  "dailyRoutines",
  "brava",
  "fabioDev",
  "jvmPortfolio",
  "qrGenerator",
  "restApi",
  "astroSauce",
  "laboratorioVisual",
] as const;

export type ProjectId = (typeof PROJECT_IDS)[number];

export interface Project {
  id: string;
  title: string;
  description: string;
  techs: string[];
  image?: string;
  links: {
    web?: string;
    github?: string;
  };
  /** Static projects use the i18n copy; database projects do not. */
  localized?: boolean;
  sortOrder?: number;
}

/**
 * Canonical project data. Titles and descriptions are the English fallback;
 * localized copy lives in `src/i18n` under `components.projects.items`.
 */
const projects: Project[] = [
  {
    id: "renext",
    title: "Renext",
    description:
      "Institutional website and commercial platform with editorial home, authentication, Stripe checkout and an admin dashboard.",
    techs: ["Astro", "React", "TypeScript", "PostgreSQL", "Stripe", "Drizzle"],
    links: {
      web: personal.socials.projects.renext,
    },
  },
  {
    id: "dailyRoutines",
    title: "Daily Routines",
    description:
      "Personal routines, tasks and study app for desktop, web/PWA and Android, with offline support and account sync.",
    techs: ["React", "TypeScript", "Tauri", "Firebase", "PWA"],
    links: {
      web: personal.socials.projects.dailyRoutines,
    },
  },
  {
    id: "brava",
    title: "BRAVA",
    description:
      "Digital store for sports culture with catalog, cart, checkout and an admin dashboard for products, orders and stock.",
    techs: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Mercado Pago"],
    links: {
      web: personal.socials.projects.brava,
    },
  },
  {
    id: "fabioDev",
    title: "Fabio Dev",
    description:
      "Personal portfolio built with Astro and React: i18n for 10 languages, dark theme, server-side rendering and a modern stack.",
    techs: ["Astro", "React", "TypeScript", "Tailwind CSS"],
    links: {
      web: personal.siteUrl,
      github: `${personal.socials.github}/fabio.dev`,
    },
  },
  {
    id: "jvmPortfolio",
    title: "JVM Portfolio",
    description:
      "Modern and responsive developer portfolio built with React, featuring smooth animations, dark theme and a clean UI.",
    techs: ["React", "TypeScript", "Vite"],
    links: {
      web: personal.socials.projects.jvmPortfolio,
    },
  },
  {
    id: "qrGenerator",
    title: "QR Code Generator",
    description:
      "Customizable QR Code tool with colors, shapes and sizes, plus SVG or canvas export and automatic download.",
    techs: ["React", "TypeScript", "qr-code-styling"],
    links: {
      web: "/qr",
    },
  },
  {
    id: "restApi",
    title: "Tião Carreiro API",
    description:
      "RESTful Laravel API for a music ranking platform, with Sanctum auth, YouTube integration, moderation and Docker.",
    techs: ["Laravel", "PHP", "SQLite", "Docker"],
    links: {
      github: `${personal.socials.github}/tiao-carreiro-backend`,
    },
  },
  {
    id: "astroSauce",
    title: "astro-sauce",
    description:
      "Open-source CSS-in-JS runtime for Astro: write CSS inside JavaScript, without an SSR dependency.",
    techs: ["TypeScript", "Astro", "npm"],
    links: {
      web: "https://www.npmjs.com/package/astro-sauce",
      github: "https://github.com/AnakinSkyWalker-Dev/astro-sauce",
    },
  },
  {
    id: "laboratorioVisual",
    title: "Laborátorio visual - Corte, revisão e montagem de Imagens",
    description:
      "Ferramenta interativa para corte, revisão e montagem de imagens de amostras para laboratório.",
    techs: ["Python", "NumPy", "opencv-python"],
    links: {},
  },
];

export default projects;
