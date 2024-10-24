import * as React from "react";
import { GlobalContext } from "./global";

export interface IFiltersContext {
  _search: string | undefined;
  "published[after]": string | undefined;
  "published[before]": string | undefined;
  categorie: string | undefined;
}

export const defaultFiltersContext: IFiltersContext = {
  _search: "",
  "published[after]": undefined,
  "published[before]": undefined,
  categorie: undefined,
};

export const useFiltersContext = () => {
  const [globalContext, setGlobalContext] = React.useContext(GlobalContext);

  const filters: IFiltersContext = globalContext.filters;

  const setFilters = (newFilters: IFiltersContext) => {
    setGlobalContext((oldGlobalContext) => ({ ...oldGlobalContext, filters: newFilters }));
  };

  return { filters, setFilters };
};
