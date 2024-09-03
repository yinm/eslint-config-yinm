import js from "@eslint/js";
import pluginImport from "eslint-plugin-import-x";
import unusedImports from "eslint-plugin-unused-imports";

/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended,
  {
    rules: {
      "no-var": "error",
    },
  },

  {
    plugins: {
      import: pluginImport,
    },
    rules: {
      // Helpful warnings
      "import/export": "error",
      "import/no-deprecated": "error",
      "import/no-extraneous-dependencies": "error",
      "import/no-mutable-exports": "error",

      // Static analysis
      "import/no-absolute-path": "error",
      "import/no-self-import": "error",

      // Style guide
      "import/first": "error",
      "import/newline-after-import": "error",
      "import/no-duplicates": "error",
      "import/no-named-default": "error",
      "import/order": [
        "error",
        { alphabetize: { order: "asc", orderImportKind: "asc" } },
      ],
    },
  },

  {
    plugins: {
      "unused-imports": unusedImports,
    },
    rules: {
      "no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "error",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
    },
  },

  {
    linterOptions: {
      reportUnusedDisableDirectives: "error",
    },
  },
];
