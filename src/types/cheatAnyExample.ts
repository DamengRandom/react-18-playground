import { Any } from "./cheatAny";
const numberAsAny: Any = 1; // the Any type which defined in cheatAny.d.ts file ..
const stringAsAny: Any = "2";

export const stringPlusNumber = stringAsAny + numberAsAny;
export const stringMinusNumber = stringAsAny - numberAsAny;
export const stringMultiplyNumber = stringAsAny * numberAsAny;
export const stringDivideNumber = stringAsAny / numberAsAny;

console.log("stringPlusNumber (Different only): ", stringPlusNumber);
console.log("stringMinusNumber (Normal calculation): ", stringMinusNumber);
console.log(
  "stringMultiplyNumber (Normal calculation): ",
  stringMultiplyNumber
);
console.log("stringDivideNumber (Normal calculation): ", stringDivideNumber);
