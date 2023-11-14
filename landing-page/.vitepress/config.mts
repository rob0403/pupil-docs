import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vitepress";

const url = `https://docs-staging.pupil-labs.com/`;

import { config as default_config } from "./../../default_config.mts";
import { theme_config as default_theme_config } from "./../../default_config.mts";

const theme_config_additions = {
  nav: [
    { text: "Neon", link: url + "neon/", target: "_self" },
    { text: "Invisible", link: url + "invisible/", target: "_self" },
    { text: "Core", link: url + "core/", target: "_self" },
    { text: "Alpha Lab", link: url + "alpha-lab/", target: "_self" },
  ],
};

const theme_config = { ...default_theme_config, ...theme_config_additions };

const config_additions = {
  title: "Pupil Labs Documentation",
  description: "Documentation for all Pupil Labs products.",
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPNavBar\.vue$/,
          replacement: fileURLToPath(
            new URL(
              "./../../components/header/CustomNavBar.vue",
              import.meta.url
            )
          ),
        },
        {
          find: /^.*\/VPDocFooter\.vue$/,
          replacement: fileURLToPath(
            new URL(
              "./../../components/CustomDocFooter.vue",
              import.meta.url
            )
          ),
        },
        {
          find: "@components",
          replacement: fileURLToPath(
            new URL("./../../components", import.meta.url)
          ),
        },
      ],
    },
  },
};

export default defineConfig({
  ...default_config,
  ...config_additions,
  themeConfig: theme_config,
});
