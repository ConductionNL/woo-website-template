import * as React from "react";
import * as styles from "./CardsResultsTemplate.module.css";
import { Card } from "../../../components/card/Card";

interface CardsResultsTemplateProps {
  requests: any[];
}

export const CardsResultsTemplate: React.FC<CardsResultsTemplateProps> = ({ requests }) => {
  return (
    <>
      <div className={styles.ComponentsGrid}>
        {requests.map((request) => (
          <Card
            key={request.id}
            id={request.id}
            title={request.Titel}
            description={request.Samenvatting}
            decisionDate={request.Besluitdatum}
          />
        ))}
      </div>
    </>
  );
};
