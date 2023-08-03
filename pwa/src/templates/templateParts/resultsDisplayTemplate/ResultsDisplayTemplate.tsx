import * as React from "react";
import { useDisplayContext } from "../../../context/displays";
import { CardsResultsTemplate } from "../cardsResultsTemplate/CardsResultsTemplate";
import { TableResultsTemplate } from "../tableResultsTemplate/TableResultsTemplate";

interface ResultsDisplayTemplateProps {
  requests: any[];
  displayKey: string; // should implement with an unique key
}

export const ResultsDisplayTemplate: React.FC<ResultsDisplayTemplateProps> = ({ requests, displayKey }) => {
  const { displays, setDisplay } = useDisplayContext();

  React.useEffect(() => {
    if (displays[displayKey]) return; // already registered

    setDisplay({ [displayKey]: "cards" }); // register default to "cards"
  }, []);

  return (
    <>
      {displays[displayKey] === "cards" && <CardsResultsTemplate {...{ requests }} />}
      {displays[displayKey] === "table" && <TableResultsTemplate {...{ requests }} />}
    </>
  );
};
