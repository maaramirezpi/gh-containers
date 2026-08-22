import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,jsx}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser } },
  pluginReact.configs.flat.recommended,
  // React 18 + @vitejs/plugin-react use the automatic JSX runtime, so JSX needs no React import
  pluginReact.configs.flat["jsx-runtime"],
  { settings: { react: { version: "detect" } } },
  // vitest is configured with globals: true (see vite.config.js)
  { files: ["**/*.test.{js,jsx}", "src/test/**"], languageOptions: { globals: globals.vitest } },
]);
