import js from "@eslint/js";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

import eslintConfigPrettier from "eslint-config-prettier/flat";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintPluginImport from "eslint-plugin-import";

/** @type {import("eslint").Linter.Config[]} */
export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    // react hook setting
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
  {
    // allow unused variables/args starting with underscore and any types
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          varsIgnorePattern: "^_",
          argsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
  {
    // prettier setting
    ...eslintConfigPrettier,
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      ...eslintPluginPrettier.configs.recommended.rules,
    },
  },

  // import setting
  {
    plugins: {
      import: eslintPluginImport,
    },
    rules: {
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "object",
            "type",
          ],
          pathGroups: [
            { pattern: "@/app/**", group: "internal", position: "after" },
            { pattern: "@/pages/**", group: "internal", position: "after" },
            { pattern: "@/widgets/**", group: "internal", position: "after" },
            { pattern: "@/features/**", group: "internal", position: "after" },
            { pattern: "@/entities/**", group: "internal", position: "after" },
            { pattern: "@/shared/**", group: "internal", position: "after" },
          ],
          pathGroupsExcludedImportTypes: ["builtin", "external"],
          "newlines-between": "always",
        },
      ],
      // Merge duplicate imports from the same module into a single statement
      "import/no-duplicates": [
        "error",
        { considerQueryString: true, "prefer-inline": true },
      ],
      // Disable core rule to avoid conflicts with eslint-plugin-import
      "no-duplicate-imports": "off",
    },
  },

  // TypeScript setting
  // ...tseslint.configs.recommended,
  {
    ignores: [
      "dist",
      "node_modules",
      ".git",
      "eslint.config.js",
      "**/*.config.{js,ts}",
    ],
  },
];
