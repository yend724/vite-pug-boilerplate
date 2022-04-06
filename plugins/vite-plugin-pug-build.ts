import fs from "fs";
import type { Plugin } from "vite";
import { compileFile } from "pug";

export const vitePluginPugBuild = (): Plugin => {
  const pathMap: Record<string, string> = {};
  return {
    name: "vite-plugin-pug-build",
    enforce: "pre",
    apply: "build",
    resolveId(id: string) {
      if (id.endsWith(".pug")) {
        const dummy = `${
          id.slice(0, Math.max(0, id.lastIndexOf("."))) || id
        }.html`;
        pathMap[dummy] = id;
        return dummy;
      }
    },
    load(id: string) {
      if (id.endsWith(".html")) {
        if (pathMap[id]) {
          const html = compileFile(pathMap[id])();
          return html;
        }
        return fs.readFileSync(id, "utf-8");
      }
    },
  };
};
