// In your project, you always can define an common Any type to avoid any error.

type Record<K extends keyof T> = {
  [P in K]: T;
};

export type Any = Record;

// definition (examples) could be following:

interface anyInterface {
  anything: Any;
}

let anyExample: Any;

// Difference between interface and type: https://stackoverflow.com/questions/37233735/interfaces-vs-types-in-typescript
