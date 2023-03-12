import { useMutation, useQueryClient } from "@tanstack/react-query";
import { User } from "../types/omitExample";
import { createUser } from "../utils/api";

export const useUsersMutation = () => {
  const queryClient = useQueryClient();

  const create = useMutation({
    mutationFn: createUser,
    onMutate: async (user: User) => {
      await queryClient.cancelQueries({ queryKey: ["users"] });
      console.log("new user: ", user);

      queryClient.setQueryData<any>(["users"], (users: User[]) => [
        ...users,
        user,
      ]);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
    },
    onError: () => alert("Error occurred in UI .."),
    retry: 3,
  });

  return create;
};
