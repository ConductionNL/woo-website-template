// Municipalities
import Albrandswaard from "./../../static/configFiles/municipalities/albrandswaard/albrandswaard.json";
import AlbrandswaardAccept from "./../../static/configFiles/municipalities/albrandswaard/albrandswaard-accept.json";
import Barendrecht from "./../../static/configFiles/municipalities/barendrecht/barendrecht.json";
import BarendrechtAccept from "./../../static/configFiles/municipalities/barendrecht/barendrecht-accept.json";
import Barneveld from "./../../static/configFiles/municipalities/barneveld/barneveld.json";
import BarneveldAccept from "./../../static/configFiles/municipalities/barneveld/barneveld-accept.json";
import Buren from "./../../static/configFiles/municipalities/buren/buren.json";
import BurenAccept from "./../../static/configFiles/municipalities/buren/buren-accept.json";
import Dinkelland from "./../../static/configFiles/municipalities/dinkelland/dinkelland.json";
import DinkellandAccept from "./../../static/configFiles/municipalities/dinkelland/dinkelland-accept.json";
import Epe from "./../../static/configFiles/municipalities/epe/epe.json";
import EpeAccept from "./../../static/configFiles/municipalities/epe/epe-accept.json";
import Ede from "./../../static/configFiles/municipalities/ede/ede.json";
import EdeAccept from "./../../static/configFiles/municipalities/ede/ede-accept.json";
import GooiseMeren from "./../../static/configFiles/municipalities/gooise-meren/gooise-meren.json";
import GooiseMerenAccept from "./../../static/configFiles/municipalities/gooise-meren/gooise-meren-accept.json";
import Gouda from "./../../static/configFiles/municipalities/gouda/gouda.json";
import GoudaAccept from "./../../static/configFiles/municipalities/gouda/gouda-accept.json";
import HoekscheWaard from "./../../static/configFiles/municipalities/hoeksche-waard/hoeksche-waard.json";
import HoekscheWaardAccept from "./../../static/configFiles/municipalities/hoeksche-waard/hoeksche-waard-accept.json";
import HofvanTwente from "./../../static/configFiles/municipalities/hof-van-twente/hof-van-twente.json";
import HofvanTwenteAccept from "./../../static/configFiles/municipalities/hof-van-twente/hof-van-twente-accept.json";
import Lansingerland from "./../../static/configFiles/municipalities/lansingerland/lansingerland.json";
import LansingerlandAccept from "./../../static/configFiles/municipalities/lansingerland/lansingerland-accept.json";
import Leiden from "./../../static/configFiles/municipalities/leiden/leiden.json";
import LeidenAccept from "./../../static/configFiles/municipalities/leiden/leiden-accept.json";
import Moerdijk from "./../../static/configFiles/municipalities/moerdijk/moerdijk.json";
import MoerdijkAccept from "./../../static/configFiles/municipalities/moerdijk/moerdijk-accept.json";
import Noordwijk from "./../../static/configFiles/municipalities/noordwijk/noordwijk.json";
import NoordwijkAccept from "./../../static/configFiles/municipalities/noordwijk/noordwijk-accept.json";
import Ridderkerk from "./../../static/configFiles/municipalities/ridderkerk/ridderkerk.json";
import RidderkerkAccept from "./../../static/configFiles/municipalities/ridderkerk/ridderkerk-accept.json";
import RijssenHolten from "./../../static/configFiles/municipalities/rijssen-holten/rijssen-holten.json";
import RijssenHoltenAccept from "./../../static/configFiles/municipalities/rijssen-holten/rijssen-holten-accept.json";
import Roosendaal from "./../../static/configFiles/municipalities/roosendaal/roosendaal.json";
import RoosendaalAccept from "./../../static/configFiles/municipalities/roosendaal/roosendaal-accept.json";
import Rotterdam from "./../../static/configFiles/municipalities/rotterdam/rotterdam.json";
import RotterdamAccept from "./../../static/configFiles/municipalities/rotterdam/rotterdam-accept.json";
import StedeBroec from "./../../static/configFiles/municipalities/stede-broec/stede-broec.json";
import StedeBroecAccept from "./../../static/configFiles/municipalities/stede-broec/stede-broec-accept.json";
import Texel from "./../../static/configFiles/municipalities/texel/texel.json";
import TexelAccept from "./../../static/configFiles/municipalities/texel/texel-accept.json";
import Tubbergen from "./../../static/configFiles/municipalities/tubbergen/tubbergen.json";
import TubbergenAccept from "./../../static/configFiles/municipalities/tubbergen/tubbergen-accept.json";
import Waddinxveen from "./../../static/configFiles/municipalities/waddinxveen/waddinxveen.json";
import WaddinxveenAccept from "./../../static/configFiles/municipalities/waddinxveen/waddinxveen-accept.json";
import Zutphen from "./../../static/configFiles/municipalities/zutphen/zutphen.json";
import ZutphenAccept from "./../../static/configFiles/municipalities/zutphen/zutphen-accept.json";

