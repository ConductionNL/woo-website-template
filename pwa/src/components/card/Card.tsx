import * as React from "react";
import * as styles from "./Card.module.css";
import { Heading2, Paragraph } from "@utrecht/component-library-react/dist/css-module";
import { useTranslation } from "react-i18next";
import { translateDate } from "../../services/dateFormat";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { navigate } from "gatsby";
import clsx from "clsx";

export interface CardProps {
  id: string;
  title: string;
  description: string;
  decisionDate: Date;
}

export const Card: React.FC<CardProps> = ({ id, title, description, decisionDate }) => {
  const { i18n } = useTranslation();

  return (
    <div className={styles.container} onClick={() => navigate(id)}>
      <div className={styles.date}>
        <FontAwesomeIcon icon={faClock} /> {translateDate(i18n.language, decisionDate) ?? "-"}
      </div>

      <Heading2 className={styles.title}>{title}</Heading2>

      <Paragraph className={styles.description}>{description}</Paragraph>
    </div>
  );
};
