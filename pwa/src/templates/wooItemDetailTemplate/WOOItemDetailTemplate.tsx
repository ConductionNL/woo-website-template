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
          <Link className={styles.backLink} onClick={() => navigate("/")}>
            <FontAwesomeIcon icon={faArrowLeft} /> Terug naar home
          </Link>
        </div>

        {getItems.isSuccess && (
          <>
            <Heading1>{getItems.data.Titel}</Heading1>

            <Table className={styles.table}>
              <TableBody className={styles.tableBody}>
                {getItems.data.ID && (
                  <TableRow className={styles.tableRow}>
                    <TableCell>{t("Kenmerk")}</TableCell>
                    <TableCell>{getItems.data.ID}</TableCell>
                  </TableRow>
                )}

                {getItems.data.Titel && (
                  <TableRow className={styles.tableRow}>
                    <TableCell>{t("Onderwerp")}</TableCell>
                    <TableCell>{getItems.data.Titel}</TableCell>
                  </TableRow>
                )}

                {getItems.data.Samenvatting && (
                  <TableRow className={styles.tableRow}>
                    <TableCell>{t("Samenvatting")}</TableCell>
                    <TableCell>{getItems.data.Samenvatting}</TableCell>
                  </TableRow>
                )}

                {getItems.data.Termijnoverschrijding && (
                  <TableRow className={styles.tableRow}>
                    <TableCell>{t("Termijnoverschrijding")}</TableCell>
                    <TableCell>{getItems.data.Termijnoverschrijding}</TableCell>
                  </TableRow>
                )}

                {getItems.data.Ontvangstdatum && (
                  <TableRow className={styles.tableRow}>
                    <TableCell>{t("Ontvangstdatum")}</TableCell>

                    <TableCell>{translateDate(i18n.language, getItems.data.Ontvangstdatum) ?? "-"}</TableCell>
                  </TableRow>
                )}

                {getItems.data.Besluitdatum && (
                  <TableRow className={styles.tableRow}>
                    <TableCell>{t("Besluitdatum")} </TableCell>
                    <TableCell>{translateDate(i18n.language, getItems.data.Besluitdatum) ?? "-"}</TableCell>
                  </TableRow>
                )}

                {getItems.data.Besluit && (
                  <TableRow className={styles.tableRow}>
                    <TableCell>{t("Besluit")}</TableCell>
                    <TableCell>{getItems.data.Besluit}</TableCell>
                  </TableRow>
                )}

                {getItems.data?.embedded?.Themas && (
                  <TableRow className={styles.tableRow}>
                    <TableCell>{t("Thema's")}</TableCell>
                    <TableCell>
                      {getItems.data?.embedded?.Themas.map((thema: any, idx: number) => (
                        <span key={idx}>
                          {thema.Hoofdthema + (idx !== getItems.data?.embedded?.Themas.length - 1 ? ", " : "")}
                        </span>
                      ))}
                    </TableCell>
                  </TableRow>
                )}

                {getItems.data.URL_informatieverzoek && (
                  <TableRow className={styles.tableRow}>
                    <TableCell>{t("Bijlage informatieverzoek")}</TableCell>
                    <TableCell>
                      <Link href={getItems.data.URL_informatieverzoek} target="blank">
                        {getPDFName(getItems.data.URL_informatieverzoek)}
                      </Link>
                    </TableCell>
                  </TableRow>
                )}

                {getItems.data.URL_inventarisatielijst && (
                  <TableRow className={styles.tableRow}>
                    <TableCell>{t("Bijlage inventarisatielijst")}</TableCell>
                    <TableCell>
                      <Link href={getItems.data.URL_inventarisatielijst} target="blank">
                        {getPDFName(getItems.data.URL_inventarisatielijst)}
                      </Link>
                    </TableCell>
                  </TableRow>
                )}

                {getItems.data.URL_besluit && (
                  <TableRow className={styles.tableRow}>
                    <TableCell>{t("Bijlage besluit")}</TableCell>
                    <TableCell>
                      <Link href={getItems.data.URL_besluit} target="blank">
                        {getPDFName(getItems.data.URL_besluit)}
                      </Link>
                    </TableCell>
                  </TableRow>
                )}

                {getItems.data?.embedded?.Bijlagen && (
                  <TableRow className={styles.tableRow}>
                    <TableCell>{t("Bijlagen")}</TableCell>
                    <TableCell>
                      <UnorderedList>
                        {getItems.data?.embedded?.Bijlagen.map((bijlage: any, idx: number) => (
                          <UnorderedListItem>
                            <Link href={bijlage.URL_Bijlage} target="blank">
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
          </>
        )}
        {getItems.isLoading && <Skeleton height={"200px"} />}
      </PageContent>
    </Page>
  );
};
