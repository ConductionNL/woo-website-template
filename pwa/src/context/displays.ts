import * as React from "react";
import { GlobalContext } from "./global";

export type TLandingDisplayLayout = "cards" | "table";

export interface IDisplayContext {
  landingDisplayLayout: TLandingDisplayLayout;
}

export const defaultDisplayContext: IDisplayContext = {
  landingDisplayLayout: "cards",
};

export const useDisplayContext = () => {
  const [globalContext, setGlobalContext] = React.useContext(GlobalContext);

  const displays: IDisplayContext = globalContext.displays;

  const setDisplay = (newDisplay: IDisplayContext) => {
    setGlobalContext((oldGlobalContext) => ({ ...oldGlobalContext, displays: newDisplay }));
  };

  return { displays, setDisplay };
};
