import { UserAsClass, UserAsInterface } from "../types/omitExample";

// Interface format

export const newUserExample: UserAsInterface = {
  id: "101",
  name: "Test",
  username: "Test User Name",
  phone: "0011100",
  email: "test@test.co",
};

// Class format

export class NewUserInstance implements UserAsClass {
  constructor(
    readonly id: string,
    readonly name: string,
    readonly username: string,
    readonly email: string,
    readonly phone: string
  ) {}
} // https://www.typescriptlang.org/docs/handbook/modules.html

export const mockUsers = [
  {
    name: "Test",
    id: 121,
    email: "test@test.co",
  },
  {
    name: "Unknown",
    id: 522,
    email: "co@co.co",
  },
];
