import * as React from "react";
import _ from "lodash";
import "../styling/index.css";
import { Helmet } from "react-helmet";
import { getPageTitle } from "../services/getPageTitle";
import { useGatsbyContext } from "../context/gatsby";
import { useTranslation } from "react-i18next";
import { languageOptions } from "../data/languageOptions";

export const Head: React.FC = () => {
  const { gatsbyContext } = useGatsbyContext();
  const { t, i18n } = useTranslation();

  const translatedCrumbs = gatsbyContext.pageContext?.breadcrumb.crumbs.map((crumb: any) => ({
    ...crumb,
    crumbLabel: t(_.upperFirst(crumb.crumbLabel)),
  }));

  const currentLanguage = languageOptions.find(
    (language) => language.label === (i18n.language.toUpperCase() === "EN" ? "US" : i18n.language.toUpperCase()),
  )?.value;

  return (
    <Helmet
      htmlAttributes={{
        lang: currentLanguage,
      }}
      bodyAttributes={{
        class: window.sessionStorage.getItem("NL_DESIGN_THEME_CLASSNAME"),
      }}
    >
      <title>{`Woo | ${window.sessionStorage.getItem("ORGANISATION_NAME")} | ${
        getPageTitle(translatedCrumbs, gatsbyContext.location) ?? "Error"
      }`}</title>
      <link rel="icon" type="svg" href={window.sessionStorage.getItem("FAVICON_URL") ?? ""} />
    </Helmet>
  );
};
