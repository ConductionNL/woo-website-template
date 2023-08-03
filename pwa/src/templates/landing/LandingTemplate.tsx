import * as React from "react";
import * as styles from "./LandingTemplate.module.css";
import { Page, PageContent } from "@utrecht/component-library-react/dist/css-module";
import { FiltersTemplate } from "../templateParts/filters/FiltersTemplate";
import { ResultsDisplayTemplate } from "../templateParts/resultsDisplayTemplate/ResultsDisplayTemplate";
import { JumbotronTemplate } from "../jumbotronTemplate/JumbotronTemplate";
import { useWooRequests } from "../../hooks/wooRequests";
import { useFiltersContext } from "../../context/filters";
import Skeleton from "react-loading-skeleton";
import { QueryClient } from "react-query";

export const LandingTemplate: React.FC = () => {
  const { filters } = useFiltersContext();

  const queryClient = new QueryClient();
  const getRequests = useWooRequests(queryClient).getAll({ ...filters });

  return (
    <>
      <JumbotronTemplate />

      <Page>
        <PageContent className={styles.container}>
          <FiltersTemplate />

          {getRequests.data?.results?.length === 0 && !getRequests.isLoading && (
            <span>Geen WOO verzoeken gevonden.</span>
          )}

          {getRequests.data?.results && getRequests.data?.results?.length > 0 && (
            <ResultsDisplayTemplate displayKey="landing-results" requests={getRequests.data.results} />
          )}

          {getRequests.isLoading && <Skeleton height={"200px"} />}
        </PageContent>
      </Page>
    </>
  );
};
