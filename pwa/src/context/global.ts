import * as React from "react";
import { defaultGatsbyContext, IGatsbyContext } from "./gatsby";

export interface IGlobalContext {
  initiated: boolean;
  gatsby: IGatsbyContext;
}

export const defaultGlobalContext: IGlobalContext = {
  initiated: false,
  gatsby: defaultGatsbyContext,
};

export const GlobalContext = React.createContext<
  [IGlobalContext, React.Dispatch<React.SetStateAction<IGlobalContext>>]
>([defaultGlobalContext, () => null]);

export const GlobalProvider = GlobalContext.Provider;