// Other
import Conduction from "./../../static/configFiles/other/conduction/conduction.json";
import ConductionAccept from "./../../static/configFiles/other/conduction/conduction-accept.json";
import Localhost from "./../../static/configFiles/other/localhost/localhost.json";
import LocalhostNextcloud from "./../../static/configFiles/other/localhost/localhostNextcloud.json";
import Noaberkracht from "./../../static/configFiles/other/noaberkracht/noaberkracht.json";
import NoaberkrachtAccept from "./../../static/configFiles/other/noaberkracht/noaberkracht-accept.json";
import OpenWebconcept from "./../../static/configFiles/other/open-webconcept/open-webconcept.json";
import OpenWebconceptAccept from "./../../static/configFiles/other/open-webconcept/open-webconcept-accept.json";
import Sloterburg from "./../../static/configFiles/other/sloterburg/sloterburg.json";
import SloterburgAccept from "./../../static/configFiles/other/sloterburg/sloterburg-accept.json";
import Xxllnc from "./../../static/configFiles/other/xxllnc/xxllnc.json";
import XxllncAccept from "./../../static/configFiles/other/xxllnc/xxllnc-accept.json";
import Zuiddrecht from "./../../static/configFiles/other/zuiddrecht/zuiddrecht.json";
import ZuiddrechtAccept from "./../../static/configFiles/other/zuiddrecht/zuiddrecht-accept.json";

import { TGroupedSelectOption } from "@conduction/components/lib/components/formFields/select/select";

