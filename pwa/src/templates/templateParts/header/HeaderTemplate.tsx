import * as React from "react";
import * as styles from "./HeaderTemplate.module.css";

import { PageHeader } from "@utrecht/component-library-react/dist/css-module";
import { navigate } from "gatsby";

export const HeaderTemplate: React.FC = () => {
  return (
    <PageHeader>
      <div className={styles.container}>
        <div className={styles.content}>
          <img
            className={styles.image}
            onClick={() => navigate("/")}
            src={process.env.GATSBY_HEADER_LOGO_URL}
            alt={"Navbar-logo"}
          />
        </div>
      </div>
    </PageHeader>
  );
};
