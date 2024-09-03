import yinmBase from "../src/index.js";
import yinmReact from "../src/react.js";
import yinmTypeScript from "../src/typescript.js";

/** @type {import('eslint').Linter.Config[]} */
export default [...yinmBase, ...yinmTypeScript, ...yinmReact];
