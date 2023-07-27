import * as React from "react";
import * as styles from "./CardsResultsTemplate.module.css";
import { TEMP_OBJECTS } from "../../../data/detail";
import { WooCard } from "../../wooCards/WooCard";

export const CardsResultsTemplate: React.FC = () => {
  const objects = TEMP_OBJECTS;
  return (
    <div className={styles.ComponentsGrid}>
      {objects.map((object, idx) => (
        <WooCard
          key={idx}
          id={object.id}
          title={object.name}
          description={object.resume}
          decisionDate={object.decisionDate}
        />
      ))}
    </div>
  );
};
