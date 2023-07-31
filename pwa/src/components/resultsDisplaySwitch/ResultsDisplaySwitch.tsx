import * as React from "react";
import * as styles from "./ResultsDisplaySwitch.module.css";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripVertical, faTable } from "@fortawesome/free-solid-svg-icons";
import { TResultsDisplayLayout, useDisplayContext } from "../../context/displays";
import { Button, ButtonGroup } from "@utrecht/component-library-react/dist/css-module";

interface ResultsDisplaySwitchProps {
  displayKey: string; // should implement with an unique key
  layoutClassName?: string;
}

const ResultsDisplaySwitch: React.FC<ResultsDisplaySwitchProps> = ({ layoutClassName, displayKey }) => {
  const { displays, setDisplay } = useDisplayContext();

  const getButtonAppearance = (display: TResultsDisplayLayout) =>
    display === displays[displayKey] ? "secondary-action-button" : "subtle-button";

  return (
    <ButtonGroup className={clsx(styles.container, layoutClassName && layoutClassName)}>
      <Button onClick={() => setDisplay({ [displayKey]: "cards" })} appearance={getButtonAppearance("cards")}>
        <FontAwesomeIcon icon={faGripVertical} /> Cards
      </Button>

      <Button onClick={() => setDisplay({ [displayKey]: "table" })} appearance={getButtonAppearance("table")}>
        <FontAwesomeIcon icon={faTable} /> Table
      </Button>
    </ButtonGroup>
  );
};

export default ResultsDisplaySwitch;
