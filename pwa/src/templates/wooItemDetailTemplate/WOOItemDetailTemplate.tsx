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

interface WOOItemDetailTemplateProps {
  wooItemId: string;
}

export const WOOItemDetailTemplate: React.FC<WOOItemDetailTemplateProps> = ({ wooItemId }) => {
  const { t, i18n } = useTranslation();

  const queryClient = new QueryClient();
  const getItems = useOpenWoo(queryClient).getOne(wooItemId);

  return (
    <Page>
      <PageContent className={styles.container}>
        <div>
          <Link
            className={styles.backLink}
            href="/"
            onClick={(e: any) => {
              e.preventDefault(), navigate("/");
            }}
            tabIndex={0}
          >
            <FontAwesomeIcon icon={faArrowLeft} /> <span>{t("Back to homepage")}</span>
          </Link>
        </div>

        {getItems.isSuccess && getItems.data && (
          <>
            <Heading1 id="mainContent">
              {getItems.data.titel !== "" ? getItems.data.titel : t("No title available")}
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
                    <TableRow className={styles.tableRow}>
                      <TableCell>{t("Feature")}</TableCell>
                      <TableCell>{getItems.data.id}</TableCell>
                    </TableRow>
                  )}

                  {getItems.data.titel && (
                    <TableRow className={styles.tableRow}>
                      <TableCell>{t("Category")}</TableCell>
                      <TableCell>{getItems.data.categorie ?? "-"}</TableCell>
                    </TableRow>
                  )}

                  {getItems.data.samenvatting && (
                    <TableRow className={styles.tableRow}>
                      <TableCell>{t("Summary")}</TableCell>
                      <TableCell>{getItems.data.samenvatting}</TableCell>
                    </TableRow>
                  )}
                  {getItems.data.beschrijving && (
                    <TableRow className={styles.tableRow}>
                      <TableCell>{t("Description")}</TableCell>
                      <TableCell>{getItems.data.beschrijving}</TableCell>
                    </TableRow>
                  )}

                  {getItems.data.metadata?.verzoek?.termijnoverschrijding && (
                    <TableRow className={styles.tableRow}>
                      <TableCell>{t("Exceeding the term")}</TableCell>
                      <TableCell>{getItems.data.metadata?.verzoek?.termijnoverschrijding}</TableCell>
                    </TableRow>
                  )}

                  {getItems.data.publicatiedatum && (
                    <TableRow className={styles.tableRow}>
                      <TableCell>{t("Publication date")}</TableCell>
                      <TableCell>
                        {getItems.data.publicatiedatum
                          ? translateDate(i18n.language, getItems.data.publicatiedatum)
                          : "-"}
                      </TableCell>
                    </TableRow>
                  )}

                  {getItems.data.metadata?.verzoek?.ontvangstdatum && (
                    <TableRow className={styles.tableRow}>
                      <TableCell>{t("Registration date")}</TableCell>

                      <TableCell>
                        {translateDate(i18n.language, getItems.data.metadata?.verzoek?.ontvangstdatum) ?? "-"}
                      </TableCell>
                    </TableRow>
                  )}

                  {getItems.data.metadata?.besluitdatum && (
                    <TableRow className={styles.tableRow}>
                      <TableCell>{t("Decision date")} </TableCell>
                      <TableCell>{translateDate(i18n.language, getItems.data.metadata?.besluitdatum) ?? "-"}</TableCell>
                    </TableRow>
                  )}

                  {!_.isEmpty(getItems.data.themas) && (
                    <TableRow className={styles.tableRow}>
                      <TableCell>{t("Themes")}</TableCell>
                      <TableCell>
                        {getItems.data.themas.map((thema: any, idx: number) => (
                          <span key={idx}>
                            {thema.hoofdthema + (idx !== getItems.data.themas?.length - 1 ? ", " : "")}
                          </span>
                        ))}
                      </TableCell>
                    </TableRow>
                  )}

                  {getItems.data.metadata?.verzoek?.informatieverzoek && (
                    <TableRow className={styles.tableRow}>
                      <TableCell>{t("Information request")}</TableCell>
                      <TableCell>
                        <Link href={getItems.data.metadata?.verzoek?.informatieverzoek?.url} target="blank">
                          {getItems.data.metadata?.verzoek?.informatieverzoek?.titel ??
                            getPDFName(getItems.data.metadata?.verzoek?.informatieverzoek?.url)}
                        </Link>
                      </TableCell>
                    </TableRow>
                  )}

                  {(getItems.data.metadata?.verzoek?.besluit ||
                    (getItems.data.metadata?.verzoek?.besluit ?? getItems.data.metadata?.verzoek?.besluit?.url)) && (
                    <TableRow className={styles.tableRow}>
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

                  {getItems.data.metadata?.verzoek?.inventarisatielijst && (
                    <TableRow className={styles.tableRow}>
                      <TableCell>{t("Inventory list")}</TableCell>
                      <TableCell>
                        <Link href={getItems.data.metadata?.verzoek?.inventarisatielijst?.url} target="blank">
                          {getItems.data.metadata?.verzoek?.inventarisatielijst?.titel ??
                            getPDFName(getItems.data.metadata?.verzoek?.inventarisatielijst?.url)}
                        </Link>
                      </TableCell>
                    </TableRow>
                  )}

                  {!_.isEmpty(getItems.data.bijlagen) && (
                    <TableRow className={styles.tableRow}>
                      <TableCell>{t("Attachments")}</TableCell>
                      <TableCell>
                        <UnorderedList>
                          {getItems.data.bijlagen.map(
                            (bijlage: any, idx: number) =>
                              bijlage.titel && (
                                <UnorderedListItem key={idx}>
                                  <Link
                                    href={bijlage.url?.length !== 0 ? bijlage.url : "#"}
                                    target={bijlage.url?.length !== 0 ? "blank" : ""}
                                  >
                                    {bijlage.titel}
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
          </>
        )}
        {getItems.isLoading && <Skeleton height={"200px"} />}
      </PageContent>
    </Page>
  );
};
