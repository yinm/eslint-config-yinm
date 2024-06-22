import yinmBase from "../src/index.js";
import yinmTypeScript from "../src/typescript.js";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [...yinmBase, ...yinmTypeScript];
