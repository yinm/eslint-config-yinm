/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    linterOptions: {
      reportUnusedDisableDirectives: "error",
    },
    rules: {
      semi: [2, "always"],
    },
  },
];
