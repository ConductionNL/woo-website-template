import Epe from "./../../static/configFiles/epe.json";

export const getConfig = (domain: string): Record<string, any> | undefined => {
  switch (domain) {
    case "open.epe.nl":
      return Epe as Record<string, any>;
  }
};
