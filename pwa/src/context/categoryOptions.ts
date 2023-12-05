import * as React from "react";
import { GlobalContext } from "./global";
import { TGroupedSelectOption, TSelectOption } from "@conduction/components/lib/components/formFields/select/select";

export interface ICategoriesContext {
  options: TSelectOption[] | TGroupedSelectOption[];
}

export const defaultCategoriesContext: ICategoriesContext = {
  options: [],
};

export const useCategoriesContext = () => {
  const [globalContext, setGlobalContext] = React.useContext(GlobalContext);
  const categoryOptions: ICategoriesContext = globalContext.categoryOptions;

  const setCategoryOptions = (newFilters: ICategoriesContext) => {
    setGlobalContext((context) => ({ ...context, categoryOptions: { ...globalContext.categoryOptions, ...newFilters } }));
  };

  return { categoryOptions, setCategoryOptions };
};
