import * as React from "react";
import * as styles from "./LandingTemplate.module.css";
import { Page, PageContent } from "@utrecht/component-library-react/dist/css-module";
import { FiltersTemplate } from "../templateParts/filters/FiltersTemplate";
import { ResultsDisplayTemplate } from "../templateParts/resultsDisplayTemplate/ResultsDisplayTemplate";
import { JumbotronTemplate } from "../jumbotronTemplate/JumbotronTemplate";
import { useOpenWoo } from "../../hooks/openWoo";
import { useFiltersContext } from "../../context/filters";
import Skeleton from "react-loading-skeleton";
import { QueryClient } from "react-query";
import { Pagination } from "@conduction/components";
import { usePaginationContext } from "../../context/pagination";
import { useTranslation } from "react-i18next";

export const LandingTemplate: React.FC = () => {
  const { currentPage, setCurrentPage } = usePaginationContext();
  const { filters } = useFiltersContext();
  const { t, i18n } = useTranslation();

  const queryClient = new QueryClient();
  const getItems = useOpenWoo(queryClient).getAll(filters, currentPage);

  React.useEffect(() => {
    if (!getItems.data?.results.length) return;

    //Updates aria-label of previous and next pagination buttons to translatable aria-labels
    document
      .querySelectorAll('[class*="Pagination-module--previous"]')[0]
      ?.children[0].setAttribute("aria-label", `${t("Previous page")}`);
    document
      .querySelectorAll('[class*="Pagination-module--next"]')[0]
      ?.children[0].setAttribute("aria-label", `${t("Next page")}`);

    //Adds tabindex of -1 to all disabled and unused pagination buttons
    document.querySelectorAll('[class*="Pagination-module--disabled"]')[0]?.children[0].setAttribute("tabindex", "-1");
    document.querySelectorAll('[class*="Pagination-module--disabled"]')[0]?.setAttribute("tabindex", "-1");
    document
      .querySelectorAll('[class*="Pagination-module--previous"]')[0]
      ?.children[0].children[0].setAttribute("tabindex", "-1");
    document
      .querySelectorAll('[class*="Pagination-module--next"]')[0]
      ?.children[0].children[0].setAttribute("tabindex", "-1");

    //Updates aria-label of all page pagination buttons to translatable aria-labels
    let pageNumbers = Array.from(document.querySelectorAll('[class*="Pagination-module--container"]')[0].children);
    var removeStr = ["Pagination-module--previous", "Pagination-module--next"];
    pageNumbers = pageNumbers.filter(function (val) {
      var found = false;
      for (var i = 0; i < removeStr.length; i++) {
        var str = removeStr[i];
        if (val.className.indexOf(str) > -1) {
          return false;
        }
      }
      return true;
    });
    pageNumbers.map((value: any) => {
      const label = value.children[0].ariaLabel;
      const lastSpaceIndex = label.lastIndexOf(" ");
      const pageNumber = label.substring(lastSpaceIndex + 1);
      value.children[0].setAttribute("aria-label", `${t("Page")} ${pageNumber}`);
    });
  }, [getItems.isSuccess, i18n.language]);

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

              <Pagination totalPages={getItems.data.pages} {...{ currentPage, setCurrentPage }} />
            </div>
          )}
          {getItems.isLoading && <Skeleton height={"200px"} />}
        </PageContent>
      </Page>
    </>
  );
};
