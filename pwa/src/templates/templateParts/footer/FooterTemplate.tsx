import * as React from "react";
import * as styles from "./FooterTemplate.module.css";

import { PageFooter } from "@utrecht/component-library-react/dist/css-module";

export const FooterTemplate: React.FC = () => {
  return (
    <PageFooter>
      <div className={styles.container}>
        <div>Wet open overheid (Woo) template.</div>

        <div>
          Powered by{" "}
          <a href="https://conduction.nl" target="_blank">
            Conduction.
          </a>
        </div>
      </div>
    </PageFooter>
  );
};
