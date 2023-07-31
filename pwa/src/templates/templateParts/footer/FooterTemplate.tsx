import * as React from "react";
import * as styles from "./FooterTemplate.module.css";

import { PageFooter } from "@utrecht/component-library-react/dist/css-module";

export const FooterTemplate: React.FC = () => {
  return (
    <PageFooter>
      <div className={styles.container}>To-do: make footer</div>
    </PageFooter>
  );
};
