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
export type OmitUser = Omit<User, "id" | "address" | "company" | "website">;

// we can re-define some props type as we want, below is an common example:
export interface UserAsClass extends OmitUser {
  readonly id: string;
}

// new defined NewUser can be exported as class
export class UserAsClass {}

export interface UserAsInterface extends OmitUser {
  readonly id: string;
}
