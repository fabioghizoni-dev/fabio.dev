// @ts-check
import tailwindcss from "@tailwindcss/vite";
import astroIcon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [astroIcon()],
  vite: {
    // @ts-expect-error;
    plugins: [tailwindcss()],
  },
});
