import * as React from "react";
import { GlobalContext } from "./global";

export const queryLimitDefault = 12;

export interface IQueryLimitContext {
  objectsQueryLimit: number;
}

export const defaultQueryLimitContext: IQueryLimitContext = {
  objectsQueryLimit: queryLimitDefault,
};

export const useQueryLimitContext = () => {
  const [globalContext, setGlobalContext] = React.useContext(GlobalContext);

  const queryLimit: IQueryLimitContext = globalContext.queryLimit;

  const setQueryLimit = (query: IQueryLimitContext) => {
    setGlobalContext((context) => ({ ...context, queryLimit: { ...globalContext.queryLimit, ...query } }));
  };

  return { setQueryLimit, queryLimit };
};
