// @ts-check
import vercelAdapter from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import astroIcon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercelAdapter(),
  integrations: [astroIcon()],
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    defaultLocale: "en",
    locales: [
      "en",
      "pt",
      "es",
      "fr",
      "zh",
      "hi",
      "ja",
      "ru",
      "ko",
      "de",
    ],
  },
  site: "https://portfolio-fabio-main.vercel.app/",
});