import React from "react";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function RQD() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["answer"],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:7328/api/oa-ask?words=${"what is openai temperature does"}`
      );

      if (!response.ok) throw new Error("not ok ..");

      return response.json();
    },
  });

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error fetching data</div>;

  return (
    <QueryClientProvider client={queryClient}>
      <p>{JSON.stringify(data, null, 2)}</p>
    </QueryClientProvider>
  );
}
