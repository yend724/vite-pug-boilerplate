import { resolve } from "path";
import { defineConfig } from "vite";
import vitePluginPug from "./plugins/vite-plugin-pug";

export default defineConfig({
  root: "src",
  build: {
    outDir: resolve(__dirname, "dist"),
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src", "index.pug"),
      },
    },
  },
  plugins: [vitePluginPug()],
});
