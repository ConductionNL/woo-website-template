import dateFormat, { i18n } from "dateformat";
import { en as enM, nl as nlM } from "../translations/months";
import { en as enD, nl as nlD } from "../translations/days";

export const translateDate = (language: string, date: Date): string => {
  switch (language) {
    case "nl":
      i18n.dayNames = nlD;
      i18n.monthNames = nlM;

      return dateFormat(
        date.toLocaleString(),
        window.sessionStorage.getItem("DATE_FULL_MONTH") === "true" ? "dd mmmm yyyy" : "dd-mm-yyyy",
      );
    case "en":
      i18n.dayNames = enD;
      i18n.monthNames = enM;

      return dateFormat(
        date,
        window.sessionStorage.getItem("DATE_FULL_MONTH") === "true" ? "mmmm dd yyyy" : "mm-dd-yyyy",
      );
  }

  return dateFormat(date, "dd-mm-yyyy"); // required default return due to i18n.language being basic typed
};