export const getConfig = (themeOrDomainName: string, host: string): Record<string, any> | undefined => {
  switch (themeOrDomainName) {
    // Municipalities
    case "albrandswaard":
    case "open.albrandswaard.nl":
    case "albrandswaard.openwoo.app":
    case "albrandswaard.koophulpje.nl":
      return Albrandswaard;
    case "acceptatie-open.albrandswaard.nl":
    case "albrandswaard.accept.openwoo.app":
      return AlbrandswaardAccept;

    case "barendrecht":
    case "open.barendrecht.nl":
    case "barendrecht.openwoo.app":
    case "barendrecht.koophulpje.nl":
      return Barendrecht;
    case "acceptatie-open.barendrecht.nl":
    case "barendrecht.accept.openwoo.app":
      return BarendrechtAccept;

    case "barneveld":
    case "barneveld-theme":
    case "open.barneveld.nl":
    case "barneveld.openwoo.app":
    case "barneveld.prod.openwoo.app":
    case "barneveld.koophulpje.nl":
    case "barneveld.prod.commonground.nu":
      return Barneveld;
    case "acceptatie-open.barneveld.nl":
    case "barneveld.accept.openwoo.app":
    case "barneveld.accept.commonground.nu":
      return BarneveldAccept;

    case "buren":
    case "open.buren.nl":
    case "buren.openwoo.app":
    case "buren.koophulpje.nl":
      return Buren;
    case "acceptatie.open.buren.nl":
    case "buren.accept.openwoo.app":
      return BurenAccept;

    case "dinkelland-theme":
    case "open.dinkelland.nl":
    case "dinkelland.openwoo.app":
    case "dinkelland.koophulpje.nl":
      return Dinkelland;
    case "acceptatie-open.dinkelland.nl":
    case "dinkelland.accept.openwoo.app":
      return DinkellandAccept;

    case "epe-theme":
    case "open.epe.nl":
    case "epe.openwoo.app":
    case "epe.prod.openwoo.app":
    case "epe.koophulpje.nl":
      return Epe;
    case "acceptatie-open.epe.nl":
    case "epe.accept.openwoo.app":
      return EpeAccept;

    case "ede-theme":
    case "open.ede.nl":
    case "ede.openwoo.app":
    case "ede.koophulpje.nl":
      return Ede;
    case "acceptatie-open.ede.nl":
    case "ede.accept.openwoo.app":
      return EdeAccept;

    case "gooisemeren-theme":
    case "open.gooisemeren.nl":
    case "gooisemeren.openwoo.app":
    case "gooisemeren.koophulpje.nl":
      return GooiseMeren;
    case "acceptatie-open.gooisemeren.nl":
    case "gooisemeren.accept.openwoo.app":
      return GooiseMerenAccept;

    case "gouda-theme":
    case "open.gouda.nl":
    case "gouda.openwoo.app":
    case "gouda.koophulpje.nl":
      return Gouda;
    case "acceptatie-open.gouda.nl":
    case "gouda.accept.openwoo.app":
      return GoudaAccept;

    case "hoeksche-waard":
    case "open.gemeentehw.nl":
    case "gemeentehw.openwoo.app":
    case "gemeentehw.koophulpje.nl":
      return HoekscheWaard;
    case "acceptatie-open.gemeentehw.nl":
    case "gemeentehw.accept.openwoo.app":
      return HoekscheWaardAccept;

    case "hof-van-twente-theme":
    case "open.hofvantwente.nl":
    case "hofvantwente.openwoo.app":
    case "hofvantwente.koophulpje.nl":
    case "hofvantwente.prod.openwoo.app":
    case "hofvantwente.prod.commonground.nu":
      return HofvanTwente;
    case "acceptatie-open.hofvantwente.nl":
    case "hofvantwente.accept.openwoo.app":
    case "hofvantwente-v2.accept.openwoo.app":
    case "hofvantwente.accept.commonground.nu":
      return HofvanTwenteAccept;

    case "lansingerland":
    case "open.lansingerland.nl":
    case "lansingerland.openwoo.app":
    case "lansingerland.koophulpje.nl":
      return Lansingerland;
    case "acceptatie-open.lansingerland.nl":
    case "lansingerland.accept.openwoo.app":
      return LansingerlandAccept;

    case "leiden-theme":
    case "open.leiden.nl":
    case "leiden.openwoo.app":
    case "leiden.koophulpje.nl":
      return Leiden;
    case "acceptatie-open.leiden.nl":
    case "leiden.accept.openwoo.app":
      return LeidenAccept;

    case "moerdijk-theme":
    case "open.moerdijk.nl":
    case "moerdijk.openwoo.app":
    case "moerdijk.koophulpje.nl":
      return Moerdijk;
    case "acceptatie-open.moerdijk.nl":
    case "moerdijk.accept.openwoo.app":
      return MoerdijkAccept;

    case "noordwijk-theme":
    case "open.noordwijk.nl":
    case "noordwijk.openwoo.app":
    case "noordwijk.koophulpje.nl":
      return Noordwijk;
    case "acceptatie-open.noordwijk.nl":
    case "noordwijk.accept.openwoo.app":
      return NoordwijkAccept;

    case "ridderkerk":
    case "open.ridderkerk.nl":
    case "ridderkerk.openwoo.app":
    case "ridderkerk.koophulpje.nl":
      return Ridderkerk;
    case "acceptatie-open.ridderkerk.nl":
    case "ridderkerk.accept.openwoo.app":
      return RidderkerkAccept;

    case "rijssen-holten":
    case "open.rijssen-holten.nl":
    case "rijssen-holten.openwoo.app":
    case "rijssen-holten.koophulpje.nl":
      return RijssenHolten;
    case "acceptatie-open.rijssen-holten.nl":
    case "rijssen-holten.accept.openwoo.app":
      return RijssenHoltenAccept;

    case "roosendaal-theme":
    case "open.roosendaal.nl":
    case "roosendaal.openwoo.app":
    case "roosendaal.koophulpje.nl":
      return Roosendaal;
    case "acceptatie-open.roosendaal.nl":
    case "roosendaal.accept.openwoo.app":
      return RoosendaalAccept;

    case "rotterdam-theme":
    case "open.rotterdam.nl":
    case "rotterdam.openwoo.app":
    case "rotterdam.koophulpje.nl":
      return Rotterdam;
    case "acceptatie-open.rotterdam.nl":
    case "rotterdam.accept.openwoo.app":
      return RotterdamAccept;

    case "stedebroec":
    case "open.stedebroec.nl":
    case "stedebroec.openwoo.app":
    case "stedebroec.koophulpje.nl":
      return StedeBroec;
    case "acceptatie-open.stedebroec.nl":
    case "stedebroec.accept.openwoo.app":
      return StedeBroecAccept;

    case "texel":
    case "open.texel.nl":
    case "texel.openwoo.app":
    case "texel.koophulpje.nl":
      return Texel;
    case "acceptatie-open.texel.nl":
    case "texel.accept.openwoo.app":
      return TexelAccept;

    case "tubbergen-theme":
    case "open.tubbergen.nl":
    case "tubbergen.openwoo.app":
    case "tubbergen.koophulpje.nl":
      return Tubbergen;
    case "acceptatie-open.tubbergen.nl":
    case "tubbergen.accept.openwoo.app":
      return TubbergenAccept;

    case "waddinxveen":
    case "open.waddinxveen.nl":
    case "waddinxveen.openwoo.app":
    case "waddinxveen.koophulpje.nl":
      return Waddinxveen;
    case "acceptatie-open.waddinxveen.nl":
    case "waddinxveen.accept.openwoo.app":
      return WaddinxveenAccept;

    case "zutphen-theme":
    case "open.zutphen.nl":
    case "zutphen.openwoo.app":
    case "zutphen.koophulpje.nl":
      return Zutphen;
    case "acceptatie-open.zutphen.nl":
    case "zutphen.accept.openwoo.app":
      return ZutphenAccept;

    // Other
    case "conduction-theme":
    case "open.conduction.nl":
    case "conduction.koophulpje.nl":
      return Conduction;
    case "acceptatie-open.conduction.nl":
    case "conduction.accept.openwoo.app":
      return ConductionAccept;

    case "localhost":
      if (host === "localhost:8083") {
        return LocalhostNextcloud;
      }
      return Localhost;

    case "noaberkracht-theme":
    case "open.noaberkracht.nl":
    case "noaberkracht.openwoo.app":
    case "noaberkracht.koophulpje.nl":
      return Noaberkracht;
    case "acceptatie-open.noaberkracht.nl":
    case "noaberkracht.accept.openwoo.app":
      return NoaberkrachtAccept;

    case "open-webconcept-theme":
    case "open.open-webconcept.nl":
    case "openwoo.app":
    case "koophulpje.nl":
      return OpenWebconcept;
    case "acceptatie-open.open-webconcept.nl":
    case "open-webconcept.accept.openwoo.app":
      return OpenWebconceptAccept;

    case "sloterburg-theme":
    case "open.sloterburg.nl":
    case "sloterburg.openwoo.app":
    case "sloterburg.koophulpje.nl":
      return Sloterburg;
    case "acceptatie-open.sloterburg.nl":
    case "sloterburg.accept.openwoo.app":
      return SloterburgAccept;

    case "xxllnc-theme":
    case "open.xxllnc.nl":
    case "xxllnc.openwoo.app":
    case "xxllnc.koophulpje.nl":
      return Xxllnc;
    case "acceptatie-open.xxllnc.nl":
    case "xxllnc.accept.openwoo.app":
      return XxllncAccept;

    case "zuiddrecht-theme":
    case "open.zuiddrecht.nl":
    case "zuiddrecht.openwoo.app":
    case "zuiddrecht.koophulpje.nl":
      return Zuiddrecht;
    case "acceptatie-open.zuiddrecht.nl":
    case "zuiddrecht.accept.openwoo.app":
      return ZuiddrechtAccept;

    default:
      return OpenWebconcept;
  }
};

