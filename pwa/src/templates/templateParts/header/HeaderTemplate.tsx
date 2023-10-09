import * as React from "react";
import * as styles from "./HeaderTemplate.module.css";
import clsx from "clsx";
import { PageHeader } from "@utrecht/component-library-react/dist/css-module";
import { navigate } from "gatsby";
import { useTranslation } from "react-i18next";
import { useGatsbyContext } from "../../../context/gatsby";

interface HeaderTemplateProps {
  layoutClassName: string;
}

export const HeaderTemplate: React.FC<HeaderTemplateProps> = ({ layoutClassName }) => {
  const { t, i18n } = useTranslation();
  const { gatsbyContext } = useGatsbyContext();

  return (
    <PageHeader className={clsx(layoutClassName && layoutClassName)}>
      <div className={styles.container}>
        <a
          href="#filters"
          className={styles.visuallyHidden}
          tabIndex={gatsbyContext.location.pathname === "/" ? 0 : -1}
        >
          {t("Skip to filters")}
        </a>
        <a href="#mainContent" className={styles.visuallyHidden} tabIndex={0}>
          {t("Skip to main content")}
        </a>

        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            onClick={() => navigate("/")}
            src={process.env.GATSBY_HEADER_LOGO_URL}
            alt={t("Navbar-Logo")}
            tabIndex={0}
          />
        </div>
        <div className={styles.languageSelectContainer}>
          <span
            className={clsx(styles.languageSelect, i18n.language === "nl" && styles.languageSelectDisabled)}
            onClick={() => i18n.changeLanguage("nl")}
            tabIndex={0}
            aria-label={t("Translate page to Dutch")}
          >
            NL
          </span>{" "}
          /{" "}
          <span
            className={clsx(styles.languageSelect, i18n.language === "en" && styles.languageSelectDisabled)}
            onClick={() => i18n.changeLanguage("en")}
            tabIndex={0}
            aria-label={t("Translate page to English")}
          >
            EN
          </span>
        </div>
      </div>
    </PageHeader>
  );
};
