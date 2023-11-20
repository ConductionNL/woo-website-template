import Conduction from "./../../static/configFiles/conduction.json";
import Dinkelland from "./../../static/configFiles/dinkelland.json";
import Epe from "./../../static/configFiles/epe.json";
import Noaberkracht from "./../../static/configFiles/noaberkracht.json";
import Noordwijk from "./../../static/configFiles/noordwijk.json";
import Rotterdam from "./../../static/configFiles/rotterdam.json";
import Tubbergen from "./../../static/configFiles/tubbergen.json";
import Xxllnc from "./../../static/configFiles/xxllnc.json";

export const getConfig = (domain: string): Record<string, any> | undefined => {
  switch (domain) {
    case "open.epe.nl":
      return Epe as Record<string, any>;
    case "open.noordwijk.nl":
      return Noordwijk as Record<string, any>;
    // case "open.rotterdam.nl":
    //   return Rotterdam as Record<string, any>;
    // case "open.noaberkracht.nl":
    //   return Noaberkracht as Record<string, any>;
    // case "open.tubbergen.nl":
    //   return Tubbergen as Record<string, any>;
    // case "open.dinkelland.nl":
    //   return Dinkelland as Record<string, any>;
    // case "open.xxllnc.nl":
    //   return Xxllnc as Record<string, any>;
    default:
      return Conduction as Record<string, any>;
  }
};
