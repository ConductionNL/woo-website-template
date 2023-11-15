import Conduction from "./../../static/configFiles/conduction.json";
import Epe from "./../../static/configFiles/epe.json";
import Noordwijk from "./../../static/configFiles/noordwijk.json";

export const getConfig = (domain: string): Record<string, any> | undefined => {
  switch (domain) {
    case "open.epe.nl":
      return Epe as Record<string, any>;
    case "open.noordwijk.nl":
      return Noordwijk as Record<string, any>;
    default:
      return Conduction as Record<string, any>;
  }
};
