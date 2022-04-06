import { vitePluginPugBuild } from "./vite-plugin-pug-build";
import { vitePluginPugServe } from "./vite-plugin-pug-serve";

const vitePluginPug = () => {
  return [vitePluginPugBuild(), vitePluginPugServe()];
};
export default vitePluginPug;