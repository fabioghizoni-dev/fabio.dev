// @ts-check
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  server: { host: true },
  integrations: [react()],
  // @ts-expect-error: tailwindcss not PluginOption[];
  vite: { plugins: [tailwindcss()] },
});
