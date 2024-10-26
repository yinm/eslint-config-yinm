// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { OtherA } from "./other";
// eslint-disable-next-line @typescript-eslint/no-import-type-side-effects
import { type OtherB } from "./other";

type _A = OtherA;
type _B = OtherB;

// eslint-disable-next-line @typescript-eslint/array-type
type _Foo = Array<string>;
