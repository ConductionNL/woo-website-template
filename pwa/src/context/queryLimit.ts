import * as React from "react";
import { GlobalContext } from "./global";

export const QUERY_LIMIT_DEFAULT = 12;

export interface IQueryLimitContext {
  openWooObjectsQueryLimit: number;
  previousOpenWooObjectsQueryLimit: number;
}

export const defaultQueryLimitContext: IQueryLimitContext = {
  openWooObjectsQueryLimit: QUERY_LIMIT_DEFAULT,
  previousOpenWooObjectsQueryLimit: QUERY_LIMIT_DEFAULT,
};

export const useQueryLimitContext = () => {
  const [globalContext, setGlobalContext] = React.useContext(GlobalContext);

  const queryLimit: IQueryLimitContext = globalContext.queryLimit;

  const setQueryLimit = (query: IQueryLimitContext) => {
    setGlobalContext((context) => ({ ...context, queryLimit: { ...globalContext.queryLimit, ...query } }));
  };

  return { setQueryLimit, queryLimit };
};
