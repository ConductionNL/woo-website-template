import * as React from "react";
import { GlobalContext } from "./global";

export interface IPaginationContext {
  currentPage: number;
}

export const defaultPaginationContext: IPaginationContext = {
  currentPage: 1,
};

export const usePaginationContext = () => {
  const [globalContext, setGlobalContext] = React.useContext(GlobalContext);
  const [currentPage, setCurrentPage] = React.useState<number>(globalContext.pagination.currentPage);

  React.useEffect(() => {
    setPagination({ currentPage });
  }, [currentPage]);

  const setPagination = (newFilters: IPaginationContext) => {
    setGlobalContext((oldGlobalContext) => ({ ...oldGlobalContext, pagination: newFilters }));
  };

  return { currentPage, setCurrentPage };
};
