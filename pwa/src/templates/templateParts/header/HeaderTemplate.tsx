import * as React from "react";
import * as styles from "./HeaderTemplate.module.css";
import { Container } from "@conduction/components";
import { TopNav } from "../topNav/TopNav";
import clsx from "clsx";
import { UtrechtPageHeader } from "@utrecht/web-component-library-react";

interface HeaderTemplateProps {
  layoutClassName?: string;
}

export const HeaderTemplate: React.FC<HeaderTemplateProps> = ({ layoutClassName }) => {
  return (
    <UtrechtPageHeader
      id="header"
      style={{ backgroundColor: "white" }} // temporary fix due to header tokens not being set correctly
      className={clsx(styles.container, [layoutClassName && layoutClassName])}
    >
      <Container>
        <TopNav />
      </Container>
    </UtrechtPageHeader>
  );
};
