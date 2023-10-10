import * as React from "react";
import * as styles from "./HeaderTemplate.module.css";
import clsx from "clsx";
import { PageHeader } from "@utrecht/component-library-react/dist/css-module";
import { navigate } from "gatsby";
import { useTranslation } from "react-i18next";

interface HeaderTemplateProps {
  layoutClassName: string;
}

export const HeaderTemplate: React.FC<HeaderTemplateProps> = ({ layoutClassName }) => {
  const { t, i18n } = useTranslation();

  return (
    <PageHeader className={clsx(layoutClassName && layoutClassName)}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            onClick={() => navigate("/")}
            src={process.env.GATSBY_HEADER_LOGO_URL}
            alt={t("Navbar-Logo")}
          />
        </div>
        <div className={styles.languageSelectContainer}>
          <span
            className={clsx(styles.languageSelect, i18n.language === "nl" && styles.languageSelectDisabled)}
            onClick={() => i18n.changeLanguage("nl")}
          >
            NL
          </span>{" "}
          /{" "}
          <span
            className={clsx(styles.languageSelect, i18n.language === "en" && styles.languageSelectDisabled)}
            onClick={() => i18n.changeLanguage("en")}
          >
            EN
          </span>
        </div>
      </div>
    </PageHeader>
  );
};
