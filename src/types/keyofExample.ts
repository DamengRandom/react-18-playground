// ######################################### first real life use case #########################################
export interface Example {
  value1: string;
  value2: number;
}

type exampleKeys = keyof Example;

const value: keyof exampleKeys = 3;

console.log("value is: ", value);

// ######################################### second real life use case #########################################

const data = {
  v1: 1,
  v2: "2",
};

// function readValue(obj: object, keyName: string) {
//   return obj[keyName]; // can see the red line (wrong key and value)
// }

function readValue<T extends object, K extends keyof T>(
  obj: T,
  keyName: K
): T[K] {
  return obj[keyName];
}

console.log(readValue(data, "v2"));
