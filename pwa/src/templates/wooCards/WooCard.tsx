import * as React from "react";
import * as styles from "./WooCard.module.css";
import { Heading2, Paragraph } from "@utrecht/component-library-react/dist/css-module";
import { useTranslation } from "react-i18next";
import { translateDate } from "../../services/dateFormat";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { navigate } from "gatsby";

export interface WooCardProps {
  id: string;
  title: string;
  description: string;
  decisionDate: Date;
}

export const WooCard: React.FC<WooCardProps> = ({ id, title, description, decisionDate }) => {
  const { t, i18n } = useTranslation();

  return (
    <div className={styles.container} onClick={() => navigate(`${id}`)}>
      <div className={styles.date}>
        <FontAwesomeIcon icon={faClock} /> {translateDate(i18n.language, decisionDate) ?? "-"}
      </div>
      <Heading2 className={styles.titleLink}>{title}</Heading2>
      <Paragraph>{description}</Paragraph>
    </div>
  );
};
