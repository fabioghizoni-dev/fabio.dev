// @ts-check
import tailwindcss from "@tailwindcss/vite";
import astroIcon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [astroIcon()],
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://portfolio-fabio-main.vercel.app/",
  i18n: {
    defaultLocale: "en",
    locales: [
      "en",
      "en-US",
      "en-GB",
      "en-AU",
      "pt",
      "pt-BR",
      "pt-PT",
      "es",
      "es-ES",
      "es-MX",
      "fr",
      "fr-FR",
      "fr-CA",
      "zh",
      "zh-CN",
      "zh-TW",
      "hi",
      "hi-IN",
      "ja",
      "ja-JP",
      "ru",
      "ru-RU",
      "ko",
      "ko-KR",
      "de",
      "de-DE",
    ],
  },
});
