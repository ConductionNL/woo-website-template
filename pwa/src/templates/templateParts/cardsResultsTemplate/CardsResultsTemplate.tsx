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
            key={request.id}
            className={styles.cardContainer}
            onClick={() => navigate(request.id)}
            tabIndex={0}
            aria-label={`${request.Titel}, ${request.Samenvatting}, ${
              request.Publicatiedatum ? translateDate(i18n.language, request.Publicatiedatum) : t("N/A")
            }`}
          >
            <CardHeader>
              <CardHeaderDate>
                {request.Publicatiedatum ? translateDate(i18n.language, request.Publicatiedatum) : t("N/A")}
              </CardHeaderDate>
              <CardHeaderTitle className={styles.title}>
                <Heading2>{request.Titel ?? t("No title available")}</Heading2>
              </CardHeaderTitle>
            </CardHeader>

            <Paragraph className={styles.description}>{request.Samenvatting}</Paragraph>
          </CardWrapper>
        ))}
      </div>
    </>
  );
};
