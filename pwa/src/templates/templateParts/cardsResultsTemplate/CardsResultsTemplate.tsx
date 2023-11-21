import * as React from "react";
import * as styles from "./CardsResultsTemplate.module.css";
import { Heading2, Paragraph } from "@utrecht/component-library-react/dist/css-module";
import { translateDate } from "../../../services/dateFormat";
import { useTranslation } from "react-i18next";
import { navigate } from "gatsby";
import { CardHeader, CardHeaderDate, CardHeaderTitle, CardWrapper } from "@conduction/components";

interface CardsResultsTemplateProps {
  requests: any[];
}

export const CardsResultsTemplate: React.FC<CardsResultsTemplateProps> = ({ requests }) => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className={styles.componentsGrid}>
        {requests.map((request) => (
          <CardWrapper
            key={request._self.id}
            className={styles.cardContainer}
            onClick={() => navigate(request._self.id)}
            tabIndex={0}
            aria-label={`${request.titel}, ${request.samenvatting}, ${
              request.publicatiedatum ? translateDate(i18n.language, request.publicatiedatum) : t("N/A")
            }`}
          >
            <CardHeader className={styles.cardHeader}>
              <CardHeaderDate>
                {request.publicatiedatum ? translateDate(i18n.language, request.publicatiedatum) : t("N/A")}
              </CardHeaderDate>
              <CardHeaderTitle className={styles.title}>
                <Heading2>{request.titel ?? t("No title available")}</Heading2>
              </CardHeaderTitle>
            </CardHeader>

            <Paragraph className={styles.description}>{request.samenvatting}</Paragraph>
          </CardWrapper>
        ))}
      </div>
    </>
  );
};
