import * as React from "react";
import { GlobalContext } from "./global";

export interface IFiltersContext {
  _search: string | undefined;
  "Ontvangstdatum[after]": string | undefined;
  "Ontvangstdatum[before]": string | undefined;
  publicationType: string | undefined;
}

export const defaultFiltersContext: IFiltersContext = {
  _search: "",
  "Ontvangstdatum[after]": undefined,
  "Ontvangstdatum[before]": undefined,
  publicationType: undefined,
};

export const useFiltersContext = () => {
  const [globalContext, setGlobalContext] = React.useContext(GlobalContext);

  const filters: IFiltersContext = globalContext.filters;

  const setFilters = (newFilters: IFiltersContext) => {
    setGlobalContext((oldGlobalContext) => ({ ...oldGlobalContext, filters: newFilters }));
  };

  return { filters, setFilters };
};
