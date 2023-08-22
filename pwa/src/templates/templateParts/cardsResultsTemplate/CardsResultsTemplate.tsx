import * as React from "react";
import * as styles from "./CardsResultsTemplate.module.css";
import { Heading2, Paragraph } from "@utrecht/component-library-react/dist/css-module";
import { CardWrapper } from "@conduction/components/lib/components/card";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { translateDate } from "../../../services/dateFormat";
import { useTranslation } from "react-i18next";
import { navigate } from "gatsby";

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
            <div className={styles.date}>
              <FontAwesomeIcon icon={faClock} /> {translateDate(i18n.language, request.Besluitdatum) ?? "-"}
            </div>

            <Heading2 className={styles.title}>{request.Titel}</Heading2>

            <Paragraph className={styles.description}>{request.Samenvatting}</Paragraph>
          </CardWrapper>
        ))}
      </div>
    </>
  );
};
