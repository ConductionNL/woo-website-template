import * as React from "react";
import * as styles from "./ThemeTemplate.module.css";
import clsx from "clsx";
import { Page, PageContent } from "@utrecht/component-library-react/dist/css-module";
import { useFiltersContext } from "../../context/filters";
import {
  CardHeader,
  CardHeaderDate,
  CardHeaderTitle,
  CardWrapper,
  Container,
  HorizontalOverflowWrapper,
  InputText,
  Logo,
  Pagination,
  PrimaryTopNav,
  SecondaryTopNav,
  SelectMultiple,
  SelectSingle,
  Tab,
  TabList,
  TabPanel,
  Tabs,
} from "@conduction/components";
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
  Link,
  OrderedList,
  OrderedListItem,
  UnorderedList,
  UnorderedListItem,
  Separator,
  Button,
  ButtonGroup,
  Table,
  TableHeader,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
} from "@utrecht/component-library-react";
import { useTranslation } from "react-i18next";
import { navigate } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faChevronRight,
  faCircleCheck,
  faCircleInfo,
  faCircleUser,
  faWarning,
} from "@fortawesome/free-solid-svg-icons";
import { BadgeCounter } from "@utrecht/component-library-react";
import { getTokenValue } from "../../services/getTokenValue";
import { PieChart } from "react-minimal-pie-chart";
import { TOOLTIP_ID } from "../../layout/Layout";
import { useForm } from "react-hook-form";
import { translateDate } from "../../services/dateFormat";
import { useHeaderTopNavItems } from "../../hooks/useHeaderTopNavItems";
import { useGatsbyContext } from "../../context/gatsby";
import { SelectCreate } from "@conduction/components/lib/components/formFields";
import { SELECT_CREATE, SELECT_MULTIPLE, SELECT_SINGLE } from "../../data/SelectData";

