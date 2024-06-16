import js from "@eslint/js";
import pluginImport from "eslint-plugin-import-x";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  js.configs.recommended,

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
    linterOptions: {
      reportUnusedDisableDirectives: "error",
    },
  },
];
