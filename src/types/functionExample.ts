// export function sum(a, b) { // if we don't put type for a and b, will get error: error TS7006: Parameter 'a' implicitly has an 'any' type.
//   return a + b;
// }

// export function sum(a: number, b: number) { // not good enough, please ensure return value also has a type, more completed
//   return a + b;
// }

export function sum(a: number = 0, b: number = 0): number {
  return a + b;
}

export function name(firstName: string = "fn", lastName: string = "ln") {
  // remember to give a default value if necessary !!!!
  return firstName + "-" + lastName;
}

export function fetchData(url: string = ""): Promise<string> {
  return Promise.resolve(`Data from ${url}`);
}

console.log(sum(1, 2));
console.log(sum());

console.log(name("first", "second"));
console.log(name());

fetchData().then((res) => console.log(res));
