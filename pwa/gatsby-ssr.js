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

export const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  const isBrowser = () => typeof window !== "undefined";
  const HeadComponents = [<title key={0}>Woo Website</title>];
  const BodyComponents = [
    isBrowser() && window.sessionStorage.getItem("ANALYTICS_URL") ? (
      <script
        key={0}
        id="analytics"
        async
        src={window.sessionStorage.getItem("ANALYTICS_URL")}
      />
    ) : (
      <script key={0} id="analytics" />
    ),
  ];
  setHeadComponents(HeadComponents);
  setPostBodyComponents(BodyComponents);
};
