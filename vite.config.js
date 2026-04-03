import fs from "node:fs";
import path from "node:path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  base: "/litter-box/",
  publicDir: "images",
  plugins: [
    vue(),
    {
      name: "copy-github-pages-404",
      closeBundle() {
        const source = path.resolve(__dirname, "404.html");
        const target = path.resolve(__dirname, "dist", "404.html");
        if (fs.existsSync(source)) {
          fs.copyFileSync(source, target);
        }
      },
    },
  ],
});
