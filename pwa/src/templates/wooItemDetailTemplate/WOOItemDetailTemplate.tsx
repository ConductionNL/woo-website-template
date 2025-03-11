import * as React from "react";
import * as styles from "./WOOItemDetailTemplate.module.css";
import _ from "lodash";
import Skeleton from "react-loading-skeleton";
import {
  Page,
  PageContent,
  Heading1,
  Table,
  TableBody,
  TableRow,
  TableCell,
  UnorderedList,
  UnorderedListItem,
  Link,
} from "@utrecht/component-library-react/dist/css-module";
import { translateDate } from "../../services/dateFormat";
import { useTranslation } from "react-i18next";
import { navigate } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { QueryClient } from "react-query";
import { useOpenWoo } from "../../hooks/openWoo";
import { getPDFName } from "../../services/getPDFName";
import { HorizontalOverflowWrapper } from "@conduction/components";
import { removeHTMLFromString } from "../../services/removeHTMLFromString";
import { log } from "console";

interface WOOItemDetailTemplateProps {
  wooItemId: string;
}

export const WOOItemDetailTemplate: React.FC<WOOItemDetailTemplateProps> = ({ wooItemId }) => {
  const { t, i18n } = useTranslation();

  const queryClient = new QueryClient();
  const getItems = useOpenWoo(queryClient).getOne(wooItemId);

  const getAttachments = useOpenWoo(queryClient).getAttachments(wooItemId);

  const sortAlphaNum = (a: any, b: any) => a.title.localeCompare(b.title, i18n.language, { numeric: true });

  const sortAttachments = (withLabels: boolean) => {
    const filterdAttachments = getAttachments.data.results.filter((attachment: any) =>
      withLabels ? attachment?.labels?.length > 0 : !attachment?.labels || attachment?.labels?.length === 0,
    );

    let multipleLabels: any[] = [];
    let singleLabels: any[] = [];

    let allLabels: any[] = [];

    filterdAttachments.map((attachment: any) => {
      if (attachment.labels.length > 1) {
        multipleLabels.push(attachment);
        allLabels.push(...attachment.labels);
      } else {
        singleLabels.push(attachment);
        allLabels.push(attachment.labels[0]);
      }
    });

    const newAttachments: any[] = [];
    multipleLabels.map((attachment: any) => {
      attachment.labels.map((label: any, idx: number) => {
        newAttachments.push({
          ...attachment,
          labels: [attachment.labels[idx]],
        });
      });
    });

    const attachmentsAll = [...newAttachments, ...singleLabels];

    const uniqueLabels = [...new Set(allLabels)];

    const sortedAttachments = uniqueLabels.map((label: any) => {
      const attachmentsWithLabel = attachmentsAll.filter((attachment: any) => attachment.labels.includes(label));

      return {
        attachments: [...attachmentsWithLabel],
        label,
      };
    });

    return withLabels ? sortedAttachments : attachmentsAll;
  };

  const getLabel = (label: string) => {
    switch (_.upperFirst(label)) {
      case "Informatieverzoek":
        return t("Information request");
      case "Convenant":
        return t("Convenant");
      case "Besluit":
        return t("Decision");
      case "Inventarisatielijst":
        return t("Inventory list");
      default:
        return t(_.upperFirst(label));
    }
  };

  const getName = (name: string) => {
    
    const formattedName = name.replace(/_/g, ' ')
    console.log(formattedName);
    
    switch (_.upperFirst(formattedName)) {
      case "Bevindingen":
        return t("Findings");
      case "Conclusies":
        return t("Conclusions");
      case "Functiebenaming":
        return t("Job title");
      case "Gedraging":
        return t("Behavior");
      case "Onderdeel taak":
        return t("Part of task");
      case "Oordeel":
        return t("Judgement");
      case "Opdrachtgever":
        return t("Client");
      case "Organisatieonderdeel":
        return t("Organizational unit");
      default:
        return t(_.upperFirst(formattedName));
    }
  };

  function isDate(str: string) {
    var regex = /^(\d{4})-(\d{2})-(\d{2})(?:T.*)?$/;
    var match = str.match(regex);
    if (!match) {
      return false;
    }
    var year = parseInt(match[1], 10);
    var month = parseInt(match[2], 10);
    var day = parseInt(match[3], 10);
    if (month < 1 || month > 12) {
      return false;
    }
    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      daysInMonth[1] = 29;
    }
    if (day < 1 || day > daysInMonth[month - 1]) {
      return false;
    }
    return true;
  }
  
  const getExtension = (attachment: any) => {
    if (attachment.extension) {
      return attachment.extension;
    } else {
      return attachment.type.split("/").pop();
    }
  };

  return (
    <Page>
      <PageContent className={styles.container}>
        <div role="navigation">
          <Link
            className={styles.backLink}
            href="/"
            onClick={(e: any) => {
              e.preventDefault(), navigate("/");
            }}
            tabIndex={0}
            aria-label={t("Back to homepage")}
          >
            <FontAwesomeIcon icon={faArrowLeft} /> <span>{t("Back to homepage")}</span>
          </Link>
        </div>

        {getItems.isSuccess && getItems.data && (
          <div className={styles.content} role="region" aria-label={t("Details")}>
            <Heading1
              id="mainContent"
              tabIndex={0}
              aria-label={`${t("Title of woo request")}, ${getItems.data.title !== "" ? getItems.data.title : t("No title available")}`}
            >
              {getItems.data.title !== ""
                ? removeHTMLFromString(removeHTMLFromString(getItems.data.title))
                : t("No title available")}
            </Heading1>

            <HorizontalOverflowWrapper
              ariaLabels={{
                scrollLeftButton: t("Scroll table to the left"),
                scrollRightButton: t("Scroll table to the right"),
              }}
            >
              <Table className={styles.table}>
                <TableBody className={styles.tableBody}>
                  {getItems.data.id && (
                    <TableRow
                      className={styles.tableRow}
                      tabIndex={0}
                      aria-label={`${t("Feature")}, ${getItems.data.reference ?? getItems.data.id}`}
                    >
                      <TableCell>{t("Feature")}</TableCell>
                      <TableCell>{getItems.data.reference ?? getItems.data.id}</TableCell>
                    </TableRow>
                  )}

                  {getItems.data.category && (
                    <TableRow
                      className={styles.tableRow}
                      tabIndex={0}
                      aria-label={`${t("Category")}, ${getItems.data.category ?? "-"}`}
                    >
                      <TableCell>{t("Category")}</TableCell>
                      <TableCell>{getItems.data.category ?? "-"}</TableCell>
                    </TableRow>
                  )}

                  {getItems.data.summary && (
                    <TableRow
                      className={styles.tableRow}
                      tabIndex={0}
                      aria-label={`${t("Summary")}, ${getItems.data.summary}`}
                    >
                      <TableCell>{t("Summary")}</TableCell>
                      <TableCell>{removeHTMLFromString(removeHTMLFromString(getItems.data.summary))}</TableCell>
                    </TableRow>
                  )}
                  {getItems.data.description && (
                    <TableRow
                      className={styles.tableRow}
                      tabIndex={0}
                      aria-label={`${t("Description")}, ${getItems.data.description}`}
                    >
                      <TableCell>{t("Description")}</TableCell>
                      <TableCell>{removeHTMLFromString(removeHTMLFromString(getItems.data.description))}</TableCell>
                    </TableRow>
                  )}

                  {getItems.data.metadata?.verzoek?.termijnoverschrijding && (
                    <TableRow
                      className={styles.tableRow}
                      tabIndex={0}
                      aria-label={`${t("Exceeding the term")}, ${getItems.data.metadata?.verzoek?.termijnoverschrijding}`}
                    >
                      <TableCell>{t("Exceeding the term")}</TableCell>
                      <TableCell>{getItems.data.metadata?.verzoek?.termijnoverschrijding}</TableCell>
                    </TableRow>
                  )}

                  {getItems.data.published && (
                    <TableRow
                      className={styles.tableRow}
                      tabIndex={0}
                      aria-label={`${t("Publication date")}, ${
                        getItems.data.published ? translateDate(i18n.language, getItems.data.published) : "-"
                      }`}
                    >
                      <TableCell>{t("Publication date")}</TableCell>
                      <TableCell>
                        {getItems.data.published ? translateDate(i18n.language, getItems.data.published) : "-"}
                      </TableCell>
                    </TableRow>
                  )}
 
                {
                  getItems.data.data &&
                  Object.entries(getItems.data.data).map(([key, value]: [string, any]) => {
                    console.log("key", key);
                    console.log("value", value);
                    
                    if (!!value) {
                      let formattedValue: string;
                      if (typeof value === "string") {
                        const isValidDate = isDate(value);
                        formattedValue = isValidDate
                          ? translateDate(i18n.language, new Date(value)) ?? "-"
                          : value;
                      } else if (value instanceof Date) {
                        formattedValue = translateDate(i18n.language, value) ?? "-";
                      } else {
                        formattedValue = String(value);
                      }
  
                      return (
                        !!value && (
                          <TableRow
                          key={key}
                          className={styles.tableRow}
                          tabIndex={0}
                          aria-label={`${getName(key)}, ${formattedValue}`}
                        >
                          <TableCell>{getName(key)}</TableCell>
                          <TableCell>{formattedValue}</TableCell>
                        </TableRow>
                        )
                      );
                    }
                  })
                }

                  {!_.isEmpty(getItems.data.themes) && (
                    <TableRow className={styles.tableRow} tabIndex={0} aria-labelledby={"themesName themesData"}>
                      <TableCell id="themesName">{t("Themes")}</TableCell>
                      <TableCell id="themesData">
                        {getItems.data.themes.map((theme: any, idx: number) => (
                          <span key={idx}>
                            {theme.title ? theme.title + (idx !== getItems.data.themes?.length - 1 ? ", " : "") : theme}
                          </span>
                        ))}
                      </TableCell>
                    </TableRow>
                  )}

                  {getAttachments.isSuccess &&
                    sortAttachments(true).length > 0 &&
                    sortAttachments(true).map((sortedAttachments: any, idx: number) => (
                      <TableRow
                        className={styles.tableRow}
                        key={idx}
                        tabIndex={0}
                        aria-label={
                          sortedAttachments.attachments.length === 1
                            ? `${getLabel(sortedAttachments.label)}, ${
                                sortedAttachments.attachments[0].title ??
                                getPDFName(sortedAttachments.attachments[0].accessUrl)
                              }`
                            : `${getLabel(sortedAttachments.label)}, ${t("There are")} ${
                                sortedAttachments.attachments.length
                              } ${t("Attachments")} ${t("With the label")} ${getLabel(
                                sortedAttachments.label,
                              )}, ${t("These are")} ${sortedAttachments.attachments
                                .map((attachment: any) => attachment.title ?? getPDFName(attachment.accessUrl))
                                .join(", ")}`
                        }
                      >
                        <TableCell>{getLabel(sortedAttachments.label)}</TableCell>

                        {sortedAttachments.attachments.length > 1 && (
                          <TableCell>
                            <UnorderedList id="labelAttachmentsData">
                              {sortedAttachments.attachments.map((attachment: any, idx: number) => (
                                <UnorderedListItem key={idx}>
                                  <Link href={attachment.accessUrl} target="blank">
                                    {`${attachment.title ?? getPDFName(attachment.accessUrl)}`}
                                  </Link>
                                </UnorderedListItem>
                              ))}
                            </UnorderedList>
                          </TableCell>
                        )}
                        {sortedAttachments.attachments.length === 1 && (
                          <TableCell>
                            <Link href={sortedAttachments.attachments[0].accessUrl} target="blank">
                              {`${sortedAttachments.attachments[0].title ?? getPDFName(sortedAttachments.attachments[0].accessUrl)}`}
                            </Link>
                          </TableCell>
                        )}
                      </TableRow>
                    ))}

                  {getAttachments.isSuccess && !_.isEmpty(sortAttachments(false)) && (
                    <TableRow
                      className={styles.tableRow}
                      tabIndex={0}
                      aria-labelledby="attachmentsName attachmentsData"
                    >
                      <TableCell id="attachmentsName">{t("Attachments")}</TableCell>
                      <TableCell>
                        <UnorderedList id="attachmentsData">
                          {sortAttachments(false)
                            .sort(sortAlphaNum)
                            .map(
                              (bijlage: any, idx: number) =>
                                bijlage.title && (
                                  <UnorderedListItem key={idx}>
                                    <Link
                                      href={bijlage.accessUrl?.length !== 0 ? bijlage.accessUrl : "#"}
                                      target={bijlage.accessUrl?.length !== 0 ? "blank" : ""}
                                    >
                                      {bijlage.title}
                                    </Link>
                                  </UnorderedListItem>
                                ),
                            )}
                        </UnorderedList>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </HorizontalOverflowWrapper>
          </div>
        )}
        {getItems.isLoading && <Skeleton height={"200px"} />}
      </PageContent>
    </Page>
  );
};
