import * as React from "react";
import { GlobalContext } from "./global";

export type TResultsDisplayLayout = "cards" | "table";

export interface IDisplayContext {
  [key: string]: TResultsDisplayLayout;
}

export const defaultDisplayContext: IDisplayContext = {};

export const useDisplayContext = () => {
  const [globalContext, setGlobalContext] = React.useContext(GlobalContext);

  const displays: IDisplayContext = globalContext.displays;

  const setDisplay = (newDisplay: IDisplayContext) => {
    setGlobalContext((oldGlobalContext) => ({ ...oldGlobalContext, displays: newDisplay }));
  };

  const isActive = (key: string, expectedValue: TResultsDisplayLayout): boolean => displays[key] === expectedValue;

  return { displays, setDisplay, isActive };
};
