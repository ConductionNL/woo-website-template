import * as React from "react";
import { GlobalContext } from "./global";

export interface IFiltersContext {
  _search: string | undefined;
  "Publicatiedatum[after]": string | undefined;
  "Publicatiedatum[before]": string | undefined;
  Categorie: string | undefined;
}

export const defaultFiltersContext: IFiltersContext = {
  _search: "",
  "Publicatiedatum[after]": undefined,
  "Publicatiedatum[before]": undefined,
  Categorie: undefined,
};

export const useFiltersContext = () => {
  const [globalContext, setGlobalContext] = React.useContext(GlobalContext);

  const filters: IFiltersContext = globalContext.filters;

  const setFilters = (newFilters: IFiltersContext) => {
    setGlobalContext((oldGlobalContext) => ({ ...oldGlobalContext, filters: newFilters }));
  };

  return { filters, setFilters };
};
