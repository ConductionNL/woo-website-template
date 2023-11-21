import * as React from "react";
import * as styles from "./WOOItemDetailTemplate.module.css";
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
import Skeleton from "react-loading-skeleton";
import { getPDFName } from "../../services/getPDFName";
import { isUUID } from "../../services/isUUID";
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

        {getItems.isSuccess && (
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
                      <TableCell>
                        {isUUID(getItems.data._self.id) ? getItems.data.id : getItems.data._self.id}
                      </TableCell>
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

                  {getItems.data.termijnoverschrijding && (
                    <TableRow className={styles.tableRow}>
                      <TableCell>{t("Exceeding the term")}</TableCell>
                      <TableCell>{getItems.data.termijnoverschrijding}</TableCell>
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

                  {getItems.data.ontvangstdatum && (
                    <TableRow className={styles.tableRow}>
                      <TableCell>{t("Registration date")}</TableCell>

                      <TableCell>{translateDate(i18n.language, getItems.data.ontvangstdatum) ?? "-"}</TableCell>
                    </TableRow>
                  )}

                  {getItems.data.embedded?.metadata?.besluitdatum && (
                    <TableRow className={styles.tableRow}>
                      <TableCell>{t("Decision date")} </TableCell>
                      <TableCell>
                        {translateDate(i18n.language, getItems.data.embedded?.metadata?.besluitdatum) ?? "-"}
                      </TableCell>
                    </TableRow>
                  )}

                  {getItems.data?.embedded?.themas && (
                    <TableRow className={styles.tableRow}>
                      <TableCell>{t("Themes")}</TableCell>
                      <TableCell>
                        {getItems.data?.embedded?.themas.map((thema: any, idx: number) => (
                          <span key={idx}>
                            {thema.hoofdthema + (idx !== getItems.data?.embedded?.themas?.length - 1 ? ", " : "")}
                          </span>
                        ))}
                      </TableCell>
                    </TableRow>
                  )}

                  {getItems.data?.embedded?.informatieverzoek && (
                    <TableRow className={styles.tableRow}>
                      <TableCell>{t("Information request")}</TableCell>
                      <TableCell>
                        <Link href={getItems.data?.embedded?.informatieverzoek?.url} target="blank">
                          {getItems.data?.embedded?.informatieverzoek?.titel}
                        </Link>
                      </TableCell>
                    </TableRow>
                  )}

                  {(getItems.data?.besluit ||
                    (getItems.data?.embedded?.besluit ?? getItems.data?.embedded?.besluit?.url)) && (
                    <TableRow className={styles.tableRow}>
                      <TableCell>{t("Decision")}</TableCell>
                      <TableCell>
                        {(getItems.data?.embedded?.besluit ?? getItems.data?.embedded?.besluit?.url) && (
                          <Link
                            href={getItems.data?.embedded?.besluit?.url ?? getItems.data?.embedded?.besluit?.url}
                            target="blank"
                          >
                            {getItems.data?.embedded?.besluit?.titel ??
                              getPDFName(getItems.data?.embedded?.besluit?.url)}
                          </Link>
                        )}
                      </TableCell>
                    </TableRow>
                  )}

                  {getItems.data?.embedded?.inventarisatielijst && (
                    <TableRow className={styles.tableRow}>
                      <TableCell>{t("Inventory list")}</TableCell>
                      <TableCell>
                        <Link href={getItems.data?.embedded?.inventarisatielijst?.url} target="blank">
                          {getItems.data?.embedded?.inventarisatielijst?.titel}
                        </Link>
                      </TableCell>
                    </TableRow>
                  )}

                  {getItems.data?.embedded?.bijlagen && (
                    <TableRow className={styles.tableRow}>
                      <TableCell>{t("Attachments")}</TableCell>
                      <TableCell>
                        <UnorderedList>
                          {getItems.data?.embedded?.bijlagen.map(
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
