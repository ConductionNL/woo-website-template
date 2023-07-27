import * as React from "react";
import * as styles from "./LandingTemplate.module.css";
import { Page, PageContent, Heading1, Paragraph } from "@utrecht/component-library-react/dist/css-module";
import { FiltersTemplate } from "../templateParts/filters/FiltersTemplate";
import { LandingDisplayTemplate } from "../templateParts/landingDisplayTemplate/LandingDisplayTemplate";
import ResultsDisplaySwitch from "../../components/resultsDisplaySwitch/ResultsDisplaySwitch";
import { useDisplayContext } from "../../context/displays";

export const LandingTemplate: React.FC = () => {
  const { displays } = useDisplayContext();

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

        <ResultsDisplaySwitch
          resultsDisplayType="landingDisplayLayout"
          layoutClassName={styles.landingDisplaySwitchButtons}
        />

        <LandingDisplayTemplate type={displays.landingDisplayLayout} />
      </PageContent>
    </Page>
  );
};
