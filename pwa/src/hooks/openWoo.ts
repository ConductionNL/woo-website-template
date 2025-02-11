import * as React from "react";
import { QueryClient, useQuery } from "react-query";
import APIService from "../apiService/apiService";
import APIContext from "../apiService/apiContext";
import { IFiltersContext } from "../context/filters";

export const useOpenWoo = (queryClient: QueryClient) => {
  const API: APIService | null = React.useContext(APIContext);

  const getAll = (filters: IFiltersContext, currentPage: number, limit: number) =>
    useQuery<any, Error>(
      ["OpenWoo", filters, currentPage, limit, window.sessionStorage.getItem("OIDN_NUMBER")],
      () => API?.OpenWoo.getAll(filters, currentPage, limit),
      {
        onError: (error) => {
          console.warn(error.message);
        },
      },
    );

  const getOne = (requestId: string) =>
    useQuery<any, Error>(
      ["OpenWoo", requestId, window.sessionStorage.getItem("OIDN_NUMBER")],
      () => API?.OpenWoo.getOne(requestId),
      {
        initialData: () => queryClient.getQueryData<any[]>("OpenWoo")?.find((_OpenWoo) => _OpenWoo.id === requestId),
        onError: (error) => {
          throw new Error(error.message);
        },
        enabled: !!requestId,
      },
    );

  const getAttachments = (requestId: string) =>
    useQuery<any, Error>(
      ["OpenWoo-Attachments", requestId, window.sessionStorage.getItem("OIDN_NUMBER")],
      () => API?.OpenWoo.getAttachments(requestId),
      {
        initialData: () => queryClient.getQueryData<any[]>("OpenWoo")?.find((_OpenWoo) => _OpenWoo.id === requestId),
        onError: (error) => {
          throw new Error(error.message);
        },
        enabled: !!requestId,
      },
    );

  return { getAll, getOne, getAttachments };
};
