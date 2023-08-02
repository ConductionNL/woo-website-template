import * as React from "react";
import * as styles from "./LandingTemplate.module.css";
import { Page, PageContent } from "@utrecht/component-library-react/dist/css-module";
import { FiltersTemplate } from "../templateParts/filters/FiltersTemplate";
import { ResultsDisplayTemplate } from "../templateParts/resultsDisplayTemplate/ResultsDisplayTemplate";
import { JumbotronTemplate } from "../jumbotronTemplate/JumbotronTemplate";

export const LandingTemplate: React.FC = () => {
  return (
    <>
      <JumbotronTemplate />
      
      <Page>
        <PageContent className={styles.container}>
          <FiltersTemplate />

          <ResultsDisplayTemplate displayKey="landing-results" />
        </PageContent>
      </Page>
    </>
  );
};
