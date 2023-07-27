import * as React from "react";
import * as styles from "./ResultsDisplaySwitch.module.css";
import _ from "lodash";
import clsx from "clsx";
import { Button, ButtonGroup } from "@utrecht/component-library-react/dist/css-module";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripVertical, faTable } from "@fortawesome/free-solid-svg-icons";
import { useDisplayContext } from "../../context/displays";

interface AcceptedFilters {
  landingDisplayLayout: ["cards", "table"];
}

interface ResultsDisplaySwitchProps {
  layoutClassName?: string;
  resultsDisplayType: "landingDisplayLayout";
}

const ResultsDisplaySwitch: React.FC<ResultsDisplaySwitchProps> = ({ layoutClassName, resultsDisplayType }) => {
  const { t } = useTranslation();
  const { displays, setDisplay } = useDisplayContext();

  const acceptedFilters: AcceptedFilters = {
    landingDisplayLayout: ["cards", "table"],
  };

  return (
    <ButtonGroup className={clsx(styles.resultsDisplaySwitchButtons, [layoutClassName] && layoutClassName)}>
      {acceptedFilters[resultsDisplayType].map((displayType, idx: number) => {
        let icon = faTable;

        if (displayType === "table") icon = faTable;
        if (displayType === "cards") icon = faGripVertical;

        // TODO: Once the Rotterdam design system supports the "pressed" state,
        // remove the `appereance` switch, and use the same appearance for each button.
        return (
          <Button
            key={idx}
            pressed={displays[resultsDisplayType] === displayType}
            appearance={displays[resultsDisplayType] === displayType ? "secondary-action-button" : "subtle-button"}
            onClick={() => setDisplay({ ...displays, [resultsDisplayType]: displayType })}
          >
            <FontAwesomeIcon icon={icon} />
            <span>{t(_.upperFirst(displayType))}</span>
          </Button>
        );
      })}
    </ButtonGroup>
  );
};

export default ResultsDisplaySwitch;
