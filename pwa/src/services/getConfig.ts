import Conduction from "./../../static/configFiles/conduction.json";
import Dinkelland from "./../../static/configFiles/dinkelland.json";
import Epe from "./../../static/configFiles/epe.json";
import Noaberkracht from "./../../static/configFiles/noaberkracht.json";
import Noordwijk from "./../../static/configFiles/noordwijk.json";
import OpenWebconcept from "./../../static/configFiles/open-webconcept.json";
import Rotterdam from "./../../static/configFiles/rotterdam.json";
import Tubbergen from "./../../static/configFiles/tubbergen.json";
import Xxllnc from "./../../static/configFiles/xxllnc.json";
import Barendrecht from "./../../static/configFiles/barendrecht.json";
import Ridderkerk from "./../../static/configFiles/ridderkerk.json";
import Buren from "./../../static/configFiles/buren.json";
import Albrandswaard from "./../../static/configFiles/albrandswaard.json";
import StedeBroec from "./../../static/configFiles/stede-broec.json";
import Lansingerland from "./../../static/configFiles/lansingerland.json";
import Waddinxveen from "./../../static/configFiles/waddinxveen..json";
import RijssenHolten from "./../../static/configFiles/rijssen-holten.json";
import HoekscheWaard from "./../../static/configFiles/hoeksche-waard.json";
import Texel from "./../../static/configFiles/texel.json";
import { TGroupedSelectOption } from "@conduction/components/lib/components/formFields/select/select";

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
      // case "localhost": // development purposes
      return OpenWebconcept;

    case "barendrecht":
      return Barendrecht;
    case "ridderkerk":
      return Ridderkerk;
    case "buren":
      return Buren;
    case "albrandswaard":
      return Albrandswaard;
    case "stedebroec":
      return StedeBroec;
    case "lansingerland":
      return Lansingerland;
    case "waddinxveen":
      return Waddinxveen;
    case "rijssen-holten":
      return RijssenHolten;
    case "hoeksche-waard":
      return HoekscheWaard;
    case "texel":
      return Texel;

    default:
      return Conduction;
  }
};

export const availableThemes: TGroupedSelectOption[] = [
  {
    label: "Alle overheidsorganisaties",
    options: [
      { label: "Alle overheidsorganisaties", value: "open-webconcept-theme" },
      // { label: "Conduction", value: "conduction-theme" },
      // { label: "XXLLNC", value: "xxllnc-theme" },
    ],
  },
  {
    label: "Gemeenten",
    options: [
      { label: "Albrandswaard", value: "albrandswaard" },
      { label: "Barendrecht", value: "barendrecht" },
      { label: "Buren", value: "buren" },
      { label: "Dinkelland", value: "dinkelland-theme" },
      { label: "Epe", value: "epe-theme" },
      { label: "Hoeksche Waard", value: "hoeksche-waard" },
      { label: "Lansingerland", value: "lansingerland" },
      { label: "Noordwijk", value: "noordwijk-theme" },
      { label: "Ridderkerk", value: "ridderkerk" },
      { label: "Rijssen-Holten", value: "rijssen-holten" },
      { label: "Rotterdam", value: "rotterdam-theme" },
      { label: "Stede Broec", value: "stedebroec" },
      { label: "Texel", value: "texel" },
      { label: "Tubbergen", value: "tubbergen-theme" },
      { label: "Waddinxveen", value: "waddinxveen" },
    ],
  },
  {
    label: "Regionale samenwerkingsorganen",
    options: [{ label: "Noaberkracht", value: "noaberkracht-theme" }],
  },
];
