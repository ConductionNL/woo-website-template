import * as React from "react";
import * as styles from "./CardsResultsTemplate.module.css";
import { Heading2, Paragraph } from "@utrecht/component-library-react/dist/css-module";
import { translateDate } from "../../../services/dateFormat";
import { useTranslation } from "react-i18next";
import { navigate } from "gatsby";
import { CardHeader, CardHeaderDate, CardHeaderTitle, CardWrapper } from "@conduction/components";
import { TOOLTIP_ID } from "../../../layout/Layout";
import { removeHTMLFromString } from "../../../services/removeHTMLFromString";

interface CardsResultsTemplateProps {
  requests: any[];
}

export const CardsResultsTemplate: React.FC<CardsResultsTemplateProps> = ({ requests }) => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className={styles.componentsGrid} role="region" aria-label={t("Woo Request")}>
        {requests.map((request) => (
          <CardWrapper
            role="region"
            key={request.id}
            className={styles.cardContainer}
            onClick={() => navigate(request.id.toString())}
            tabIndex={0}
            aria-label={`${
              request.published ? translateDate(i18n.language, request.published) : t("N/A")
            }, ${removeHTMLFromString(removeHTMLFromString(request.title))}, ${removeHTMLFromString(removeHTMLFromString(request.summary))} ${
              window.sessionStorage.getItem("SHOW_ORGANIZATION") === "true"
                ? `,${request.catalog?.organization?.title ?? request.organization?.title}`
                : ""
            } ${
              window.sessionStorage.getItem("SHOW_CATEGORY") === "true" ? `, ${t("Category")}, ${request.category}` : ""
            }`}
          >
            <CardHeader className={styles.cardHeader}>
              <CardHeaderDate>
                {request.published ? translateDate(i18n.language, request.published) : t("N/A")}
              </CardHeaderDate>
              <CardHeaderTitle className={styles.title}>
                <Heading2>
                  {removeHTMLFromString(removeHTMLFromString(request.title)) ?? t("No title available")}
                </Heading2>
              </CardHeaderTitle>
            </CardHeader>

            <Paragraph className={styles.description}>
              {removeHTMLFromString(removeHTMLFromString(request.summary))}
            </Paragraph>

            {(window.sessionStorage.getItem("SHOW_CATEGORY") === "true" ||
              window.sessionStorage.getItem("SHOW_ORGANIZATION") === "true") && (
              <div className={styles.cardFooter}>
                {window.sessionStorage.getItem("SHOW_ORGANIZATION") === "true" && (
                  <CardHeaderDate>
                    <span data-tooltip-id={TOOLTIP_ID} data-tooltip-content={t("Municipality")}>
                      {request.catalog?.organization?.title ?? request.organization?.title}
                    </span>
                  </CardHeaderDate>
                )}
                {window.sessionStorage.getItem("SHOW_CATEGORY") === "true" && (
                  <CardHeaderDate>
                    <span data-tooltip-id={TOOLTIP_ID} data-tooltip-content={t("Category")}>
                      {request.category}
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
