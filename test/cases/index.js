// if next disable directive is meaningless, error will be thrown by `reportUnusedDisableDirectives: "error"`
// eslint-disable-next-line unused-imports/no-unused-imports
import { AssertionError } from "assert";

// eslint-disable-next-line import/newline-after-import
import foo from "./foo";
foo.bar();

// eslint-disable-next-line no-undef
console.log("foobar");

// eslint-disable-next-line no-var
var _baz = 1;
