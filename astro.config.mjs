// @ts-check
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  server: { host: true },
  integrations: [react()],
  vite: {
    // @ts-expect-error;
    plugins: [tailwindcss()],
    server: { watch: { usePolling: true, interval: 100 } },
  },
});
