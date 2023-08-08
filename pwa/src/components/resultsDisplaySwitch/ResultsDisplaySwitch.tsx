import * as React from "react";
import * as styles from "./ResultsDisplaySwitch.module.css";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripVertical, faTable } from "@fortawesome/free-solid-svg-icons";
import { useDisplayContext } from "../../context/displays";
import { Button, ButtonGroup } from "@utrecht/component-library-react/dist/css-module";

interface ResultsDisplaySwitchProps {
  displayKey: string; // should implement with an unique key
  layoutClassName?: string;
}

const ResultsDisplaySwitch: React.FC<ResultsDisplaySwitchProps> = ({ layoutClassName, displayKey }) => {
  const { setDisplay, isActive } = useDisplayContext();

  return (
    <ButtonGroup className={clsx(styles.container, layoutClassName && layoutClassName)}>
      <Button
        appearance={isActive(displayKey, "cards") ? "primary-action-button" : "secondary-action-button"}
        className={styles.button}
        onClick={() => setDisplay({ [displayKey]: "cards" })}
      >
        <FontAwesomeIcon icon={faGripVertical} /> Cards
      </Button>

      <Button
        appearance={isActive(displayKey, "table") ? "primary-action-button" : "secondary-action-button"}
        className={styles.button}
        onClick={() => setDisplay({ [displayKey]: "table" })}
      >
        <FontAwesomeIcon icon={faTable} /> Table
      </Button>
    </ButtonGroup>
  );
};

export default ResultsDisplaySwitch;
