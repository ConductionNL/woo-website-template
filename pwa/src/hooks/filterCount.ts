import * as React from "react";
import { useQuery } from "react-query";
import APIService from "../apiService/apiService";
import APIContext from "../apiService/apiContext";

export const useFilterCount = () => {
  const API: APIService | null = React.useContext(APIContext);

  const getCategoryCount = () =>
    useQuery<any, Error>(["CategoryCount"], () => API?.FilterCount.getCategoryCount(), {
      onError: (error) => {
        console.warn(error.message);
      },
    });

  return { getCategoryCount };
};
