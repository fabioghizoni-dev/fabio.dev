// @ts-check
import tailwindcss from "@tailwindcss/vite";
import astroIcon from "astro-icon";
import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel";
import p from "./src/constants/personal";

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [astroIcon({ iconDir: "src/icons" })],

  i18n: {
    defaultLocale: "en",
    locales: ["en", "pt", "es", "fr", "zh", "hi", "ja", "ru", "ko", "de"],
  },

  site: p.siteUrl,
});
