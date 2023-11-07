import * as React from "react";
import * as styles from "./HeaderTemplate.module.css";
import clsx from "clsx";
import { PageHeader, SkipLink } from "@utrecht/component-library-react/dist/css-module";
import { useTranslation } from "react-i18next";
import { useGatsbyContext } from "../../../context/gatsby";
import { navigate } from "gatsby";
import { Logo } from "@conduction/components";

interface HeaderTemplateProps {
  layoutClassName: string;
}

export const HeaderTemplate: React.FC<HeaderTemplateProps> = ({ layoutClassName }) => {
  const { t, i18n } = useTranslation();
  const { gatsbyContext } = useGatsbyContext();

  return (
    <PageHeader className={clsx(layoutClassName && layoutClassName)}>
      <div className={styles.container}>
        <div className={styles.skipLinkContainer}>
          <SkipLink href="#filters" tabIndex={gatsbyContext.location.pathname === "/" ? 0 : -1}>
            {t("Skip to filters")}
          </SkipLink>
          <SkipLink href="#mainContent" tabIndex={0}>
            {t("Skip to main content")}
          </SkipLink>
        </div>
        <div className={styles.navContainer}>
          <Logo onClick={() => navigate("/")} />

          <div className={styles.languageSelectContainer}>
            <span
              className={clsx(styles.languageSelect, i18n.language === "nl" && styles.languageSelectDisabled)}
              onClick={() => i18n.changeLanguage("nl")}
              tabIndex={0}
              aria-label="Vertaal pagina naar het Nederlands"
            >
              NL
            </span>{" "}
            /{" "}
            <span
              className={clsx(styles.languageSelect, i18n.language === "en" && styles.languageSelectDisabled)}
              onClick={() => i18n.changeLanguage("en")}
              tabIndex={0}
              aria-label="Translate page to English"
            >
              EN
            </span>
          </div>
        </div>
      </div>
    </PageHeader>
  );
};
