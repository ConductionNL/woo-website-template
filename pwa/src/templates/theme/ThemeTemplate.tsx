import * as React from "react";
import * as styles from "./ThemeTemplate.module.css";
import clsx from "clsx";
import {
  Sidenav,
  SidenavList,
  SidenavItem,
  SidenavLink,
  SidenavLinkLabel,
  ProcessSteps,
} from "@gemeente-denhaag/components-react";
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
  InputCheckbox,
  DownloadCard,
} from "@conduction/components";
import {
  BreadcrumbNav,
  BreadcrumbNavLink,
  BreadcrumbNavSeparator,
  Icon,
  Alert,
  BadgeCounter,
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
  Paragraph,
  Page,
  PageContent,
  RadioButton,
  SpotlightSection,
  Checkbox,
  FormLabel,
  FormField,
  DataList,
  DataListItem,
  DataListKey,
  DataListValue,
  Textbox,
  FormFieldDescription,
  Fieldset,
  StatusBadge,
  Select,
  SelectOption,
  AccordionProvider,
} from "@utrecht/component-library-react/dist/css-module";
import { Pagination as AmsPagination, DateInput } from "@amsterdam/design-system-react";
import { useTranslation } from "react-i18next";
import { navigate } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faChevronRight,
  faCircleCheck,
  faCircleInfo,
  faCircleUser,
  faCube,
  faDashboard,
  faWarning,
} from "@fortawesome/free-solid-svg-icons";
import { getTokenValue } from "../../services/getTokenValue";
import { PieChart } from "react-minimal-pie-chart";
import { TOOLTIP_ID } from "../../layout/Layout";
import { useForm } from "react-hook-form";
import { translateDate } from "../../services/dateFormat";
import { useHeaderTopNavItems } from "../../hooks/useHeaderTopNavItems";
import { useGatsbyContext } from "../../context/gatsby";
import { SelectCreate } from "@conduction/components/lib/components/formFields";
import { SELECT_CREATE, SELECT_MULTIPLE, SELECT_SINGLE } from "../../data/SelectData";
import { Calendar } from "@utrecht/component-library-react/dist/Calendar";
import { addWeeks, addYears } from "date-fns";
import { AcCard, AcFlex, AcLink } from "../../components/tilburg/components";

