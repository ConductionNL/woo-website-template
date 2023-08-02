import * as React from "react";
import * as styles from "./ResultsDisplayTemplate.module.css";
import { useDisplayContext } from "../../../context/displays";
import { CardsResultsTemplate } from "../cardsResultsTemplate/CardsResultsTemplate";
import { TableResultsTemplate } from "../tableResultsTemplate/TableResultsTemplate";
import ResultsDisplaySwitch from "../../../components/resultsDisplaySwitch/ResultsDisplaySwitch";

interface ResultsDisplayTemplateProps {
  displayKey: string; // should implement with an unique key
}

export const ResultsDisplayTemplate: React.FC<ResultsDisplayTemplateProps> = ({ displayKey }) => {
  const { displays, setDisplay } = useDisplayContext();

  React.useEffect(() => {
    if (displays[displayKey]) return; // already registered

    setDisplay({ [displayKey]: "cards" }); // register default to "cards"
  }, []);

  return (
    <>
      <div className={styles.displaySwitchContainer}>
        <ResultsDisplaySwitch {...{ displayKey }} />
      </div>

      {displays[displayKey] === "cards" && <CardsResultsTemplate />}
      {displays[displayKey] === "table" && <TableResultsTemplate />}
    </>
  );
};
