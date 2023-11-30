import * as React from "react";
import { defaultGatsbyContext, IGatsbyContext } from "./gatsby";
import { defaultFiltersContext, IFiltersContext } from "./filters";
import { defaultDisplayContext, IDisplayContext } from "./displays";
import { defaultPaginationContext, IPaginationContext } from "./pagination";
import { defaultQueryLimitContext, IQueryLimitContext } from "./queryLimit";
import { defaultCategoriesContext, ICategoriesContext } from "./categoryOptions";

export interface IGlobalContext {
  initiated: boolean;
  gatsby: IGatsbyContext;
  filters: IFiltersContext;
  displays: IDisplayContext;
  pagination: IPaginationContext;
  queryLimit: IQueryLimitContext;
  categoryOptions: ICategoriesContext;
}

export const defaultGlobalContext: IGlobalContext = {
  initiated: false,
  gatsby: defaultGatsbyContext,
  filters: defaultFiltersContext,
  displays: defaultDisplayContext,
  pagination: defaultPaginationContext,
  queryLimit: defaultQueryLimitContext,
  categoryOptions: defaultCategoriesContext,
};

export const GlobalContext = React.createContext<
  [IGlobalContext, React.Dispatch<React.SetStateAction<IGlobalContext>>]
>([defaultGlobalContext, () => null]);

export const GlobalProvider = GlobalContext.Provider;
