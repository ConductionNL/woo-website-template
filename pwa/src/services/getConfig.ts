import Rotterdam from "./../../static/configFiles/rotterdam.json";

export const getConfig = (domain: string): Record<string, any> | undefined => {
  switch (domain) {
    case "localhost":
      return Rotterdam as Record<string, any>;
  }
};
