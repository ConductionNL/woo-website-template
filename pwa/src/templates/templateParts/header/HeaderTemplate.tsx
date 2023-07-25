import * as React from "react";
import * as styles from "./HeaderTemplate.module.css";
import clsx from "clsx";

import { UtrechtPageHeader } from "@utrecht/web-component-library-react";

interface HeaderTemplateProps {
  layoutClassName?: string;
}

export const HeaderTemplate: React.FC<HeaderTemplateProps> = ({ layoutClassName }) => {
  return (
    <UtrechtPageHeader className={clsx(styles.container, [layoutClassName && layoutClassName])}>
      To-do: make header
    </UtrechtPageHeader>
  );
};
