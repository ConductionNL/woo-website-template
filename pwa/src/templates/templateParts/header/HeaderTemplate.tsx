import * as React from "react";
import * as styles from "./HeaderTemplate.module.css";

import { PageHeader } from "@utrecht/component-library-react/dist/css-module";
import { navigate } from "gatsby";
import clsx from "clsx";

interface HeaderTemplateProps {
  layoutClassName: string;
}

export const HeaderTemplate: React.FC<HeaderTemplateProps> = ({ layoutClassName }) => {
  return (
    <PageHeader className={clsx(layoutClassName && layoutClassName)}>
      <div className={styles.container}>
        <img
          className={styles.image}
          onClick={() => navigate("/")}
          src={process.env.GATSBY_HEADER_LOGO_URL}
          alt={"Navbar-logo"}
        />
      </div>
    </PageHeader>
  );
};
