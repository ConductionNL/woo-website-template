import * as React from "react";
import * as styles from "./HeaderTemplate.module.css";

import { PageHeader } from "@utrecht/component-library-react/dist/css-module";
import { navigate } from "gatsby";

export const HeaderTemplate: React.FC = () => {
  return (
    <PageHeader>
      <div className={styles.container}>
        <span onClick={() => navigate("/")} className={styles.title}>
          Wet open overheid (Woo)
        </span>
      </div>
    </PageHeader>
  );
};
