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
          <Link className={styles.backLink} onClick={() => navigate("/")} tabIndex={0}>
            <FontAwesomeIcon icon={faArrowLeft} /> <span>{t("Back to homepage")}</span>
          </Link>
        </div>

        {getItems.isSuccess && (
          <>
            <Heading1 id="mainContent">
              {getItems.data.Titel !== "" ? getItems.data.Titel : t("No title available")}
            </Heading1>

            <HorizontalOverflowWrapper
              ariaLabels={{
                scrollLeftButton: t("Scroll table to the left"),
                scrollRightButton: t("Scroll table to the right"),
              }}
            >
              <Table className={styles.table}>
                <TableBody className={styles.tableBody}>
                  {getItems.data.ID && (
                    <TableRow className={styles.tableRow}>
                      <TableCell>{t("Feature")}</TableCell>
                      <TableCell>{isUUID(getItems.data.ID) ? getItems.data.Object_ID : getItems.data.ID}</TableCell>
                    </TableRow>
                  )}

                  {getItems.data.Titel && (
                    <TableRow className={styles.tableRow}>
                      <TableCell>{t("Category")}</TableCell>
                      <TableCell>{getItems.data.Categorie ?? "-"}</TableCell>
                    </TableRow>
                  )}

                  {getItems.data.Samenvatting && (
                    <TableRow className={styles.tableRow}>
                      <TableCell>{t("Summary")}</TableCell>
                      <TableCell>{getItems.data.Samenvatting}</TableCell>
                    </TableRow>
                  )}
                  {getItems.data.Beschrijving && (
                    <TableRow className={styles.tableRow}>
                      <TableCell>{t("Description")}</TableCell>
                      <TableCell>{getItems.data.Beschrijving}</TableCell>
                    </TableRow>
                  )}

                  {getItems.data.Termijnoverschrijding && (
                    <TableRow className={styles.tableRow}>
                      <TableCell>{t("Exceeding the term")}</TableCell>
                      <TableCell>{getItems.data.Termijnoverschrijding}</TableCell>
                    </TableRow>
                  )}

                  {getItems.data.Publicatiedatum && (
                    <TableRow className={styles.tableRow}>
                      <TableCell>{t("Publication date")}</TableCell>
                      <TableCell>
                        {getItems.data.Publicatiedatum
                          ? translateDate(i18n.language, getItems.data.Publicatiedatum)
                          : "-"}
                      </TableCell>
                    </TableRow>
                  )}

                  {getItems.data.Ontvangstdatum && (
                    <TableRow className={styles.tableRow}>
                      <TableCell>{t("Registration date")}</TableCell>

                      <TableCell>{translateDate(i18n.language, getItems.data.Ontvangstdatum) ?? "-"}</TableCell>
                    </TableRow>
                  )}

                  {getItems.data.Besluitdatum && (
                    <TableRow className={styles.tableRow}>
                      <TableCell>{t("Decision date")} </TableCell>
                      <TableCell>{translateDate(i18n.language, getItems.data.Besluitdatum) ?? "-"}</TableCell>
                    </TableRow>
                  )}

                  {getItems.data?.embedded?.Themas && (
                    <TableRow className={styles.tableRow}>
                      <TableCell>{t("Themes")}</TableCell>
                      <TableCell>
                        {getItems.data?.embedded?.Themas.map((thema: any, idx: number) => (
                          <span key={idx}>
                            {thema.Hoofdthema + (idx !== getItems.data?.embedded?.Themas.length - 1 ? ", " : "")}
                          </span>
                        ))}
                      </TableCell>
                    </TableRow>
                  )}

                  {getItems.data?.embedded?.informatieverzoek && (
                    <TableRow className={styles.tableRow}>
                      <TableCell>{t("Information request")}</TableCell>
                      <TableCell>
                        <Link href={getItems.data?.embedded?.informatieverzoek.URL_Bijlage} target="blank">
                          {getItems.data?.embedded?.informatieverzoek?.Titel_Bijlage}
                        </Link>
                      </TableCell>
                    </TableRow>
                  )}

                  {(getItems.data.Besluit || (getItems.data?.embedded?.besluit ?? getItems.data.URL_besluit)) && (
                    <TableRow className={styles.tableRow}>
                      <TableCell>{t("Decision")}</TableCell>
                      <TableCell>
                        {getItems.data.Besluit}
                        {getItems.data.Besluit &&
                          (getItems.data?.embedded?.besluit ?? getItems.data.URL_besluit) &&
                          ","}{" "}
                        {(getItems.data?.embedded?.besluit ?? getItems.data.URL_besluit) && (
                          <Link
                            href={getItems.data?.embedded?.besluit?.URL_Bijlage ?? getItems.data.URL_besluit}
                            target="blank"
                          >
                            {getItems.data?.embedded?.besluit?.Titel_Bijlage ?? getPDFName(getItems.data.URL_besluit)}
                          </Link>
                        )}
                      </TableCell>
                    </TableRow>
                  )}

                  {getItems.data?.embedded?.inventarisatielijst && (
                    <TableRow className={styles.tableRow}>
                      <TableCell>{t("Inventory list")}</TableCell>
                      <TableCell>
                        <Link href={getItems.data?.embedded?.inventarisatielijst?.URL_Bijlage} target="blank">
                          {getItems.data?.embedded?.inventarisatielijst?.Titel_Bijlage}
                        </Link>
                      </TableCell>
                    </TableRow>
                  )}

                  {getItems.data?.embedded?.Bijlagen && (
                    <TableRow className={styles.tableRow}>
                      <TableCell>{t("Attachments")}</TableCell>
                      <TableCell>
                        <UnorderedList>
                          {getItems.data?.embedded?.Bijlagen.map((bijlage: any, idx: number) => (
                            <UnorderedListItem key={idx}>
                              <Link
                                href={bijlage.URL_Bijlage?.length !== 0 ? bijlage.URL_Bijlage : "#"}
                                target={bijlage.URL_Bijlage?.length !== 0 ? "blank" : ""}
                              >
                                {bijlage.Titel_Bijlage}
                              </Link>
                            </UnorderedListItem>
                          ))}
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
