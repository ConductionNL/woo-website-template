import * as React from "react";
import * as styles from "./CardsResultsTemplate.module.css";
import { TEMP_OBJECTS } from "../../../data/detail";
import { Card } from "../../../components/card/Card";

export const CardsResultsTemplate: React.FC = () => {
  return (
    <div className={styles.ComponentsGrid}>
      {TEMP_OBJECTS.map(({ id, name, resume, decisionDate }) => (
        <Card key={id} id={id} title={name} description={resume} decisionDate={decisionDate} />
      ))}
    </div>
  );
};
