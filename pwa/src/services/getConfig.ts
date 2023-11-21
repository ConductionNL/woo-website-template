import Conduction from "./../../static/configFiles/conduction.json";
import Dinkelland from "./../../static/configFiles/dinkelland.json";
import Epe from "./../../static/configFiles/epe.json";
import Noaberkracht from "./../../static/configFiles/noaberkracht.json";
import Noordwijk from "./../../static/configFiles/noordwijk.json";
import OpenWebconcept from "./../../static/configFiles/open-webconcept.json";
import Rotterdam from "./../../static/configFiles/rotterdam.json";
import Tubbergen from "./../../static/configFiles/tubbergen.json";
import Xxllnc from "./../../static/configFiles/xxllnc.json";

export const getConfig = (themeOrDomainName: string): Record<string, any> | undefined => {
  switch (themeOrDomainName) {
    case "open.epe.nl":
    case "epe-theme":
      return Epe;
    case "open.noordwijk.nl":
    case "noordwijk-theme":
      return Noordwijk;
    case "open.rotterdam.nl":
    case "rotterdam-theme":
      return Rotterdam;
    case "open.noaberkracht.nl":
    case "noaberkracht-theme":
      return Noaberkracht;
    case "open.tubbergen.nl":
    case "tubbergen-theme":
      return Tubbergen;
    case "open.dinkelland.nl":
    case "dinkelland-theme":
      return Dinkelland;
    case "open.xxllnc.nl":
    case "xxllnc-theme":
      return Xxllnc;
    case "koophulpje.nl":
    case "open-webconcept-theme":
    case "localhost":
      return OpenWebconcept;
    default:
      return Conduction;
  }
};

export const availableThemes: { label: string; value: string }[] = [
  {
    label: "Koophulpje",
    value: "open-webconcept-theme",
  },
  {
    label: "Conduction",
    value: "conduction-theme",
  },
  {
    label: "Dinkelland",
    value: "dinkelland-theme",
  },
  {
    label: "Epe",
    value: "epe-theme",
  },
  {
    label: "Noaberkracht",
    value: "noaberkracht-theme",
  },
  {
    label: "Noordwijk",
    value: "noordwijk-theme",
  },
  {
    label: "Rotterdam",
    value: "rotterdam-theme",
  },
  {
    label: "Tubbergen",
    value: "tubbergen-theme",
  },
  {
    label: "XXLLNC",
    value: "xxllnc-theme",
  },
];
