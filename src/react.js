import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
    plugins: {
      react,
      "react-hooks": reactHooks,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      "react/button-has-type": 2,
      "react/jsx-boolean-value": 2,
      "react/jsx-curly-brace-presence": ["error", "never"],
      "react/jsx-key": 2,
      "react/jsx-no-duplicate-props": 2,
      "react/jsx-no-target-blank": [2, { allowReferrer: true }],
      "react/no-deprecated": 2,
      "react/self-closing-comp": 2,

      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "error",
    },
  },
];
