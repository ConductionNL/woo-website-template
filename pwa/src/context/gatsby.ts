import * as React from "react";
import { GlobalContext } from "./global";

export interface IGatsbyContext {
  pageContext: any;
  location: any;
}

export const defaultGatsbyContext: IGatsbyContext = {
  pageContext: null,
  location: null,
};

export const useGatsbyContext = () => {
  const [globalContext] = React.useContext(GlobalContext);

  const gatsbyContext: IGatsbyContext = globalContext.gatsby;

  return { gatsbyContext };
};
