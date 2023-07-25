import * as React from "react";
import { useQuery } from "react-query";
import APIService from "../../apiService/apiService";
import APIContext from "../../apiService/apiContext";

export const useGitHub = () => {
  const API: APIService | null = React.useContext(APIContext);

  const getContent = (filePath: string) =>
    useQuery<any, Error>(["contents", filePath], () => API?.GitHub.getContent(filePath), {
      onError: (error) => {
        console.warn(error.message);
      },
    });

  const getDirectoryItems = (directoryPath: string) =>
    useQuery<any[], Error>(["directory-items", directoryPath], () => API?.GitHub.getDirectoryItems(directoryPath), {
      onError: (error) => {
        console.warn(error.message);
      },
    });

  return { getContent, getDirectoryItems };
};
