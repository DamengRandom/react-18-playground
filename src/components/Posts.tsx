import { useQuery } from "@tanstack/react-query";
import { useUsersMutation } from "../hooks/useUsersMutation";
import { fetchUsers } from "../utils/api";

const useUsersQuery = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
};

export default function Posts() {
  const { error, isLoading, data } = useUsersQuery();
  const create = useUsersMutation();

  if (isLoading) return <div>Loading ..</div>;

  if (error) return <div>Error</div>;

  return (
    <div>
      <code>{JSON.stringify(data, null, 2)}</code>
      <br />
      <button
        onClick={() => {
          create.mutate({
            id: 11,
            name: "Damon Test",
            username: "Dameng",
            email: "test@test.co",
            address: {
              street: "Haha Plains",
              suite: "Suite 879",
              city: "Wisokyburgh",
              zipcode: "90566-7771",
              geo: {
                lat: "-43.9509",
                lng: "-34.4618",
              },
            },
            phone: "010-692-6593 x09125",
            website: "anastasia.net",
            company: {
              name: "Deckow-Crist",
              catchPhrase: "Proactive didactic contingency",
              bs: "synergize scalable supply-chains",
            },
          });
        }}
      >
        Create a new mock user
      </button>
    </div>
  );
}
