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

interface WOOItemDetailTemplateProps {
  wooItemId: string;
}

export const WOOItemDetailTemplate: React.FC<WOOItemDetailTemplateProps> = ({ wooItemId }) => {
  const { t, i18n } = useTranslation();

  const queryClient = new QueryClient();
  const getItems = useOpenWoo(queryClient).getOne(wooItemId);

  const sortAlphaNum = (a: any, b: any) => a.title.localeCompare(b.title, i18n.language, { numeric: true });

  const sortAttachments = (withLabels: boolean) => {
    const attachments = getItems.data.attachments.filter((attachment: any) =>
      withLabels ? attachment?.labels?.length > 0 : !attachment?.labels || attachment?.labels?.length === 0,
    );

    return attachments;
  };

  const getLabeledAttachment = (label: string) => {
    return sortAttachments(true).find((attachment: any) => attachment.labels.includes(label));
  };

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

                  {getItems.data.metadata?.verzoek?.ontvangstdatum && (
                    <TableRow
                      className={styles.tableRow}
                      tabIndex={0}
                      aria-label={`${t("Registration date")}, ${translateDate(i18n.language, getItems.data.metadata?.verzoek?.ontvangstdatum) ?? "-"}`}
                    >
                      <TableCell>{t("Registration date")}</TableCell>

                      <TableCell>
                        {translateDate(i18n.language, getItems.data.metadata?.verzoek?.ontvangstdatum) ?? "-"}
                      </TableCell>
                    </TableRow>
                  )}

                  {getItems.data.metadata?.besluitdatum && (
                    <TableRow
                      className={styles.tableRow}
                      tabIndex={0}
                      aria-label={`${t("Decision date")}, ${translateDate(i18n.language, getItems.data.metadata?.besluitdatum) ?? "-"}`}
                    >
                      <TableCell>{t("Decision date")} </TableCell>
                      <TableCell>{translateDate(i18n.language, getItems.data.metadata?.besluitdatum) ?? "-"}</TableCell>
                    </TableRow>
                  )}

                  {!_.isEmpty(getItems.data.themes) && (
                    <TableRow className={styles.tableRow} tabIndex={0} aria-labelledby={"themesName themesData"}>
                      <TableCell id="themesName">{t("Themes")}</TableCell>
                      <TableCell id="themesData">
                        {getItems.data.themes.map((theme: any, idx: number) => (
                          <span key={idx}>{theme.title + (idx !== getItems.data.themes?.length - 1 ? ", " : "")}</span>
                        ))}
                      </TableCell>
                    </TableRow>
                  )}

                  {getLabeledAttachment("Informatieverzoek") && (
                    <TableRow
                      className={styles.tableRow}
                      tabIndex={0}
                      aria-label={`${t("Information request")}, ${
                        getLabeledAttachment("Informatieverzoek").title ??
                        getPDFName(getLabeledAttachment("Informatieverzoek").accessUrl)
                      }.${getExtension(getLabeledAttachment("Informatieverzoek"))}`}
                    >
                      <TableCell>{t("Information request")}</TableCell>
                      <TableCell>
                        <Link href={getLabeledAttachment("Informatieverzoek").accessUrl} target="blank">
                          {`${
                            getLabeledAttachment("Informatieverzoek").title ??
                            getPDFName(getLabeledAttachment("Informatieverzoek").accessUrl)
                          }.${getExtension(getLabeledAttachment("Informatieverzoek"))}`}
                        </Link>
                      </TableCell>
                    </TableRow>
                  )}

                  {getLabeledAttachment("Convenant") && (
                    <TableRow
                      className={styles.tableRow}
                      tabIndex={0}
                      aria-label={`${t("Convenant")}, ${
                        getLabeledAttachment("Convenant").title ??
                        getPDFName(getLabeledAttachment("Convenant").accessUrl)
                      }.${getExtension(getLabeledAttachment("Convenant"))}`}
                    >
                      <TableCell>{t("Convenant")}</TableCell>
                      <TableCell>
                        <Link href={getLabeledAttachment("Convenant").accessUrl} target="blank">
                          {`${
                            getLabeledAttachment("Convenant").title ??
                            getPDFName(getLabeledAttachment("Convenant").accessUrl)
                          }.${getExtension(getLabeledAttachment("Convenant"))}`}
                        </Link>
                      </TableCell>
                    </TableRow>
                  )}

                  {getLabeledAttachment("Besluit") && (
                    <TableRow
                      className={styles.tableRow}
                      tabIndex={0}
                      aria-label={`${t("Decision")}, ${
                        getLabeledAttachment("Besluit").title ?? getPDFName(getLabeledAttachment("Besluit").accessUrl)
                      }.${getExtension(getLabeledAttachment("Besluit"))}`}
                    >
                      <TableCell>{t("Decision")}</TableCell>
                      <TableCell>
                        <Link href={getLabeledAttachment("Besluit").accessUrl} target="blank">
                          {`${
                            getLabeledAttachment("Besluit").title ??
                            getPDFName(getLabeledAttachment("Besluit").accessUrl)
                          }.${getExtension(getLabeledAttachment("Besluit"))}`}
                        </Link>
                      </TableCell>
                    </TableRow>
                  )}

                  {getLabeledAttachment("Inventarisatielijst") && (
                    <TableRow
                      className={styles.tableRow}
                      tabIndex={0}
                      aria-label={`${t("Inventory list")}, ${
                        getLabeledAttachment("Inventarisatielijst").title ??
                        getPDFName(getLabeledAttachment("Inventarisatielijst").accessUrl)
                      }.${getExtension(getLabeledAttachment("Inventarisatielijst"))}`}
                    >
                      <TableCell>{t("Inventory list")}</TableCell>
                      <TableCell>
                        <Link href={getLabeledAttachment("Inventarisatielijst").accessUrl} target="blank">
                          {`${
                            getLabeledAttachment("Inventarisatielijst").title ??
                            getPDFName(getLabeledAttachment("Inventarisatielijst").accessUrl)
                          }.${getExtension(getLabeledAttachment("Inventarisatielijst"))}`}
                        </Link>
                      </TableCell>
                    </TableRow>
                  )}

                  {!_.isEmpty(sortAttachments(false)) && (
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
                                bijlage.title &&
                                bijlage.accessUrl && (
                                  <UnorderedListItem key={idx}>
                                    <Link
                                      href={bijlage.accessUrl?.length !== 0 ? bijlage.accessUrl : "#"}
                                      target={bijlage.accessUrl?.length !== 0 ? "blank" : ""}
                                    >
                                      {bijlage.title}.{getExtension(bijlage)}
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