export const availableThemes: TGroupedSelectOption[] = [
  {
    label: "Alle overheidsorganisaties",
    options: [{ label: "Alle overheidsorganisaties", value: "open-webconcept-theme" }],
  },
  {
    label: "Gemeenten",
    options: [
      { label: "Albrandswaard", value: "albrandswaard" },
      { label: "Barendrecht", value: "barendrecht" },
      { label: "Buren", value: "buren" },
      { label: "Dinkelland", value: "dinkelland-theme" },
      { label: "Ede", value: "ede-theme" },
      { label: "Epe", value: "epe-theme" },
      { label: "Gooise Meren", value: "gooise-meren-theme" },
      { label: "Gouda", value: "gouda-theme" },
      { label: "Hoeksche Waard", value: "hoeksche-waard" },
      { label: "Hof van Twente", value: "hof-van-twente-theme" },
      { label: "Lansingerland", value: "lansingerland" },
      { label: "Leiden", value: "leiden-theme" },
      { label: "Moerdijk", value: "moerdijk-theme" },
      { label: "Noordwijk", value: "noordwijk-theme" },
      { label: "Ridderkerk", value: "ridderkerk" },
      { label: "Rijssen-Holten", value: "rijssen-holten" },
      { label: "Roosendaal", value: "roosendaal-theme" },
      { label: "Rotterdam", value: "rotterdam-theme" },
      { label: "Stede Broec", value: "stedebroec" },
      { label: "Texel", value: "texel" },
      { label: "Tubbergen", value: "tubbergen-theme" },
      { label: "Waddinxveen", value: "waddinxveen" },
      { label: "Zutphen", value: "zutphen-theme" },
    ],
  },
  {
    label: "Regionale samenwerkingsorganen",
    options: [{ label: "Noaberkracht", value: "noaberkracht-theme" }],
  },
  {
    label: "Fictieve Gemeenten",
    options: [
      // { label: "Sloterburg", value: "sloterburg-theme" },
      { label: "Zuiddrecht", value: "zuiddrecht-theme" },
    ],
  },
  {
    label: "Overige Thema's",
    options: [
      { label: "Conduction", value: "conduction-theme" },
      // { label: "Localhost", value: "localhost" },
      // { label: "XXLLNC", value: "xxllnc-theme" },
      // { label: "Open Webconcept", value: "open-webconcept-theme" },
    ],
  },
];