export const ThemeTemplate: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [buttonsDisabled, setButtonsDisabled] = React.useState<boolean>(false);
  const [selectMaxWith, setSelectMaxWith] = React.useState<boolean>(true);
  const { gatsbyContext } = useGatsbyContext();

  const { filters } = useFiltersContext();
  const { t, i18n } = useTranslation();

  const cardDate: any = "2023-10-18T02:00:00Z";

  const translatedCrumbs = [
    { crumbLabel: "OpenCatalogi", pathname: "/" },
    { crumbLabel: "Componenten overzicht", pathname: "/0fb4aca0-6abc-41e2-af6b-552f066e23d3" },
    { crumbLabel: "Component" },
  ];

  const navItemsData = require("./NavItems.json");
  const { headerTopNavItems } = useHeaderTopNavItems(navItemsData);

  const {
    control,
    register,
    formState: { errors },
  } = useForm();

  const handleBreadcrumbClick = (e: React.MouseEvent<HTMLElement, MouseEvent>, pathname: string) => {
    e.preventDefault();

    navigate(pathname);
  };

  const secondaryTopNavItems = [
    {
      label: t("SecondaryNavItem"),
      type: "external",
      current: gatsbyContext.location.pathname === "/theme",
      handleClick: () => {
        open(process.env.ADMIN_DASHBOARD_URL ?? "#");
      },
      icon: <FontAwesomeIcon icon={faCircleUser} />,
    },
  ];

  return (
    <Page>
      <PageContent className={styles.container}>
        <h2>Utrecht Components:</h2>

        <div>
          <h3 className={styles.header}>Alerts:</h3>
          <section className={styles.section}>
            <span>Info:</span>
            <Alert className={styles.info} icon={<FontAwesomeIcon icon={faCircleInfo} />} type="info">
              Oops, something went wrong retrieving the .md file from GitHub.
            </Alert>

            <span>Ok:</span>
            <Alert className={styles.ok} icon={<FontAwesomeIcon icon={faCircleCheck} />} type="ok">
              Oops, something went wrong retrieving the .md file from GitHub.
            </Alert>

            <span>Warning:</span>
            <Alert className={styles.warning} icon={<FontAwesomeIcon icon={faWarning} />} type="warning">
              Oops, something went wrong retrieving the .md file from GitHub.
            </Alert>

            <span>Error:</span>
            <Alert className={styles.error} icon={<FontAwesomeIcon icon={faWarning} />} type="error">
              Oops, something went wrong retrieving the .md file from GitHub.
            </Alert>
          </section>
        </div>

        <div>
          <h3 className={styles.header}>BadgeCounter:</h3>
          <BadgeCounter>1</BadgeCounter>
        </div>

        <div>
          <h3 className={styles.header}>Blockquote:</h3>
          <span>No preview/component</span>
        </div>

        <div>
          <h3 className={styles.header}>Breadcumbs:</h3>
          <section className={styles.section}>
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
          </section>
        </div>

        <div>
          <h3 className={styles.header}>Breadcumbs:</h3>
          <section className={styles.section}>
            <button onClick={() => setButtonsDisabled(!buttonsDisabled)}>toggle disabled</button>:{" "}
            <span>{buttonsDisabled.toString()}</span>
            <ButtonGroup className={styles.buttonContainer}>
              <Button className={styles.button} onClick={() => console.log("Click")} disabled={buttonsDisabled}>
                Button
              </Button>
              <Button
                className={styles.button}
                appearance={"primary-action-button"}
                onClick={() => console.log("Click")}
                disabled={buttonsDisabled}
              >
                Primary
              </Button>
              <Button
                className={styles.button}
                appearance={"secondary-action-button"}
                onClick={() => console.log("Click")}
                disabled={buttonsDisabled}
              >
                Secondary
              </Button>
              <Button
                className={styles.button}
                appearance={"subtle-button"}
                onClick={() => console.log("Click")}
                disabled={buttonsDisabled}
              >
                Subtle
              </Button>
            </ButtonGroup>
          </section>
        </div>

        <div>
          <h3 className={styles.header}>Code and CodeBlock:</h3>
          <span>Code:</span>
          <div>
            this is a bit of <Code>code</Code> in a text about <Code>helm install </Code>
          </div>
          <CodeBlock>helm install [my-opencatalogi] open-catalogi/opencatalogi </CodeBlock>
        </div>

        <div>
          <h3 className={styles.header}>DataBadge / Badge:</h3>
          <DataBadge className={styles.tagWidth}>DataBadge</DataBadge>
        </div>

        <div>
          <h3 className={styles.header}>Document:</h3>
          <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
          <p>abcdefghijklmnopqrstuvwxyz</p>
          <p>0123456789</p>
          <p>The lazy dog jumped over the quick brown fox</p>
        </div>

        <div>
          <h3 className={styles.header}>FormInput:</h3>
          <span>No preview/component</span>
        </div>

        <div>
          <h3 className={styles.header}>Headers:</h3>
          <section className={styles.section}>
            <Heading1>Heading1</Heading1>
            <Heading2>Heading2</Heading2>
            <Heading3>Heading3</Heading3>
            <Heading4>Heading4</Heading4>
            <Heading5>Heading5</Heading5>
          </section>
        </div>

        <div>
          <h3 className={styles.header}>Icon:</h3>
          <FontAwesomeIcon className={styles.icon} icon={faChevronRight} />
        </div>

        <div>
          <h3 className={styles.header}>Link:</h3>
          <Link
            className={styles.backLink}
            href="/"
            onClick={(e: any) => {
              e.preventDefault(), console.log("click");
            }}
            tabIndex={0}
          >
            <FontAwesomeIcon icon={faArrowLeft} /> <span>{t("This is a link")}</span>
          </Link>
        </div>

        <div>
          <h3 className={styles.header}>Ordered and Unordered list:</h3>
          <section className={styles.section}>
            <OrderedList>
              <OrderedListItem>Ordered 1</OrderedListItem>
              <OrderedListItem>Ordered 2</OrderedListItem>
              <OrderedListItem>Ordered 3</OrderedListItem>
            </OrderedList>
            <UnorderedList>
              <UnorderedListItem>Unordered 1</UnorderedListItem>
              <UnorderedListItem>Unordered 2</UnorderedListItem>
              <UnorderedListItem>Unordered 3</UnorderedListItem>
            </UnorderedList>
          </section>
        </div>

        <div>
          <h3 className={styles.header}>Page-Footer:</h3>
          <span>Check the footer at the bottom of the page</span>
        </div>

        <div>
          <h3 className={styles.header}>Page-Header:</h3>
          <span>Check the header at the top of the page</span>
        </div>

        <div>
          <h3 className={styles.header}>Page:</h3>
          <span>Spacing between the sides and content</span>
        </div>

        <div>
          <h3 className={styles.header}>Paragraph:</h3>
          <p>
            This is a Lorem ipsum paragraph: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio pariatur
            adipisci nam odit? Pariatur facilis, eaque provident veritatis eos recusandae? Repellat cumque, modi dolor
            provident numquam porro officiis iste est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Fusce id purus. Nunc sed turpis. Phasellus volutpat, metus eget egestas mollis, lacus
            lacus blandit dui, id egestas quam mauris ut lacus. Vestibulum volutpat pretium libero. Nullam vel sem. Duis
            lobortis massa imperdiet quam. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Cum
            sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras id dui. Vestibulum
            purus quam, scelerisque ut, mollis sed, nonummy id, metus. Vestibulum eu odio. Vestibulum eu odio.
          </p>
        </div>

        <div>
          <h3 className={styles.header}>Seperator:</h3>
          <Separator />
        </div>

        <div>
          <h3 className={styles.header}>Surface:</h3>
          <span>Background of this page</span>
        </div>

        <div>
          <h3 className={styles.header}>Table with overflow:</h3>
          <HorizontalOverflowWrapper
            ariaLabels={{ scrollLeftButton: t("Left scroll button"), scrollRightButton: t("Right scroll button") }}
          >
            <Table className={styles.table}>
              <TableHeader className={styles.tableHeader}>
                <TableRow>
                  <TableHeaderCell>{t("TableHeader")}</TableHeaderCell>
                  <TableHeaderCell>{t("TableHeader")}</TableHeaderCell>
                  <TableHeaderCell>{t("TableHeader")}</TableHeaderCell>
                  <TableHeaderCell>{t("TableHeader")}</TableHeaderCell>
                  <TableHeaderCell>{t("TableHeader")}</TableHeaderCell>
                  <TableHeaderCell>{t("TableHeader")}</TableHeaderCell>
                  <TableHeaderCell>{t("TableHeader")}</TableHeaderCell>
                  <TableHeaderCell>{t("TableHeader")}</TableHeaderCell>
                  <TableHeaderCell>{t("TableHeader")}</TableHeaderCell>
                </TableRow>
              </TableHeader>
              <TableBody className={styles.tableBody}>
                <TableRow className={styles.tableRow}>
                  <TableCell>TableCell</TableCell>
                  <TableCell>TableCell</TableCell>
                  <TableCell>TableCell</TableCell>
                  <TableCell>TableCell</TableCell>
                  <TableCell>TableCell</TableCell>
                  <TableCell>TableCell</TableCell>
                  <TableCell>TableCell</TableCell>
                  <TableCell>TableCell</TableCell>
                  <TableCell>TableCell</TableCell>
                </TableRow>
                <TableRow className={styles.tableRow}>
                  <TableCell>TableCell</TableCell>
                  <TableCell>TableCell</TableCell>
                  <TableCell>TableCell</TableCell>
                  <TableCell>TableCell</TableCell>
                  <TableCell>TableCell</TableCell>
                  <TableCell>TableCell</TableCell>
                  <TableCell>TableCell</TableCell>
                  <TableCell>TableCell</TableCell>
                  <TableCell>TableCell</TableCell>
                </TableRow>
                <TableRow className={styles.tableRow}>
                  <TableCell>TableCell</TableCell>
                  <TableCell>TableCell</TableCell>
                  <TableCell>TableCell</TableCell>
                  <TableCell>TableCell</TableCell>
                  <TableCell>TableCell</TableCell>
                  <TableCell>TableCell</TableCell>
                  <TableCell>TableCell</TableCell>
                  <TableCell>TableCell</TableCell>
                  <TableCell>TableCell</TableCell>
                </TableRow>
                <TableRow className={styles.tableRow}>
                  <TableCell>TableCell</TableCell>
                  <TableCell>TableCell</TableCell>
                  <TableCell>TableCell</TableCell>
                  <TableCell>TableCell</TableCell>
                  <TableCell>TableCell</TableCell>
                  <TableCell>TableCell</TableCell>
                  <TableCell>TableCell</TableCell>
                  <TableCell>TableCell</TableCell>
                  <TableCell>TableCell</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </HorizontalOverflowWrapper>
        </div>

        <div>
          <h3 className={styles.header}>Textbox:</h3>
          <InputText
            name="_search"
            placeholder={`${t("Search")}..`}
            defaultValue={filters._search}
            ariaLabel={t("Enter search query")}
            {...{ register, errors }}
          />
        </div>

        <h2>OpenCatalogi Components:</h2>
        <div>
          <h3 className={styles.header}>PieChart:</h3>
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
        </div>

        <h2>Conduction Components:</h2>

        <div>
          <h3 className={styles.header}>CardWrapper and CardHeader:</h3>
          <CardWrapper className={styles.cardContainer}>
            <CardHeader className={styles.cardHeader}>
              <CardHeaderDate>{translateDate(i18n.language, cardDate)}</CardHeaderDate>
              <CardHeaderTitle className={styles.title}>
                <Heading2>Card Title</Heading2>
              </CardHeaderTitle>
            </CardHeader>

            <p className={styles.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ipsum, eos voluptatum, deleniti
              provident neque dolorum sit minima beatae consectetur reiciendis voluptates veniam voluptas libero atque
              temporibus id. Quo, quasi!
            </p>
          </CardWrapper>
        </div>

        <div>
          <h3 className={styles.header}>Logo:</h3>
          <section className={styles.section}>
            <span>Logo:</span>
            <Logo onClick={() => console.log("click")} />

            <span>Header:</span>
            <div className={styles.logoHeader}>
              <Logo variant="header" onClick={() => console.log("click")} />
            </div>

            <span>Footer:</span>
            <div className={styles.logoFooter}>
              <Logo variant="footer" onClick={() => console.log("click")} />
            </div>
          </section>
        </div>

        <div>
          <h3 className={styles.header}>TopNavigation:</h3>
          <section className={styles.section}>
            <div>PrimaryTopNav:</div>
            <Container layoutClassName={styles.primaryNavContainer}>
              <div className={clsx(styles.logoContainer, styles.logoDesktop)}>
                <Logo onClick={() => console.log("click")} />
              </div>
              <PrimaryTopNav
                mobileLogo={
                  <div className={clsx(styles.logoContainer, styles.logoMobile)}>
                    <Logo onClick={() => console.log("click")} />
                  </div>
                }
                layoutClassName={styles.textColor}
                items={headerTopNavItems}
              />
            </Container>

            <div>SecondaryTopNav:</div>
            <SecondaryTopNav items={secondaryTopNavItems} />
          </section>
        </div>

        <div>
          <h3 className={styles.header}>Pagination:</h3>
          <Pagination
            ariaLabels={{ previousPage: t("Previous page"), nextPage: t("Next page"), page: t("Page") }}
            totalPages={15}
            {...{ currentPage, setCurrentPage }}
          />
        </div>

        <div>
          <h3 className={styles.header}>Select:</h3>
          <section className={styles.section}>
            <div>
              <button onClick={() => setSelectMaxWith(!selectMaxWith)}>toggle maxwith</button>:{" "}
              <span>{selectMaxWith.toString()}</span>
            </div>

            <span>SingleSelect</span>
            <div className={clsx(selectMaxWith && styles.SelectMaxWith)}>
              <SelectSingle
                options={SELECT_SINGLE}
                name="select single"
                placeholder={t("Select Single")}
                isClearable
                {...{ register, errors, control }}
                ariaLabel={t("Select Single")}
              />
            </div>

            <div className={clsx(selectMaxWith && styles.SelectMaxWith)}>
              <span>MultiSelect</span>
              <SelectMultiple
                options={SELECT_MULTIPLE}
                name="select multiple"
                placeholder={t("Select Mulitple")}
                isClearable
                {...{ register, errors, control }}
                ariaLabel={t("Select Multiple")}
              />
            </div>

            <div className={clsx(selectMaxWith && styles.SelectMaxWith)}>
              <span>CreateMultiSelect</span>
              <SelectCreate
                options={SELECT_CREATE}
                name="select create"
                placeholder={t("Select Create")}
                isClearable
                {...{ register, errors, control }}
                ariaLabel={t("Select Create")}
              />
            </div>
          </section>
        </div>
        <div>
          <h3 className={styles.header}>TableWrapper:</h3>
          <span>No preview/component</span>
        </div>

        <div>
          <h3 className={styles.header}>Tabs:</h3>
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
        </div>

        <div>
          <h3 className={styles.header}>Tooltip:</h3>
          <span className={styles.tooltip} data-tooltip-id={TOOLTIP_ID} data-tooltip-content={"Tooltip"}>
            Hover Me!
          </span>
        </div>
      </PageContent>
    </Page>
  );
};
