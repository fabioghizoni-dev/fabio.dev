// @ts-check
import tailwindcss from "@tailwindcss/vite";
import astroIcon from "astro-icon";
import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  integrations: [astroIcon()],
  vite: {
    plugins: [tailwindcss()],
  },

  i18n: {
    defaultLocale: "en",
    locales: ["en", "pt", "es", "fr", "zh", "hi", "ja", "ru", "ko", "de"],
  },

  site: "https://portfolio-fabio-main.vercel.app/",
});
