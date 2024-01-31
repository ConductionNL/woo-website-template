import * as React from "react";
import * as styles from "./ResultsDisplaySwitch.module.css";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripVertical, faTable } from "@fortawesome/free-solid-svg-icons";
import { useDisplayContext } from "../../context/displays";
import { Button, ButtonGroup } from "@utrecht/component-library-react/dist/css-module";
import { useTranslation } from "react-i18next";

interface ResultsDisplaySwitchProps {
  displayKey: string; // should implement with an unique key
  layoutClassName?: string;
}

const ResultsDisplaySwitch: React.FC<ResultsDisplaySwitchProps> = ({ layoutClassName, displayKey }) => {
  const { setDisplay, isActive } = useDisplayContext();
  const { t } = useTranslation();

  return (
    <ButtonGroup
      role="region"
      aria-label={t("View")}
      className={clsx(styles.container, layoutClassName && layoutClassName)}
    >
      <Button
        appearance={isActive(displayKey, "cards") ? "primary-action-button" : "secondary-action-button"}
        className={styles.button}
        onClick={() => setDisplay({ [displayKey]: "cards" })}
        aria-label={t("Cards view")}
      >
        <FontAwesomeIcon icon={faGripVertical} /> {t("Cards")}
      </Button>

      <Button
        appearance={isActive(displayKey, "table") ? "primary-action-button" : "secondary-action-button"}
        className={styles.button}
        onClick={() => setDisplay({ [displayKey]: "table" })}
        aria-label={t("Table view")}
      >
        <FontAwesomeIcon icon={faTable} /> {t("Table")}
      </Button>
    </ButtonGroup>
  );
};

export default ResultsDisplaySwitch;
