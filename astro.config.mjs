// @ts-check
import tailwindcss from "@tailwindcss/vite";
import astroIcon from "astro-icon";
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import p from "./src/constants/personal";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react(), astroIcon()],

  i18n: {
    defaultLocale: "pt-BR",
    locales: ["pt-BR", "en", "es", "fr", "zh", "hi", "ja", "ru", "ko", "de"],
  },

  site: p.siteUrl,
});
