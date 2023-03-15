// https://www.youtube.com/watch?v=tD7DM99nH30

interface User {
  name: string;
  id: number;
  email?: string;
}

// @TODO put it inside exampleMock.ts file
const mockUsers = [
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

type UserWithoutId = Omit<User, "id">;

// V1

// export const mapById = (users: User[]): Record<string, User> => { // Basic Record version (example)
//   return users.reduce((acc, cur) => {
//     return {
//       ...acc,
//       [cur.id]: cur,
//     };
//   }, {});
// };

// V2

// export const mapById = (users: User[]): Record<string, UserWithoutId> => { // Omit version (exclude id)
//   return users.reduce((acc, cur) => {
//     const { id, ...rest } = cur;

//     return {
//       ...acc,
//       [id]: rest,
//     };
//   }, {});
// };

// V3

export const mapById = (users: User[]): Record<User["id"], UserWithoutId> => {
  // use User["id"] instead of hardcode as a `string` type
  // Omit version (exclude id)
  return users.reduce((acc, cur) => {
    const { id, ...rest } = cur;

    return {
      ...acc,
      [id]: rest,
    };
  }, {});
};

console.log("The result: ", mapById(mockUsers));
