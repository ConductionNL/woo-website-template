import * as React from "react";
import * as styles from "./HeaderTemplate.module.css";
import clsx from "clsx";
import { PageHeader, SkipLink, Link } from "@utrecht/component-library-react/dist/css-module";
import { useTranslation } from "react-i18next";
import { useGatsbyContext } from "../../../context/gatsby";
import { navigate } from "gatsby";
import { Logo, PrimaryTopNav } from "@conduction/components";
import { faKey, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { BreadcrumbNavSeparator } from "@utrecht/component-library-react/dist/css-module";
import { BreadcrumbNavLink } from "@utrecht/component-library-react/dist/css-module";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AcContainer } from "../../../components/tilburg/components/ac-container";
import { BreadcrumbNav } from "@utrecht/component-library-react/dist/css-module";
import { useHeaderTopNavItems } from "../../../hooks/useHeaderTopNavItems";

interface HeaderTemplateProps {
  layoutClassName: string;
}

export const HeaderTemplate: React.FC<HeaderTemplateProps> = ({ layoutClassName }) => {
  const { t, i18n } = useTranslation();
  const { gatsbyContext } = useGatsbyContext();
  const [utrechtHeader, setUtrechtHeader] = React.useState(true);

  const translatedCrumbs = [
    { crumbLabel: "OpenCatalogi", pathname: "/" },
    { crumbLabel: "Componenten overzicht", pathname: "/0fb4aca0-6abc-41e2-af6b-552f066e23d3" },
    { crumbLabel: "Component" },
  ];

  const navItemsData = require("../../theme/NavItems.json");
  const { headerTopNavItems } = useHeaderTopNavItems(navItemsData);

  return utrechtHeader ? (
    <div>
      <PageHeader className={clsx(layoutClassName && layoutClassName)}>
        <div role="navigation" aria-label="skip" className={styles.container}>
          <div>
            <SkipLink
              href="#filters"
              tabIndex={gatsbyContext.location.pathname === "/" ? 0 : -1}
              className={styles.skipLink}
            >
              {t("Skip to filters")}
            </SkipLink>
            <SkipLink
              className={styles.skipLink}
              href="#mainContent"
              tabIndex={
                gatsbyContext.location.pathname !== "/theme" && gatsbyContext.location.pathname !== "/theme/" ? 0 : -1
              }
            >
              {t("Skip to main content")}
            </SkipLink>

            <SkipLink
              href="#currentwork"
              tabIndex={
                gatsbyContext.location.pathname === "/theme" || gatsbyContext.location.pathname === "/theme/" ? 0 : -1
              }
              className={styles.skipLink}
            >
              {t("Skip to current work")}
            </SkipLink>
          </div>
          <div className={styles.navContainer}>
            <Logo onClick={() => navigate("/")} />
            <nav role="navigation" aria-label={t("Language select")} className={styles.languageSelectContainer}>
              <span
                className={clsx(styles.languageSelect, i18n.language === "nl" && styles.languageSelectDisabled)}
                onClick={() => i18n.changeLanguage("nl")}
                tabIndex={0}
                aria-label="Vertaal pagina naar het Nederlands"
                role="button"
                aria-pressed={i18n.language === "nl" ? true : false}
                aria-disabled={i18n.language === "nl" ? true : false}
              >
                NL
              </span>
              <span className={styles.languageSeperator} aria-hidden="true">
                {" "}
                /{" "}
              </span>
              <span
                className={clsx(styles.languageSelect, i18n.language === "en" && styles.languageSelectDisabled)}
                onClick={() => i18n.changeLanguage("en")}
                tabIndex={0}
                aria-label="Translate page to English"
                role="button"
                aria-pressed={i18n.language === "en" ? true : false}
                aria-disabled={i18n.language === "en" ? true : false}
              >
                EN
              </span>
            </nav>
          </div>
        </div>
      </PageHeader>
      <button className={styles.changeButton} onClick={() => setUtrechtHeader(false)}>
        Change header to Tilburg
      </button>
    </div>
  ) : (
    <div>
      <header className="ac-header">
        <div>
          <SkipLink
            href="#filters"
            tabIndex={gatsbyContext.location.pathname === "/" ? 0 : -1}
            className={styles.skipLink}
          >
            {t("Skip to filters")}
          </SkipLink>
          <SkipLink
            className={styles.skipLink}
            href="#mainContent"
            tabIndex={
              gatsbyContext.location.pathname !== "/theme" && gatsbyContext.location.pathname !== "/theme/" ? 0 : -1
            }
          >
            {t("Skip to main content")}
          </SkipLink>

          <SkipLink
            href="#currentwork"
            tabIndex={
              gatsbyContext.location.pathname === "/theme" || gatsbyContext.location.pathname === "/theme/" ? 0 : -1
            }
            className={styles.skipLink}
          >
            {t("Skip to current work")}
          </SkipLink>
        </div>
        <div className="ac-header__navigation-main">
          <div className="ac-header__logo">
            <div>
              <Logo variant="header" />
              <span className="sr-only">Logo</span>
              <span className="logo-text">{window.sessionStorage.getItem("ORGANISATION_NAME")}</span>
            </div>
          </div>
          <div className="ac-navigation">
            <nav aria-label="Hoofd">
              <ul>
                <li>
                  <Link to={"/"}>
                    <FontAwesomeIcon icon={faUserPlus} />
                    Registreren
                  </Link>
                </li>
                <li>
                  <Link to={"/"}>
                    <FontAwesomeIcon icon={faKey} />
                    Inloggen
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="ac-header__navigation-secondary">
          <PrimaryTopNav
            mobileLogo={
              <div className={clsx(styles.logoContainer, styles.logoMobile)}>
                <Logo variant="navbar" onClick={() => console.log("click")} />
              </div>
            }
            items={headerTopNavItems}
          />{" "}
        </div>
        <div className="ac-header__navigation-breadcrumb">
          <AcContainer>
            <BreadcrumbNav>
              <BreadcrumbNavLink href="/" rel="home" index={0}>
                Home
              </BreadcrumbNavLink>
              {translatedCrumbs.map((breadcrumb, index) => (
                <>
                  <BreadcrumbNavSeparator>
                    <svg aria-hidden="true" width="6" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M.529.529c.26-.26.682-.26.942 0l4 4c.26.26.26.682 0 .942l-4 4A.667.667 0 1 1 .53 8.53L4.057 5 .53 1.471a.667.667 0 0 1 0-.942Z"
                        fill="#5B6E8A"
                      />
                    </svg>
                  </BreadcrumbNavSeparator>
                  <BreadcrumbNavLink
                    href={breadcrumb?.pathname}
                    disabled={index + 1 === translatedCrumbs.length}
                    current={index + 1 === translatedCrumbs.length}
                  >
                    {breadcrumb?.crumbLabel}
                  </BreadcrumbNavLink>
                </>
              ))}
            </BreadcrumbNav>
          </AcContainer>
        </div>
      </header>
      <button className={styles.changeButton} onClick={() => setUtrechtHeader(true)}>
        Change header to Utrecht
      </button>
    </div>
  );
};
