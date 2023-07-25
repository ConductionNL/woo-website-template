import * as React from "react";
import * as styles from "./HeaderTemplate.module.css";

import { PageHeader } from "@utrecht/component-library-react/dist/css-module";

export const HeaderTemplate: React.FC = () => {
  return (
    <PageHeader className={styles.wrapper}>
      <div className={styles.container}>Header</div>
    </PageHeader>
  );
};
