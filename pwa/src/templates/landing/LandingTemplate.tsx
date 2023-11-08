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
import { Container, Pagination } from "@conduction/components";
import { usePaginationContext } from "../../context/pagination";
import { useTranslation } from "react-i18next";
import {
  BreadcrumbNav,
  BreadcrumbNavLink,
  BreadcrumbNavSeparator,
  Icon,
  Alert,
  CodeBlock,
  Code,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  DataBadge,
} from "@utrecht/component-library-react";
import { navigate } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faCircleCheck, faCircleInfo, faWarning } from "@fortawesome/free-solid-svg-icons";
import { BadgeCounter } from "@utrecht/component-library-react";
import { Tab, TabList, TabPanel, Tabs } from "@conduction/components";
import { useQueryLimitContext } from "../../context/queryLimit";
import { PaginationLimitSelectComponent } from "../../components/paginationLimitSelect/PaginationLimitSelect";
import { getTokenValue } from "../../services/getTokenValue";
import { PieChart } from "react-minimal-pie-chart";
import { TOOLTIP_ID } from "../../layout/Layout";

export const LandingTemplate: React.FC = () => {
  const { currentPage, setCurrentPage } = usePaginationContext();
  const { filters } = useFiltersContext();
  const { t } = useTranslation();
  const { queryLimit } = useQueryLimitContext();

  const queryClient = new QueryClient();
  const getItems = useOpenWoo(queryClient).getAll(filters, currentPage, queryLimit.openWooObjectsQueryLimit);

  const translatedCrumbs = [
    { crumbLabel: "OpenCatalogi", pathname: "/" },
    { crumbLabel: "Componenten overzicht", pathname: "/0fb4aca0-6abc-41e2-af6b-552f066e23d3" },
    { crumbLabel: "Component" },
  ];

  const handleBreadcrumbClick = (e: React.MouseEvent<HTMLElement, MouseEvent>, pathname: string) => {
    e.preventDefault();

    navigate(pathname);
  };

  React.useEffect(() => {
    setCurrentPage(1);
  }, [queryLimit.openWooObjectsQueryLimit]);

  return (
    <>
      <JumbotronTemplate />

      <Container layoutClassName={styles.breadcrumbsContainer}>
        <BreadcrumbNav className={styles.breadcrumbs} label={t("Breadcrumbs")}>
          {translatedCrumbs.map((crumb: any, idx: number) => {
            if (translatedCrumbs.length !== idx + 1) {
              return (
                <React.Fragment key={idx}>
                  <BreadcrumbNavLink
                    className={styles.breadcrumbNavLink}
                    onClick={(e: any) => handleBreadcrumbClick(e, crumb.pathname)}
                    href=""
                  >
                    {crumb.crumbLabel}
                  </BreadcrumbNavLink>

                  <BreadcrumbNavSeparator>
                    <Icon>
                      <FontAwesomeIcon icon={faChevronRight} />
                    </Icon>
                  </BreadcrumbNavSeparator>
                </React.Fragment>
              );
            }
            return (
              <BreadcrumbNavLink key={idx} className={styles.breadcrumbDisabled} current disabled href="">
                {crumb.crumbLabel}
              </BreadcrumbNavLink>
            );
          })}
        </BreadcrumbNav>
      </Container>

      <Page>
        <PageContent className={styles.container}>
          <Tabs>
            <TabList>
              <Tab>
                <span>Eigen componenten</span>
              </Tab>
              <Tab>
                <span>Test Componenten</span>
              </Tab>
              <Tab>
                <span>
                  Ondersteunde componenten <BadgeCounter>5</BadgeCounter>
                </span>
              </Tab>
              <Tab>
                <span>
                  Gebruikte componenten <BadgeCounter>12</BadgeCounter>
                </span>
              </Tab>
              <Tab>
                <span>
                  Gebruikte componenten <BadgeCounter>12</BadgeCounter>
                </span>
              </Tab>
              <Tab>
                <span>
                  Gebruikte componenten <BadgeCounter>12</BadgeCounter>
                </span>
              </Tab>
              <Tab>
                <span>
                  Gebruikte componenten <BadgeCounter>12</BadgeCounter>
                </span>
              </Tab>
              <Tab>
                <span>
                  Gebruikte componenten <BadgeCounter>12</BadgeCounter>
                </span>
              </Tab>
              <Tab>
                <span>
                  Gebruikte componenten <BadgeCounter>12</BadgeCounter>
                </span>
              </Tab>
              <Tab>
                <span>
                  Gebruikte componenten <BadgeCounter>12</BadgeCounter>
                </span>
              </Tab>
              <Tab>
                <span>
                  Gebruikte componenten <BadgeCounter>12</BadgeCounter>
                </span>
              </Tab>
              <Tab>
                <span>
                  Gebruikte componenten <BadgeCounter>12</BadgeCounter>
                </span>
              </Tab>
            </TabList>
            <TabPanel>
              <div>
                <span>EigenComponenten</span>
              </div>
            </TabPanel>
            <TabPanel>
              <div>
                <span>TestComponenten</span>
              </div>
            </TabPanel>
            <TabPanel>
              <div>
                <span>OndersteundeComponenten</span>
              </div>
            </TabPanel>
            <TabPanel>
              <div>
                <span>GebruikteCompontente</span>
              </div>
            </TabPanel>
            <TabPanel>
              <div>
                <span>GebruikteCompontente</span>
              </div>
            </TabPanel>
            <TabPanel>
              <div>
                <span>GebruikteCompontente</span>
              </div>
            </TabPanel>
            <TabPanel>
              <div>
                <span>GebruikteCompontente</span>
              </div>
            </TabPanel>
            <TabPanel>
              <div>
                <span>GebruikteCompontente</span>
              </div>
            </TabPanel>
            <TabPanel>
              <div>
                <span>GebruikteCompontente</span>
              </div>
            </TabPanel>
            <TabPanel>
              <div>
                <span>GebruikteCompontente</span>
              </div>
            </TabPanel>
            <TabPanel>
              <div>
                <span>GebruikteCompontente</span>
              </div>
            </TabPanel>
            <TabPanel>
              <div>
                <span>GebruikteCompontente</span>
              </div>
            </TabPanel>
          </Tabs>

          <BadgeCounter>1</BadgeCounter>

          <Alert className={styles.info} icon={<FontAwesomeIcon icon={faCircleInfo} />} type="info">
            Oops, something went wrong retrieving the .md file from GitHub.
          </Alert>
          <Alert className={styles.ok} icon={<FontAwesomeIcon icon={faCircleCheck} />} type="ok">
            Oops, something went wrong retrieving the .md file from GitHub.
          </Alert>
          <Alert className={styles.warning} icon={<FontAwesomeIcon icon={faWarning} />} type="warning">
            Oops, something went wrong retrieving the .md file from GitHub.
          </Alert>
          <Alert className={styles.error} icon={<FontAwesomeIcon icon={faWarning} />} type="error">
            Oops, something went wrong retrieving the .md file from GitHub.
          </Alert>

          <div>
            this is a bit of <Code>code</Code> in a text about <Code>helm install </Code>
          </div>
          <CodeBlock>helm install [my-opencatalogi] open-catalogi/opencatalogi </CodeBlock>

          <Heading1>Heading1</Heading1>
          <Heading2>Heading2</Heading2>
          <Heading3>Heading3</Heading3>
          <Heading4>Heading4</Heading4>
          <Heading5>Heading5</Heading5>

          <div className={styles.pieChartContainer}>
            <PieChart
              className={styles.ratingPieChart}
              data={[{ value: 1, key: 1, color: getTokenValue(styles.ratingBarActiveColor), title: `4/11` }]}
              reveal={(4 / 11) * 100}
              lineWidth={20}
              background={getTokenValue(styles.ratingBarBackgroundColor)}
              startAngle={270}
              lengthAngle={360}
              rounded
              animate
              animationDuration={1750}
              label={({ dataEntry }) => dataEntry.title}
              labelStyle={{
                fontSize: getTokenValue(styles.ratingFontSize),
                fontFamily: getTokenValue(styles.ratingFontFamily),
                fill: getTokenValue(styles.ratingBarActiveColor),
              }}
              labelPosition={0}
            />
          </div>

          <DataBadge data-tooltip-id={TOOLTIP_ID} data-tooltip-content={"Tooltip"} className={styles.tagWidth}>
            DataBadge with Tooltip
          </DataBadge>

          <FiltersTemplate isLoading={getItems.isLoading} />
          {getItems.data?.results?.length === 0 && !getItems.isLoading && <span>{t("No results found")}.</span>}

          {getItems.data?.results && getItems.data?.results?.length > 0 && (
            <div id="mainContent">
              <ResultsDisplayTemplate displayKey="landing-results" requests={getItems.data.results} />
              <div className={styles.pagination}>
                <Pagination
                  ariaLabels={{ previousPage: t("Previous page"), nextPage: t("Next page"), page: t("Page") }}
                  totalPages={getItems.data.pages}
                  {...{ currentPage, setCurrentPage }}
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
