import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

export const wrapRootElement = ({ element }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnmount: false,
        refetchOnReconnect: false,
        retry: 1,
        retryDelay: 2000,
        staleTime: 1000 * 60 * 60, // one hour
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      {element}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};
