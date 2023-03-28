export type ConvertTyper<Type> = {
  [Property in keyof Type]: boolean;
};

type BeforeMappedType = {
  attributeOne: () => void;
  attributeTwo: string;
};

type AfterMappedType = ConvertTyper<BeforeMappedType>;

const exampleUsage: AfterMappedType = {
  attributeOne: false,
  attributeTwo: true,
};

console.log("Example: ", exampleUsage);
