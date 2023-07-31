import * as React from "react";
import { GlobalContext } from "./global";

export interface IFiltersContext {
  name: string | undefined;
  selectOne: string | undefined;
  selectTwo: string | undefined;
}

export const defaultFiltersContext: IFiltersContext = {
  name: undefined,
  selectOne: undefined,
  selectTwo: undefined,
};

export const useFiltersContext = () => {
  const [globalContext, setGlobalContext] = React.useContext(GlobalContext);

  const filters: IFiltersContext = globalContext.filters;

  const setFilters = (newFilters: IFiltersContext) => {
    setGlobalContext((oldGlobalContext) => ({ ...oldGlobalContext, filters: newFilters }));
  };

  return { filters, setFilters };
};
