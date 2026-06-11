import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import json from "@eslint/json";

export default [

  // 1. TELL ESLINT TO IGNORE AUTO-GENERATED FILES
  {
    ignores: ["node_modules/**", "package-lock.json"],
  },
  // 2. JavaScript Rules
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: {
      js,
      react: pluginReact
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest
      }
    },
    rules: {
      ...js.configs.recommended.rules,
    }
  },


  // 3. JSON Rules (Kept completely separate from React)
  {
    files: ["**/*.json"],
    plugins: { json },
    language: "json/json",
    rules: {
      ...json.configs.recommended.rules
    }
  }
];
