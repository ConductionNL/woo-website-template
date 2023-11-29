import * as React from "react";
import { getConfig } from "../services/getConfig";
import { uniqueId } from "lodash";

export const useEnvironment = () => {
  const [, setSessionStorageUpdatedId] = React.useState("-1");

  const handleStorageChange = () => {
    setSessionStorageUpdatedId(uniqueId());
    themeSwitcherMiddleware();
  };

  const updateSessionStorage = () => {
    window.dispatchEvent(new Event("sessionStorageChange"));
  };

  React.useEffect(() => {
    window.addEventListener("sessionStorageChange", handleStorageChange);

    return () => {
      window.removeEventListener("sessionStorageChange", handleStorageChange);
    };
  }, []);

  const initiateFromEnv = () => {
    window.sessionStorage.setItem("SHOW_THEME_SWITCHER", process.env.GATSBY_SHOW_THEME_SWITCHER ?? "");
    window.sessionStorage.setItem(
      "API_BASE_URL",
      process.env.GATSBY_DEV_ENVIRONMENT === "true"
        ? "https://api.gateway.commonground.nu/api"
        : process.env.GATSBY_API_BASE_URL ?? "",
    );
    window.sessionStorage.setItem("NL_DESIGN_THEME_CLASSNAME", process.env.GATSBY_NL_DESIGN_THEME_CLASSNAME ?? "");
    window.sessionStorage.setItem("FAVICON_URL", process.env.GATSBY_FAVICON_URL ?? "");
    window.sessionStorage.setItem("ORGANISATION_NAME", process.env.GATSBY_ORGANISATION_NAME ?? "");
    window.sessionStorage.setItem("JUMBOTRON_IMAGE_URL", process.env.GATSBY_JUMBOTRON_IMAGE_URL ?? "");
    window.sessionStorage.setItem("FOOTER_LOGO_HREF", process.env.GATSBY_FOOTER_LOGO_HREF ?? "");
    window.sessionStorage.setItem("FOOTER_CONTENT", process.env.GATSBY_FOOTER_CONTENT ?? "");
    window.sessionStorage.setItem("FOOTER_CONTENT_HEADER", process.env.GATSBY_FOOTER_CONTENT_HEADER ?? "");
    window.sessionStorage.setItem("OIDN_NUMBER", process.env.GATSBY_OIDN_NUMBER ?? "");
    window.sessionStorage.setItem("SHOW_CATEGORY", process.env.GATSBY_SHOW_CATEGORY ?? "");
    window.sessionStorage.setItem("SHOW_ORGANIZATION", process.env.GATSBY_SHOW_ORGANIZATION ?? "");

    updateSessionStorage();
  };

  const initiateFromJSON = (themeOrDomainName: string) => {
    const config = getConfig(themeOrDomainName);

    if (!config) return; // no config found, nothing else to do

    window.sessionStorage.setItem("SHOW_THEME_SWITCHER", config.GATSBY_SHOW_THEME_SWITCHER ?? "");
    window.sessionStorage.setItem(
      "API_BASE_URL",
      process.env.GATSBY_DEV_ENVIRONMENT === "true"
        ? "https://api.gateway.commonground.nu/api"
        : config.GATSBY_API_BASE_URL ?? "",
    );
    window.sessionStorage.setItem("NL_DESIGN_THEME_CLASSNAME", config.GATSBY_NL_DESIGN_THEME_CLASSNAME ?? "");
    window.sessionStorage.setItem("FAVICON_URL", config.GATSBY_FAVICON_URL ?? "");
    window.sessionStorage.setItem("ORGANISATION_NAME", config.GATSBY_ORGANISATION_NAME ?? "");
    window.sessionStorage.setItem("JUMBOTRON_IMAGE_URL", config.GATSBY_JUMBOTRON_IMAGE_URL ?? "");
    window.sessionStorage.setItem("FOOTER_LOGO_HREF", config.GATSBY_FOOTER_LOGO_HREF ?? "");
    window.sessionStorage.setItem("FOOTER_CONTENT", config.GATSBY_FOOTER_CONTENT ?? "");
    window.sessionStorage.setItem("FOOTER_CONTENT_HEADER", config.GATSBY_FOOTER_CONTENT_HEADER ?? "");
    window.sessionStorage.setItem("OIDN_NUMBER", config.GATSBY_OIDN_NUMBER ?? "");
    window.sessionStorage.setItem("SHOW_CATEGORY", config.GATSBY_SHOW_CATEGORY ?? "");
    window.sessionStorage.setItem("SHOW_ORGANIZATION", config.GATSBY_SHOW_ORGANIZATION ?? "");

    updateSessionStorage();
  };

  const themeSwitcherMiddleware = () => {
    switch (window.location.hostname) {
      case "koophulpje.nl":
        // case "localhost": // development purposes
        window.sessionStorage.setItem("SHOW_THEME_SWITCHER", "true");
        break;
    }

    if (process.env.GATSBY_SHOW_THEME_SWITCHER === "true") window.sessionStorage.setItem("SHOW_THEME_SWITCHER", "true");
  };

  return { initiateFromEnv, initiateFromJSON };
};
