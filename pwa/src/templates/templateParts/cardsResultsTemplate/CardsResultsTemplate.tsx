import * as React from "react";
import * as styles from "./CardsResultsTemplate.module.css";
import clsx from "clsx";
import { Heading2, Paragraph } from "@utrecht/component-library-react/dist/css-module";
import { translateDate } from "../../../services/dateFormat";
import { useTranslation } from "react-i18next";
import { navigate } from "gatsby";
import { CardHeader, CardHeaderDate, CardHeaderTitle, CardWrapper } from "@conduction/components";
import { TOOLTIP_ID } from "../../../layout/Layout";

interface CardsResultsTemplateProps {
  requests: any[];
}

export const CardsResultsTemplate: React.FC<CardsResultsTemplateProps> = ({ requests }) => {
  const { t, i18n } = useTranslation();

  const themesWithBefore = ["epe-theme"];

  return (
    <>
      <div className={styles.componentsGrid}>
        {requests.map((request) => (
          <CardWrapper
            key={request._self.id}
            className={styles.cardContainer}
            onClick={() => navigate(request._self.id)}
            tabIndex={0}
            aria-label={`${
              request.publicatiedatum ? translateDate(i18n.language, request.publicatiedatum) : t("N/A")
            }, ${request.titel}, ${request.samenvatting} ${
              window.sessionStorage.getItem("SHOW_ORGANIZATION") === "true"
                ? `,${request.embedded?.behandelendBestuursorgaan?.naam}`
                : ""
            } ${
              window.sessionStorage.getItem("SHOW_CATEGORY") === "true"
                ? `, ${t("Category")}, ${request.categorie}`
                : ""
            }`}
          >
            <CardHeader
              className={clsx(
                themesWithBefore.includes(window.sessionStorage.getItem("NL_DESIGN_THEME_CLASSNAME") ?? "") &&
                  styles.cardHeader,
              )}
            >
              <CardHeaderDate>
                {request.publicatiedatum ? translateDate(i18n.language, request.publicatiedatum) : t("N/A")}
              </CardHeaderDate>
              <CardHeaderTitle className={styles.title}>
                <Heading2>{request.titel ?? t("No title available")}</Heading2>
              </CardHeaderTitle>
            </CardHeader>

            <Paragraph className={styles.description}>{request.samenvatting}</Paragraph>

            {(window.sessionStorage.getItem("SHOW_CATEGORY") === "true" ||
              window.sessionStorage.getItem("SHOW_ORGANIZATION") === "true") && (
              <div className={styles.cardFooter}>
                {window.sessionStorage.getItem("SHOW_ORGANIZATION") === "true" && (
                  <CardHeaderDate>
                    <span data-tooltip-id={TOOLTIP_ID} data-tooltip-content={t("Municipality")}>
                      {request.embedded?.behandelendBestuursorgaan?.naam}
                    </span>
                  </CardHeaderDate>
                )}
                {window.sessionStorage.getItem("SHOW_CATEGORY") === "true" && (
                  <CardHeaderDate>
                    <span data-tooltip-id={TOOLTIP_ID} data-tooltip-content={t("Category")}>
                      {request.categorie}
                    </span>
                  </CardHeaderDate>
                )}
              </div>
            )}
          </CardWrapper>
        ))}
      </div>
    </>
  );
};
