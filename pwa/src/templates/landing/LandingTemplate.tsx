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
} from "@utrecht/component-library-react";
import { navigate } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faChevronRight,
  faCircleCheck,
  faCircleInfo,
  faInfo,
  faWarning,
} from "@fortawesome/free-solid-svg-icons";
import { BadgeCounter } from "@utrecht/component-library-react";
import { Tab, TabList, TabPanel, Tabs } from "@conduction/components";

export const LandingTemplate: React.FC = () => {
  const { currentPage, setCurrentPage } = usePaginationContext();
  const { filters } = useFiltersContext();
  const { t } = useTranslation();

  const queryClient = new QueryClient();
  const getItems = useOpenWoo(queryClient).getAll(filters, currentPage);

  const translatedCrumbs = [
    { crumbLabel: "OpenCatalogi", pathname: "/" },
    { crumbLabel: "Componenten overzicht", pathname: "/0fb4aca0-6abc-41e2-af6b-552f066e23d3" },
    { crumbLabel: "Component" },
  ];

  const handleBreadcrumbClick = (e: React.MouseEvent<HTMLElement, MouseEvent>, pathname: string) => {
    e.preventDefault();

    navigate(pathname);
  };

  return (
    <>
      <h1 className={styles.header1}></h1>
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

          <FiltersTemplate isLoading={getItems.isLoading} />
          {getItems.data?.results?.length === 0 && !getItems.isLoading && <span>{t("No results found")}.</span>}

          {getItems.data?.results && getItems.data?.results?.length > 0 && (
            <div id="mainContent">
              <ResultsDisplayTemplate displayKey="landing-results" requests={getItems.data.results} />

              <Pagination
                ariaLabels={{ previousPage: t("Previous page"), nextPage: t("Next page"), page: t("Page") }}
                totalPages={getItems.data.pages}
                {...{ currentPage, setCurrentPage }}
              />
            </div>
          )}
          {getItems.isLoading && <Skeleton height={"200px"} />}
        </PageContent>
      </Page>
    </>
  );
};
