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

  const sortAlphaNum = (a: any, b: any) => a.titel.localeCompare(b.titel, i18n.language, { numeric: true });

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
              aria-label={`${t("Title of woo request")}, ${getItems.data.titel !== "" ? getItems.data.titel : t("No title available")}`}
            >
              {getItems.data.titel !== ""
                ? removeHTMLFromString(removeHTMLFromString(getItems.data.titel))
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
                      aria-label={`${t("Feature")}, ${getItems.data.id}`}
                    >
                      <TableCell>{t("Feature")}</TableCell>
                      <TableCell>{getItems.data.id}</TableCell>
                    </TableRow>
                  )}

                  {getItems.data.titel && (
                    <TableRow
                      className={styles.tableRow}
                      tabIndex={0}
                      aria-label={`${t("Category")}, ${getItems.data.categorie ?? "-"}`}
                    >
                      <TableCell>{t("Category")}</TableCell>
                      <TableCell>{getItems.data.categorie ?? "-"}</TableCell>
                    </TableRow>
                  )}

                  {getItems.data.samenvatting && (
                    <TableRow
                      className={styles.tableRow}
                      tabIndex={0}
                      aria-label={`${t("Summary")}, ${getItems.data.samenvatting}`}
                    >
                      <TableCell>{t("Summary")}</TableCell>
                      <TableCell>{removeHTMLFromString(removeHTMLFromString(getItems.data.samenvatting))}</TableCell>
                    </TableRow>
                  )}
                  {getItems.data.beschrijving && (
                    <TableRow
                      className={styles.tableRow}
                      tabIndex={0}
                      aria-label={`${t("Description")}, ${getItems.data.beschrijving}`}
                    >
                      <TableCell>{t("Description")}</TableCell>
                      <TableCell>{removeHTMLFromString(removeHTMLFromString(getItems.data.beschrijving))}</TableCell>
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

                  {getItems.data.publicatiedatum && (
                    <TableRow
                      className={styles.tableRow}
                      tabIndex={0}
                      aria-label={`${t("Publication date")}, ${
                        getItems.data.publicatiedatum
                          ? translateDate(i18n.language, getItems.data.publicatiedatum)
                          : "-"
                      }`}
                    >
                      <TableCell>{t("Publication date")}</TableCell>
                      <TableCell>
                        {getItems.data.publicatiedatum
                          ? translateDate(i18n.language, getItems.data.publicatiedatum)
                          : "-"}
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

                  {!_.isEmpty(getItems.data.themas) && (
                    <TableRow className={styles.tableRow} tabIndex={0} aria-labelledby={"themesName themesData"}>
                      <TableCell id="themesName">{t("Themes")}</TableCell>
                      <TableCell id="themesData">
                        {getItems.data.themas.map((thema: any, idx: number) => (
                          <span key={idx}>
                            {thema.hoofdthema + (idx !== getItems.data.themas?.length - 1 ? ", " : "")}
                          </span>
                        ))}
                      </TableCell>
                    </TableRow>
                  )}

                  {getItems.data.metadata?.verzoek?.informatieverzoek &&
                    getItems.data.metadata?.verzoek?.informatieverzoek?.url && (
                      <TableRow
                        className={styles.tableRow}
                        tabIndex={0}
                        aria-label={`${t("Information request")}, ${
                          getItems.data.metadata?.verzoek?.informatieverzoek?.titel ??
                          getPDFName(getItems.data.metadata?.verzoek?.informatieverzoek?.url)
                        }`}
                      >
                        <TableCell>{t("Information request")}</TableCell>
                        <TableCell>
                          <Link href={getItems.data.metadata?.verzoek?.informatieverzoek?.url} target="blank">
                            {getItems.data.metadata?.verzoek?.informatieverzoek?.titel ??
                              getPDFName(getItems.data.metadata?.verzoek?.informatieverzoek?.url)}
                          </Link>
                        </TableCell>
                      </TableRow>
                    )}

                  {getItems.data.metadata?.verzoek?.convenant && getItems.data.metadata?.verzoek?.convenant?.url && (
                    <TableRow
                      className={styles.tableRow}
                      tabIndex={0}
                      aria-label={`${t("Convenant")}, ${
                        getItems.data.metadata?.verzoek?.convenant?.titel ??
                        getPDFName(getItems.data.metadata?.verzoek?.convenant?.url)
                      }`}
                    >
                      <TableCell>{t("Convenant")}</TableCell>
                      <TableCell>
                        <Link href={getItems.data.metadata?.verzoek?.convenant?.url} target="blank">
                          {getItems.data.metadata?.verzoek?.convenant?.titel ??
                            getPDFName(getItems.data.metadata?.verzoek?.convenant?.url)}
                        </Link>
                      </TableCell>
                    </TableRow>
                  )}

                  {getItems.data.metadata?.verzoek?.besluit && getItems.data.metadata?.verzoek?.besluit?.url && (
                    <TableRow
                      className={styles.tableRow}
                      tabIndex={0}
                      aria-label={`${t("Decision")}, ${
                        getItems.data.metadata?.verzoek?.besluit?.titel ??
                        getPDFName(getItems.data.metadata?.verzoek?.besluit?.url)
                      }`}
                    >
                      <TableCell>{t("Decision")}</TableCell>
                      <TableCell>
                        {(getItems.data.metadata?.verzoek?.besluit ??
                          getItems.data.metadata?.verzoek?.besluit?.url) && (
                          <Link
                            href={
                              getItems.data.metadata?.verzoek?.besluit?.url ??
                              getItems.data.metadata?.verzoek?.besluit?.url
                            }
                            target="blank"
                          >
                            {getItems.data.metadata?.verzoek?.besluit?.titel ??
                              getPDFName(getItems.data.metadata?.verzoek?.besluit?.url)}
                          </Link>
                        )}
                      </TableCell>
                    </TableRow>
                  )}

                  {getItems.data.metadata?.verzoek?.inventarisatielijst &&
                    getItems.data.metadata?.verzoek?.inventarisatielijst?.url && (
                      <TableRow
                        className={styles.tableRow}
                        tabIndex={0}
                        aria-label={`${t("Inventory list")}, ${
                          getItems.data.metadata?.verzoek?.inventarisatielijst?.titel ??
                          getPDFName(getItems.data.metadata?.verzoek?.inventarisatielijst?.url)
                        }`}
                      >
                        <TableCell>{t("Inventory list")}</TableCell>
                        <TableCell>
                          <Link href={getItems.data.metadata?.verzoek?.inventarisatielijst?.url} target="blank">
                            {getItems.data.metadata?.verzoek?.inventarisatielijst?.titel ??
                              getPDFName(getItems.data.metadata?.verzoek?.inventarisatielijst?.url)}
                          </Link>
                        </TableCell>
                      </TableRow>
                    )}
                  {getItems.data.metadata?.verzoek?.organisatieonderdeel && (
                    <TableRow
                      className={styles.tableRow}
                      tabIndex={0}
                      aria-label={`${t("Organizational unit")}, ${getItems.data.metadata?.verzoek?.organisatieonderdeel}`}
                    >
                      <TableCell>{t("Organizational unit")}</TableCell>
                      <TableCell>{getItems.data.metadata?.verzoek?.organisatieonderdeel}</TableCell>
                    </TableRow>
                  )}
                  {getItems.data.metadata?.verzoek?.functiebenaming && (
                    <TableRow
                      className={styles.tableRow}
                      tabIndex={0}
                      aria-label={`${t("Job title")}, ${getItems.data.metadata?.verzoek?.functiebenaming}`}
                    >
                      <TableCell>{t("Job title")}</TableCell>
                      <TableCell>{getItems.data.metadata?.verzoek?.functiebenaming}</TableCell>
                    </TableRow>
                  )}
                  {getItems.data.metadata?.verzoek?.gedraging && (
                    <TableRow
                      className={styles.tableRow}
                      tabIndex={0}
                      aria-label={`${t("Behavior")}, ${getItems.data.metadata?.verzoek?.gedraging}`}
                    >
                      <TableCell>{t("Behavior")}</TableCell>
                      <TableCell>{getItems.data.metadata?.verzoek?.gedraging}</TableCell>
                    </TableRow>
                  )}
                  {getItems.data.metadata?.verzoek?.bevindingen && (
                    <TableRow
                      className={styles.tableRow}
                      tabIndex={0}
                      aria-label={`${t("Findings")}, ${getItems.data.metadata?.verzoek?.bevindingen}`}
                    >
                      <TableCell>{t("Findings")}</TableCell>
                      <TableCell>{getItems.data.metadata?.verzoek?.bevindingen}</TableCell>
                    </TableRow>
                  )}
                  {getItems.data.metadata?.verzoek?.oordeel && (
                    <TableRow
                      className={styles.tableRow}
                      tabIndex={0}
                      aria-label={`${t("Judgement")}, ${getItems.data.metadata?.verzoek?.oordeel}`}
                    >
                      <TableCell>{t("Judgement")}</TableCell>
                      <TableCell>{getItems.data.metadata?.verzoek?.oordeel}</TableCell>
                    </TableRow>
                  )}
                  {getItems.data.metadata?.verzoek?.conclusies && (
                    <TableRow
                      className={styles.tableRow}
                      tabIndex={0}
                      aria-label={`${t("Conclusions")}, ${getItems.data.metadata?.verzoek?.conclusies}`}
                    >
                      <TableCell>{t("Conclusions")}</TableCell>
                      <TableCell>{getItems.data.metadata?.verzoek?.conclusies}</TableCell>
                    </TableRow>
                  )}
                  {getItems.data.metadata?.verzoek?.opdrachtgever && (
                    <TableRow
                      className={styles.tableRow}
                      tabIndex={0}
                      aria-label={`${t("Client")}, ${getItems.data.metadata?.verzoek?.opdrachtgever}`}
                    >
                      <TableCell>{t("Client")}</TableCell>
                      <TableCell>{getItems.data.metadata?.verzoek?.opdrachtgever}</TableCell>
                    </TableRow>
                  )}
                  {getItems.data.metadata?.verzoek?.onderdeelTaak && (
                    <TableRow
                      className={styles.tableRow}
                      tabIndex={0}
                      aria-label={`${t("Part task")}, ${getItems.data.metadata?.verzoek?.onderdeelTaak}`}
                    >
                      <TableCell>{t("Part task")}</TableCell>
                      <TableCell>{getItems.data.metadata?.verzoek?.onderdeelTaak}</TableCell>
                    </TableRow>
                  )}

                  {!_.isEmpty(getItems.data.bijlagen) && (
                    <TableRow
                      className={styles.tableRow}
                      tabIndex={0}
                      aria-labelledby="attachmentsName attachmentsData"
                    >
                      <TableCell id="attachmentsName">{t("Attachments")}</TableCell>
                      <TableCell>
                        <UnorderedList id="attachmentsData">
                          {getItems.data.bijlagen.sort(sortAlphaNum).map(
                            (bijlage: any, idx: number) =>
                              bijlage.titel &&
                              bijlage.url && (
                                <UnorderedListItem key={idx}>
                                  <Link
                                    href={bijlage.url?.length !== 0 ? bijlage.url : "#"}
                                    target={bijlage.url?.length !== 0 ? "blank" : ""}
                                  >
                                    {bijlage.titel}.
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
