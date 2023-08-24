import * as React from "react";
import * as styles from "./CardsResultsTemplate.module.css";
import { Heading2, Paragraph } from "@utrecht/component-library-react/dist/css-module";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { translateDate } from "../../../services/dateFormat";
import { useTranslation } from "react-i18next";
import { navigate } from "gatsby";
import { CardHeader, CardHeaderDate, CardHeaderTitle, CardWrapper } from "@conduction/components/lib/components/card";

interface CardsResultsTemplateProps {
  requests: any[];
}

export const CardsResultsTemplate: React.FC<CardsResultsTemplateProps> = ({ requests }) => {
  const { i18n } = useTranslation();

  return (
    <>
      <div className={styles.componentsGrid}>
        {requests.map((request) => (
          <CardWrapper key={request.id} className={styles.cardContainer} onClick={() => navigate(request.id)}>
            <CardHeader>
              <CardHeaderDate>
                <FontAwesomeIcon icon={faClock} /> {translateDate(i18n.language, request.Besluitdatum) ?? "-"}
              </CardHeaderDate>
              <CardHeaderTitle className={styles.title}>
                <Heading2>{request.Titel}</Heading2>
              </CardHeaderTitle>
            </CardHeader>

            <Paragraph className={styles.description}>{request.Samenvatting}</Paragraph>
          </CardWrapper>
        ))}
      </div>
    </>
  );
};
