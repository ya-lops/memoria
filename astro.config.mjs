import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import alpine from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  compressHTML: true,
  build: {
    assets: "assets",
    inlineStylesheets: "never",
  },
  integrations: [
    alpine({
      entrypoint: "/src/entrypoint",
    }),
  ],
  vite: {
    css: {
      devSourcemap: true,
    },
  },
});
