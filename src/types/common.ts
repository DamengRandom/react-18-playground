type Geo = {
  lat: string;
  lng: string;
};

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};

type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

// we can pick + exclude the props we need and define as a new type !!
export type BasicUser = Omit<User, "address" | "company" | "website" | "phone">;

// we can re-define some props type as we want, below is an common example:
export interface NewUser extends BasicUser {
  readonly phone: number;
}

// new defined NewUser can be exported as class
export class NewUser {}
