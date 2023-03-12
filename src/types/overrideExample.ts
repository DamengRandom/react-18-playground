// https://www.youtube.com/watch?v=tD7DM99nH30

interface User {
  name: string;
  id: string;
  email?: string;
}

interface UserOptionals {
  // override with optional interface setup
  name?: string;
  id?: string;
  email?: string;
}

export const merge = (user: User, overrides: UserOptionals): User => {
  return {
    ...user,
    ...overrides,
  };
};

console.log(
  merge(
    {
      name: "Test",
      id: "fizz",
      email: "test@test.co",
    },
    {
      email: "changed@changed.co",
    }
  )
);
