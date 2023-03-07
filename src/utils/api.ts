export const fetchUsers = async () => {
  const url: string = "https://jsonplaceholder.typicode.com/users";

  try {
    const response = await fetch(url);

    if (response.status !== 200)
      throw new Error("Error occurred during fetching users ..");

    const json = response.json();

    return json;
  } catch (error) {
    console.error("Error: ", error);
    return error;
  }
};

export const createUser = async (user: any) => {
  const url: string = "https://jsonplaceholder.typicode.com/users";

  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(user),
    });

    if (response.status !== 201)
      throw new Error("Error occurred during creating a new user ..");

    return response;
  } catch (error) {
    console.error("Error: ", error);
    return error;
  }
};
