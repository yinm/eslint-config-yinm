import tseslint from "typescript-eslint";

export default tseslint.config(
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,

  {
    rules: {
      // Use `unused-imports/no-unused-vars` instead
      "@typescript-eslint/no-unused-vars": "off",
    },
  }
);
