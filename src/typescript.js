import tseslint from "typescript-eslint";

export default tseslint.config(
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,

  {
    rules: {
      // Use `unused-imports/no-unused-vars` instead
      "@typescript-eslint/no-unused-vars": "off",

      // https://zenn.dev/teppeis/articles/2023-04-typescript-5_0-verbatim-module-syntax
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { fixStyle: "inline-type-imports" },
      ],
      "@typescript-eslint/no-import-type-side-effects": "error",
    },
  }
);
