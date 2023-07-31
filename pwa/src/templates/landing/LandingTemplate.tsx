import * as React from "react";
import * as styles from "./LandingTemplate.module.css";
import { Page, PageContent, Heading1, Paragraph } from "@utrecht/component-library-react/dist/css-module";
import { FiltersTemplate } from "../templateParts/filters/FiltersTemplate";
import { ResultsDisplayTemplate } from "../templateParts/resultsDisplayTemplate/ResultsDisplayTemplate";

export const LandingTemplate: React.FC = () => {
  return (
    <Page>
      <PageContent className={styles.container}>
        <Heading1>Title</Heading1>

        <Paragraph lead>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris convallis pellentesque nisi quis venenatis.
          Vestibulum sed metus ac augue dapibus feugiat. Aliquam erat volutpat. Praesent euismod ultricies rhoncus.
          Donec rutrum tellus id turpis ornare, in imperdiet arcu commodo.{" "}
        </Paragraph>

        <FiltersTemplate />

        <ResultsDisplayTemplate displayKey="landing-results" />
      </PageContent>
    </Page>
  );
};