export const ThemeTemplate: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [buttonsDisabled, setButtonsDisabled] = React.useState<boolean>(false);
  const [selectMaxWith, setSelectMaxWith] = React.useState<boolean>(true);
  const [utrechtSelectMaxWith, setUtrechtSelectMaxWith] = React.useState<boolean>(true);
  const [accordionMaxWith, setAccordionMaxWith] = React.useState<boolean>(true);
  const [refreshPieChartColor, setRefreshPieChartColor] = React.useState<boolean>(true);
  const [radioButtonChecked, setRadioButtonChecked] = React.useState<string>("checked");
  const [tabIndex, setTabIndex] = React.useState(0);
  const [sidenavCurrent, setSidenavCurrent] = React.useState<string>("dashboard");

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

  const radioButtons = [
    { label: "Default", value: "default" },
    { label: "Checked", value: "checked" },
  ];

  const today = new Date();
  const todayIso: any = today.toISOString();

  return (
    <Page>
      <PageContent className={styles.container}>
        <h2>Utrecht Components:</h2>
        <div>
          <h3 className={styles.header}>Accordion:</h3>
          <div>
            <button onClick={() => setAccordionMaxWith(!accordionMaxWith)}>toggle maxwith</button>:{" "}
            <span>{accordionMaxWith.toString()}</span>
          </div>

          <div className={clsx(accordionMaxWith && styles.accordionMaxWith)}>
            <AccordionProvider sections={[{ label: "Accordion Item Header", body: "Accordion Item Content" }]} />
          </div>
        </div>
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
          <h3 className={styles.header}>Badge / DataBadge:</h3>
          <DataBadge className={styles.tagWidth}>DataBadge</DataBadge>
        </div>

        <div>
          <h3 className={styles.header}>Status Badge:</h3>
          <section className={styles.sectionColumn}>
            <span className={styles.statusBadgeLabel}>Default:</span>
            <StatusBadge className={styles.tagWidth}>StatusBadge</StatusBadge>

            <span className={styles.statusBadgeLabel}>Success:</span>
            <StatusBadge className={styles.tagWidth} status="success">
              StatusBadge
            </StatusBadge>

            <span className={styles.statusBadgeLabel}>Warning:</span>
            <StatusBadge className={styles.tagWidth} status="warning">
              StatusBadge
            </StatusBadge>

            <span className={styles.statusBadgeLabel}>Error:</span>
            <StatusBadge className={styles.tagWidth} status="error">
              StatusBadge
            </StatusBadge>

            <span className={styles.statusBadgeLabel}>Safe:</span>
            <StatusBadge className={styles.tagWidth} status="safe">
              StatusBadge
            </StatusBadge>
            <span className={styles.statusBadgeLabel}>Danger:</span>
            <StatusBadge className={styles.tagWidth} status="danger">
              StatusBadge
            </StatusBadge>
            <span className={styles.statusBadgeLabel}>Active:</span>
            <StatusBadge className={styles.tagWidth} status="active">
              StatusBadge
            </StatusBadge>
            <span className={styles.statusBadgeLabel}>Valid:</span>
            <StatusBadge className={styles.tagWidth} status="valid">
              StatusBadge
            </StatusBadge>
            <span className={styles.statusBadgeLabel}>Invalid:</span>
            <StatusBadge className={styles.tagWidth} status="invalid">
              StatusBadge
            </StatusBadge>
          </section>
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
          <h3 className={styles.header}>Buttons:</h3>
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
          <h3>Calendar</h3>
          <section>
            <FormField>
              <Calendar onCalendarClick={(date: string) => console.log(date)} maxDate={addWeeks(new Date(), 2)} />
            </FormField>
          </section>
        </div>

        <div>
          <h3 className={styles.header}>Checkbox</h3>
          <ButtonGroup className={styles.buttonContainer}>
            <input type="checkbox"></input>
            <FormField type="checkbox">
              <Checkbox id="default" />
              <FormLabel htmlFor="default" type="checkbox">
                Default
              </FormLabel>
            </FormField>
            <FormField type="checkbox">
              <Checkbox checked id="checked" />
              <FormLabel htmlFor="checked" type="checkbox">
                Checked
              </FormLabel>
            </FormField>
            <FormField type="checkbox">
              <Checkbox disabled id="disabled" />
              <FormLabel htmlFor="disabled" type="checkbox">
                Disabled
              </FormLabel>
            </FormField>
            <FormField type="checkbox">
              <Checkbox checked disabled id="disabled" />
              <FormLabel htmlFor="disabled" type="checkbox">
                Checked Disabled
              </FormLabel>
            </FormField>
          </ButtonGroup>
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
          <h3 className={styles.header}>DataList:</h3>
          <DataList>
            <DataListItem>
              <DataListKey>Data list Item 1</DataListKey>
              <DataListValue value="data of dataList Item 1">data of dataList Item 1</DataListValue>
            </DataListItem>
            <DataListItem>
              <DataListKey>Data list Item 2</DataListKey>
              <DataListValue value="data of dataList Item 2">data of dataList Item 2</DataListValue>
            </DataListItem>
          </DataList>
        </div>

        <div>
          <h3 className={styles.header}>Document:</h3>
          <p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
          <p>abcdefghijklmnopqrstuvwxyz</p>
          <p>0123456789</p>
          <p>The lazy dog jumped over the quick brown fox</p>
        </div>

        <div>
          <h3 className={styles.header}>Focus:</h3>
          <span>
            Press <Code>tab</Code> to see the Focus of the elements
          </span>
        </div>

        <div>
          <h3 className={styles.header}>FormField / FormLabel / FormSet:</h3>
          <section className={styles.section}>
            <Fieldset invalid={false}>
              <FormField>
                <p className="utrecht-form-field__label">
                  <FormLabel htmlFor={"valid"}>Form field normal</FormLabel>
                </p>
                <Textbox id="valid" type="text" invalid={false} />
              </FormField>
            </Fieldset>
            <Fieldset invalid={true}>
              <FormField>
                <p className="utrecht-form-field__label">
                  <FormLabel htmlFor={"inValid"}>Form field invalid</FormLabel>
                </p>

                <FormFieldDescription invalid>Form field is required</FormFieldDescription>

                <Textbox id={"inValid"} type="text" invalid={true} />
              </FormField>
            </Fieldset>
          </section>
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
          <Paragraph>
            This is a Lorem ipsum paragraph: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio pariatur
            adipisci nam odit? Pariatur facilis, eaque provident veritatis eos recusandae? Repellat cumque, modi dolor
            provident numquam porro officiis iste est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia Curae; Fusce id purus. Nunc sed turpis. Phasellus volutpat, metus eget egestas mollis, lacus
            lacus blandit dui, id egestas quam mauris ut lacus. Vestibulum volutpat pretium libero. Nullam vel sem. Duis
            lobortis massa imperdiet quam. Nulla neque dolor, sagittis eget, iaculis quis, molestie non, velit. Cum
            sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras id dui. Vestibulum
            purus quam, scelerisque ut, mollis sed, nonummy id, metus. Vestibulum eu odio. Vestibulum eu odio.
          </Paragraph>
        </div>

        <div>
          <h3 className={styles.header}>Radio button:</h3>
          {radioButtons.map((radioButton) => (
            <div
              className={styles.radioContainer}
              onChange={() => setRadioButtonChecked(radioButton.value)}
              key={radioButton.value}
            >
              <RadioButton
                className={styles.radioButton}
                value={radioButton.value}
                checked={radioButtonChecked === radioButton.value}
              />
              <span className={styles.radioLabel} onClick={() => setRadioButtonChecked(radioButton.value)}>
                {radioButton.label}
              </span>
            </div>
          ))}
        </div>

        <div>
          <h3 className={styles.header}>Select:</h3>
          <section className={styles.section}>
            <div>
              <button onClick={() => setUtrechtSelectMaxWith(!utrechtSelectMaxWith)}>toggle maxwith</button>:{" "}
              <span>{utrechtSelectMaxWith.toString()}</span>
            </div>
            <span>Normal</span>
            <div className={clsx(utrechtSelectMaxWith && styles.SelectMaxWith)}>
              <Select>
                <SelectOption value="1">Option 1</SelectOption>
                <SelectOption value="2">Option 2</SelectOption>
                <SelectOption value="3">Option 3</SelectOption>
              </Select>
            </div>

            <span>Disabled</span>
            <div className={clsx(utrechtSelectMaxWith && styles.SelectMaxWith)}>
              <Select disabled>
                <SelectOption value="1">Option 1</SelectOption>
                <SelectOption value="2">Option 2</SelectOption>
                <SelectOption value="3">Option 3</SelectOption>
              </Select>
            </div>

            <span>Invalid</span>
            <div className={clsx(utrechtSelectMaxWith && styles.SelectMaxWith)}>
              <Select invalid>
                <SelectOption value="1">Option 1</SelectOption>
                <SelectOption value="2">Option 2</SelectOption>
                <SelectOption value="3">Option 3</SelectOption>
              </Select>
            </div>
          </section>
        </div>

        <div>
          <h3 className={styles.header}>Seperator:</h3>
          <Separator />
        </div>

        <div>
          <h3 className={styles.header}>Skip-link:</h3>
          <span>
            Press <Code>tab</Code> to see the Skip-Link
          </span>
        </div>

        <div>
          <h3 className={styles.header}>SpotlightSections:</h3>
          <section className={styles.section}>
            <span>Normal:</span>
            <SpotlightSection>
              <Heading2>SpotlightSection</Heading2>
              <Paragraph>
                <Link href="https://www.uabc.nl/?osc=uabc" external>
                  This is a link in a SpotlightSection
                </Link>
              </Paragraph>
              <Paragraph>
                Paragraph: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis hic neque commodi.
                Dignissimos soluta corrupti illo at eveniet autem blanditiis sit debitis quam quae officiis quisquam
                alias, nulla doloremque ipsa.
              </Paragraph>
            </SpotlightSection>

            <span>Info:</span>
            <SpotlightSection aside type="info">
              <Heading2>SpotlightSection Info</Heading2>
              <Paragraph>
                <Link href="https://www.uabc.nl/?osc=uabc" external>
                  This is a link in a SpotlightSection
                </Link>
              </Paragraph>
              <Paragraph>
                Paragraph: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis hic neque commodi.
                Dignissimos soluta corrupti illo at eveniet autem blanditiis sit debitis quam quae officiis quisquam
                alias, nulla doloremque ipsa.
              </Paragraph>
            </SpotlightSection>

            <span>Warning:</span>
            <SpotlightSection aside type="warning">
              <Heading2>SpotlightSection Warning</Heading2>
              <Paragraph>
                <Link href="https://www.uabc.nl/?osc=uabc" external>
                  This is a link in a SpotlightSection
                </Link>
              </Paragraph>
              <Paragraph>
                Paragraph: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis hic neque commodi.
                Dignissimos soluta corrupti illo at eveniet autem blanditiis sit debitis quam quae officiis quisquam
                alias, nulla doloremque ipsa.
              </Paragraph>
            </SpotlightSection>
          </section>
        </div>

        <div>
          <h3 className={styles.header}>Surface:</h3>
          <span>Background of this page</span>
        </div>

        <div>
          <h3 className={styles.header}>Table:</h3>
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
              </TableRow>
            </TableBody>
          </Table>
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

        <h2>Den Haag Components:</h2>
        <div>
          <h3 className={styles.header}>Process Steps:</h3>
          <ProcessSteps
            steps={[
              {
                id: "cc18f54d-aadd-498f-b518-2fc74ce8e9b6",
                marker: 1,
                status: "checked",
                title: "Checked process step",
                meta: (
                  <div>
                    <Paragraph>This is a checked process step</Paragraph>
                  </div>
                ),
              },
              {
                id: "12ca94b2-7179-4ae8-9032-dad49c294ff2",
                marker: 2,
                status: "checked",
                title: "Checked process step with multiple steps",
                steps: [
                  {
                    id: "dc18f54d-aadd-498f-b518-2fc74ce8e9b6",
                    status: "checked",
                    title: "checked process step 2-1",
                  },
                  {
                    id: "dc18f54d-aadd-498f-b518-2fc74ce8e9b6",
                    status: "checked",
                    title: "checked process step 2-2",
                  },
                ],
              },
              {
                id: "e51f2b4c-d62f-4347-8dc1-c83a9be0afc2",
                status: "current",
                marker: 3,
                title: "Current process step with steps",
                steps: [
                  {
                    id: "dc18f54d-aadd-498f-b518-2fc74ce8e9b6",
                    status: "current",
                    title: "current process step 3-1",
                  },
                  {
                    id: "dc18f54d-aadd-498f-b518-2fc74ce8e9b6",
                    status: "warning",
                    title: "warning process step 3-2",
                  },
                  {
                    id: "dc18f54d-aadd-498f-b518-2fc74ce8e9b6",
                    status: "error",
                    title: "error process step 3-3",
                  },
                ],
              },
              {
                id: "1fc162c6-f1ab-4d1b-9007-d891cbd5614b",
                title: "process step normal",
                marker: 4,
                date: translateDate(i18n.language, todayIso),
                meta: (
                  <Paragraph>
                    This is a normal process step with a link{" "}
                    <Link
                      href="/"
                      onClick={(e: any) => {
                        e.preventDefault(), console.log("click");
                      }}
                      tabIndex={0}
                    >
                      A Link!
                    </Link>
                    .
                  </Paragraph>
                ),
              },
              {
                id: "1fc162c6-f1ab-4d1b-9007-d891cbd5614b23r3",
                title: "process step warning",
                status: "warning",
                marker: 5,
                meta: <Paragraph>This process step has a warning.</Paragraph>,
              },
              {
                id: "1fc162c6-f1ab-4d1b-9007-d891cbd5614bfaefa",
                title: "error",
                status: "error",
                marker: 6,
                date: "zondag 26 mei 2024",
                meta: <Paragraph>This process step has an error.</Paragraph>,
              },
              {
                id: "1fc162c6-f1ab-4d1b-9007-d891cbd5614bfaefa",
                title: "disabled",
                // @ts-ignore
                status: "disabled",
                marker: 7,
                date: "zondag 26 mei 2024",
                meta: <Paragraph>This process step is disabled.</Paragraph>,
              },
            ]}
          />
        </div>
        <div>
          <h3 className={styles.header}>SideNav:</h3>
          <Sidenav>
            <SidenavList>
              <SidenavItem>
                <SidenavLink onClick={() => setSidenavCurrent("dashboard")} current={sidenavCurrent === "dashboard"}>
                  <FontAwesomeIcon icon={faDashboard} />
                  Dashboard
                </SidenavLink>
              </SidenavItem>

              <SidenavItem>
                <SidenavLink
                  onClick={() => setSidenavCurrent("voorzieningen")}
                  current={sidenavCurrent === "voorzieningen"}
                >
                  <FontAwesomeIcon icon={faCube} />
                  Voorzieningen
                </SidenavLink>
              </SidenavItem>
            </SidenavList>
          </Sidenav>
        </div>

        <h2>OpenCatalogi Components:</h2>
        <div>
          <h3 className={styles.header}>PieChart:</h3>
          <button onClick={() => setRefreshPieChartColor(!refreshPieChartColor)}>Refresh color</button>
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
              label={({ dataEntry }: any) => dataEntry.title}
              labelStyle={{
                fontSize: getTokenValue(styles.ratingFontSize),
                fontFamily: getTokenValue(styles.ratingFontFamily),
                fill: getTokenValue(styles.ratingBarActiveColor),
              }}
              labelPosition={0}
            />
          </div>
        </div>

        <h2>Tilburg Components:</h2>
        <div>
          <h3 className={styles.header}>Footer:</h3>
          <span>Check the footer at the bottom of the page</span>
        </div>

        <div>
          <h3 className={styles.header}>Header:</h3>
          <span>Check the header at the top of the page</span>
        </div>

        <div id="currentwork">
          <h3 className={styles.header}>Search Card:</h3>
          <AcCard searchResult padding="md" skeleton={false}>
            <Heading3>Heading3</Heading3>
            <Paragraph>Paragraph</Paragraph>
            <AcFlex justifyContent="between" className="meta">
              <AcFlex alignItems="center" spacing="sm">
                <Paragraph small>Paragraph</Paragraph>
                <Paragraph small>Paragraph</Paragraph>
                <Paragraph small>Paragraph</Paragraph>
              </AcFlex>
              <AcLink href={`/theme`}>
                <span className="sr-only">Paragraph</span>
                <FontAwesomeIcon icon={faChevronRight} />
              </AcLink>
            </AcFlex>
          </AcCard>
        </div>

        <div>
          <h3 className={styles.header}>Link:</h3>
          <AcLink href={`/theme`}>
            <span className="sr-only">Link</span>
            <FontAwesomeIcon icon={faChevronRight} />
          </AcLink>
        </div>

        <h2>Amsterdam Components:</h2>
        <div>
          <h3 className={styles.header}>DateInput:</h3>
          <DateInput />
        </div>

        <div>
          <h3 className={styles.header}>Pagination:</h3>
          <AmsPagination
            totalPages={15}
            page={1}
            nextLabel=""
            previousLabel=""
            onPageChange={(page) => console.log(page)}
          />
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
          <h3 className={styles.header}>Checkbox</h3>
          <ButtonGroup className={styles.buttonContainer}>
            <input type="checkbox"></input>
            <InputCheckbox name="default" label="default" {...{ register, errors, control }} />
            <InputCheckbox name="Checked" label="Checked" defaultChecked {...{ register, errors, control }} />

            <InputCheckbox name="Disabled" label="Disabled" disabled {...{ register, errors, control }} />

            <InputCheckbox
              name="CheckedDisabled"
              label="Checked Disabled"
              defaultChecked
              disabled
              {...{ register, errors, control }}
            />
          </ButtonGroup>
        </div>

        <div>
          <h3 className={styles.header}>Download Card</h3>
          <DownloadCard
            label={"Download.png"}
            labelTooltip={{
              id: TOOLTIP_ID,
              tooltip: "https://google.com/download.png",
            }}
            type={"PNG"}
            size="428kB"
            handleClick={() => {
              console.log("click");
            }}
          />
          <DownloadCard
            label={"main.zip"}
            labelTooltip={{
              id: TOOLTIP_ID,
              tooltip: "https://github.com/CommonGateway/ZGWBundle/archive/refs/heads/main.zip",
            }}
            type={"ZIP"}
            size="111kB"
            handleClick={() => {
              console.log("click");
            }}
          />
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

            <span>NavBar:</span>
            <Container layoutClassName={styles.primaryNavContainer}>
              <div className={clsx(styles.logoContainer, styles.logoDesktopNavigation)}>
                <Logo variant="navbar" onClick={() => console.log("click")} />
              </div>
              <PrimaryTopNav
                mobileLogo={
                  <div className={clsx(styles.logoContainer, styles.logoMobile)}>
                    <Logo variant="navbar" onClick={() => console.log("click")} />
                  </div>
                }
                items={headerTopNavItems}
              />
            </Container>
          </section>
        </div>

        <div>
          <h3 className={styles.header}>TopNavigation:</h3>
          <section className={styles.section}>
            <div>PrimaryTopNav:</div>
            <Container layoutClassName={styles.primaryNavContainer}>
              <div className={clsx(styles.logoContainer, styles.logoDesktop)}>
                <Logo variant="navbar" onClick={() => console.log("click")} />
              </div>
              <PrimaryTopNav
                mobileLogo={
                  <div className={clsx(styles.logoContainer, styles.logoMobile)}>
                    <Logo variant="navbar" onClick={() => console.log("click")} />
                  </div>
                }
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
            ariaLabels={{
              pagination: t("Pagination"),
              previousPage: t("Previous page"),
              nextPage: t("Next page"),
              page: t("Page"),
            }}
            totalPages={15}
            {...{ currentPage, setCurrentPage }}
          />
          {/* <AmsPagination
            totalPages={15}
            page={1}
            nextLabel=""
            previousLabel=""
            onPageChange={(page) => console.log(page)}
          /> */}
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
                  <TableCell>TableCell</TableCell>
                  <TableCell>TableCell</TableCell>
                  <TableCell>TableCell</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </HorizontalOverflowWrapper>
        </div>

        <div>
          <h3 className={styles.header}>Tabs:</h3>
          <Tabs selectedIndex={tabIndex} onSelect={(index: number) => setTabIndex(index)}>
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
