import * as React from "react";
import * as styles from "./LandingTemplate.module.css";
import Skeleton from "react-loading-skeleton";
import { Page, PageContent } from "@utrecht/component-library-react/dist/css-module";
import { FiltersTemplate } from "../templateParts/filters/FiltersTemplate";
import { ResultsDisplayTemplate } from "../templateParts/resultsDisplayTemplate/ResultsDisplayTemplate";
import { JumbotronTemplate } from "../jumbotronTemplate/JumbotronTemplate";
import { useOpenWoo } from "../../hooks/openWoo";
import { useFiltersContext } from "../../context/filters";
import { QueryClient } from "react-query";
import { Pagination } from "@conduction/components";
import { usePaginationContext } from "../../context/pagination";
import { useTranslation } from "react-i18next";
import { useQueryLimitContext } from "../../context/queryLimit";
import { PaginationLimitSelectComponent } from "../../components/paginationLimitSelect/PaginationLimitSelect";

export const LandingTemplate: React.FC = () => {
  const { t } = useTranslation();
  const { filters } = useFiltersContext(); 
  const { pagination, setPagination } = usePaginationContext();
  const { queryLimit, setQueryLimit } = useQueryLimitContext();

  const queryClient = new QueryClient();
  const getItems = useOpenWoo(queryClient).getAll(filters, pagination.currentPage, queryLimit.openWooObjectsQueryLimit);

  React.useEffect(() => {
    if (queryLimit.openWooObjectsQueryLimit === queryLimit.previousOpenWooObjectsQueryLimit) return;

    setPagination({ currentPage: 1 });
    setQueryLimit({ ...queryLimit, previousOpenWooObjectsQueryLimit: queryLimit.openWooObjectsQueryLimit });
  }, [queryLimit.openWooObjectsQueryLimit]);

  return (
    <>
      <JumbotronTemplate />

      <Page>
        <PageContent className={styles.container}>
          <FiltersTemplate isLoading={getItems.isLoading} />
          {getItems.data?.results?.length === 0 && !getItems.isLoading && <span>{t("No results found")}.</span>}

          {getItems.data?.results && getItems.data?.results?.length > 0 && (
            <div id="mainContent">
              <ResultsDisplayTemplate displayKey="landing-results" requests={getItems.data.results} />
              <div role="region" aria-label={t("Pagination")} className={styles.pagination}>
                <Pagination
                  ariaLabels={{
                    pagination: t("Pagination"),
                    previousPage: t("Previous page"),
                    nextPage: t("Next page"),
                    page: t("Page"),
                  }}
                  totalPages={getItems.data.pages}
                  currentPage={getItems.data.page}
                  setCurrentPage={(page: any) => setPagination({ currentPage: page })}
                />
                <PaginationLimitSelectComponent queryLimitName={"openWooObjectsQueryLimit"} />
              </div>
            </div>
          )}
          {getItems.isLoading && <Skeleton height={"200px"} />}
        </PageContent>
      </Page>
    </>
  );
};
