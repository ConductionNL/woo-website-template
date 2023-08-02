import * as React from "react";
import * as styles from "./LandingTemplate.module.css";
import { Page, PageContent, Heading1, Paragraph } from "@utrecht/component-library-react/dist/css-module";
import { FiltersTemplate } from "../templateParts/filters/FiltersTemplate";
import { ResultsDisplayTemplate } from "../templateParts/resultsDisplayTemplate/ResultsDisplayTemplate";

export const LandingTemplate: React.FC = () => {
  return (
    <Page>
      <PageContent className={styles.container}>
        <Heading1>Wooo dossiers van {process.env.GATSBY_ORGANISATION_NAME}</Heading1>

        <Paragraph lead>Op deze pagina vind u de Woo dossiers van {process.env.GATSBY_ORGANISATION_NAME}</Paragraph>

        <FiltersTemplate />

        <ResultsDisplayTemplate displayKey="landing-results" />
      </PageContent>
    </Page>
  );
};
