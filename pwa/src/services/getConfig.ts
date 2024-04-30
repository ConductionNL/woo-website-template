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
import Localhost from "./../../static/configFiles/localhost.json";
import Waddinxveen from "./../../static/configFiles/waddinxveen.json";
import RijssenHolten from "./../../static/configFiles/rijssen-holten.json";
import HoekscheWaard from "./../../static/configFiles/hoeksche-waard.json";
import Texel from "./../../static/configFiles/texel.json";
import Zutphen from "./../../static/configFiles/zutphen.json";
import Sloterburg from "./../../static/configFiles/sloterburg.json";
import Gouda from "./../../static/configFiles/gouda.json";
import Zuiddrecht from "./../../static/configFiles/zuiddrecht.json";
import GooiseMeren from "./../../static/configFiles/gooise-meren.json";
import Roosendaal from "./../../static/configFiles/roosendaal.json";
import { TGroupedSelectOption } from "@conduction/components/lib/components/formFields/select/select";

export const getConfig = (themeOrDomainName: string): Record<string, any> | undefined => {
  switch (themeOrDomainName) {
    case "epe-theme":
    case "open.epe.nl":
    case "epe.openwoo.app":
    case "epe.koophulpje.nl":
    case "acceptatie-open.epe.nl":
      return Epe;

    case "noordwijk-theme":
    case "open.noordwijk.nl":
    case "noordwijk.openwoo.app":
    case "noordwijk.koophulpje.nl":
    case "acceptatie-open.noordwijk.nl":
      return Noordwijk;

    case "rotterdam-theme":
    case "open.rotterdam.nl":
    case "rotterdam.openwoo.app":
    case "rotterdam.koophulpje.nl":
    case "acceptatie-open.rotterdam.nl":
      return Rotterdam;

    case "noaberkracht-theme":
    case "open.noaberkracht.nl":
    case "noaberkracht.openwoo.app":
    case "noaberkracht.koophulpje.nl":
    case "acceptatie-open.noaberkracht.nl":
      return Noaberkracht;

    case "tubbergen-theme":
    case "open.tubbergen.nl":
    case "tubbergen.openwoo.app":
    case "tubbergen.koophulpje.nl":
    case "acceptatie-open.tubbergen.nl":
      return Tubbergen;

    case "dinkelland-theme":
    case "open.dinkelland.nl":
    case "dinkelland.openwoo.app":
    case "dinkelland.koophulpje.nl":
    case "acceptatie-open.dinkelland.nl":
      return Dinkelland;

    case "xxllnc-theme":
    case "open.xxllnc.nl":
    case "xxllnc.openwoo.app":
    case "xxllnc.koophulpje.nl":
    case "acceptatie-open.xxllnc.nl":
      return Xxllnc;

    case "zutphen-theme":
    case "open.zutphen.nl":
    case "zutphen.openwoo.app":
    case "zutphen.koophulpje.nl":
    case "acceptatie-open.zutphen.nl":
      return Zutphen;

    case "zuiddrecht-theme":
    case "open.zuiddrecht.nl":
    case "zuiddrecht.openwoo.app":
    case "zuiddrecht.koophulpje.nl":
    case "acceptatie-open.zuiddrecht.nl":
      return Zuiddrecht;

    case "sloterburg-theme":
    case "open.sloterburg.nl":
    case "sloterburg.openwoo.app":
    case "sloterburg.koophulpje.nl":
    case "acceptatie-open.sloterburg.nl":
      return Sloterburg;

    case "gouda-theme":
    case "open.gouda.nl":
    case "gouda.openwoo.app":
    case "gouda.koophulpje.nl":
    case "acceptatie-open.gouda.nl":
      return Gouda;

    case "gooisemeren-theme":
    case "open.gooisemeren.nl":
    case "gooisemeren.openwoo.app":
    case "gooisemeren.koophulpje.nl":
    case "acceptatie-open.gooisemeren.nl":
      return GooiseMeren;

    case "roosendaal-theme":
    case "open.roosendaal.nl":
    case "roosendaal.openwoo.app":
    case "roosendaal.koophulpje.nl":
    case "acceptatie-open.roosendaal.nl":
      return Roosendaal;

    case "openwoo.app":
    case "koophulpje.nl":
    case "open-webconcept-theme":
      // case "localhost": // development purposes
      return OpenWebconcept;

    case "barendrecht":
    case "barendrecht.koophulpje.nl":
    case "barendrecht.openwoo.app":
      return Barendrecht;

    case "ridderkerk":
    case "ridderkerk.koophulpje.nl":
    case "ridderkerk.openwoo.app":
      return Ridderkerk;

    case "buren":
    case "buren.koophulpje.nl":
    case "buren.openwoo.app":
      return Buren;

    case "albrandswaard":
    case "albrandswaard.koophulpje.nl":
    case "albrandswaard.openwoo.app":
      return Albrandswaard;

    case "stedebroec":
    case "stedebroec.koophulpje.nl":
    case "stedebroec.openwoo.app":
      return StedeBroec;

    case "lansingerland":
    case "lansingerland.koophulpje.nl":
    case "lansingerland.openwoo.app":
      return Lansingerland;

    case "waddinxveen":
    case "waddinxveen.koophulpje.nl":
    case "waddinxveen.openwoo.app":
      return Waddinxveen;

    case "rijssen-holten":
    case "rijssen-holten.koophulpje.nl":
    case "rijssen-holten.openwoo.app":
      return RijssenHolten;

    case "hoeksche-waard":
    case "hoeksche-waard.koophulpje.nl":
    case "hoeksche-waard.openwoo.app":
      return HoekscheWaard;

    case "texel":
    case "texel.koophulpje.nl":
    case "texel.openwoo.app":
      return Texel;

    case "localhost":
      return Localhost;

    default:
      return OpenWebconcept;
  }
};

export const availableThemes: TGroupedSelectOption[] = [
  {
    label: "Alle overheidsorganisaties",
    options: [
      { label: "Alle overheidsorganisaties", value: "open-webconcept-theme" },
      // { label: "Conduction", value: "conduction-theme" },
      // { label: "XXLLNC", value: "xxllnc-theme" },
      // { label: "Localhost", value: "localhost" },
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
      { label: "Gouda", value: "gouda-theme" },
      { label: "Hoeksche Waard", value: "hoeksche-waard" },
      { label: "Lansingerland", value: "lansingerland" },
      { label: "Noordwijk", value: "noordwijk-theme" },
      { label: "Ridderkerk", value: "ridderkerk" },
      { label: "Rijssen-Holten", value: "rijssen-holten" },
      { label: "Rotterdam", value: "rotterdam-theme" },
      { label: "Sloterburg", value: "sloterburg-theme" },
      { label: "Stede Broec", value: "stedebroec" },
      { label: "Texel", value: "texel" },
      { label: "Tubbergen", value: "tubbergen-theme" },
      { label: "Waddinxveen", value: "waddinxveen" },
      { label: "Zuiddrecht", value: "zuiddrecht-theme" },
      { label: "Zutphen", value: "zutphen-theme" },
    ],
  },
  {
    label: "Regionale samenwerkingsorganen",
    options: [{ label: "Noaberkracht", value: "noaberkracht-theme" }],
  },
];
