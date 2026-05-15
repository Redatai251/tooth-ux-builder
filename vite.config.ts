import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    spa: {
      enabled: true,
      maskPath: "/",
      prerender: {
        outputPath: "/index.html",
      },
    },
  },
  vite: {
    build: {
      outDir: "dist",
    },
  },
});
