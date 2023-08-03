import * as React from "react";
import * as styles from "./RequestDetailTemplate.module.css";
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
import { useWooRequests } from "../../hooks/wooRequests";
import Skeleton from "react-loading-skeleton";
import { getPDFName } from "../../services/getPDFName";

interface RequestDetailTemplateProps {
  requestId: string;
}

export const RequestDetailTemplate: React.FC<RequestDetailTemplateProps> = ({ requestId }) => {
  const { t, i18n } = useTranslation();

  const queryClient = new QueryClient();
  const getRequest = useWooRequests(queryClient).getOne(requestId);

  return (
    <Page>
      <PageContent className={styles.container}>
        <div>
          <Link className={styles.backLink} onClick={() => navigate("/")}>
            <FontAwesomeIcon icon={faArrowLeft} /> Terug naar home
          </Link>
        </div>

        {getRequest.isSuccess && (
          <>
            <Heading1>{getRequest.data.Titel}</Heading1>

            <Table>
              <TableBody>
                {getRequest.data.ID && (
                  <TableRow>
                    <TableCell>{t("Kenmerk")}</TableCell>
                    <TableCell>{getRequest.data.ID}</TableCell>
                  </TableRow>
                )}

                {getRequest.data.Titel && (
                  <TableRow>
                    <TableCell>{t("Onderwerp")}</TableCell>
                    <TableCell>{getRequest.data.Titel}</TableCell>
                  </TableRow>
                )}

                {getRequest.data.Samenvatting && (
                  <TableRow>
                    <TableCell>{t("Samenvatting")}</TableCell>
                    <TableCell>{getRequest.data.Samenvatting}</TableCell>
                  </TableRow>
                )}

                {getRequest.data.Termijnoverschrijding && (
                  <TableRow>
                    <TableCell>{t("Termijnoverschrijding")}</TableCell>
                    <TableCell>{getRequest.data.Termijnoverschrijding}</TableCell>
                  </TableRow>
                )}

                {getRequest.data.Ontvangstdatum && (
                  <TableRow>
                    <TableCell>{t("Ontvangstdatum")}</TableCell>

                    <TableCell>{translateDate(i18n.language, getRequest.data.Ontvangstdatum) ?? "-"}</TableCell>
                  </TableRow>
                )}

                {getRequest.data.Besluitdatum && (
                  <TableRow>
                    <TableCell>{t("Besluitdatum")} </TableCell>
                    <TableCell>{translateDate(i18n.language, getRequest.data.Besluitdatum) ?? "-"}</TableCell>
                  </TableRow>
                )}

                {getRequest.data.Besluit && (
                  <TableRow>
                    <TableCell>{t("Besluit")}</TableCell>
                    <TableCell>{getRequest.data.Besluit}</TableCell>
                  </TableRow>
                )}

                {getRequest.data?.embedded?.Themas && (
                  <TableRow>
                    <TableCell>{t("Thema's")}</TableCell>
                    <TableCell>
                      {getRequest.data?.embedded?.Themas.map((thema: any, idx: number) => (
                        <span key={idx}>
                          {thema.Hoofdthema + (idx !== getRequest.data?.embedded?.Themas.length - 1 ? ", " : "")}
                        </span>
                      ))}
                    </TableCell>
                  </TableRow>
                )}

                {getRequest.data.URL_informatieverzoek && (
                  <TableRow>
                    <TableCell>{t("Bijlage informatieverzoek")}</TableCell>
                    <TableCell>
                      <Link href={getRequest.data.URL_informatieverzoek} target="blank">
                        {getPDFName(getRequest.data.URL_informatieverzoek)}
                      </Link>
                    </TableCell>
                  </TableRow>
                )}

                {getRequest.data.URL_inventarisatielijst && (
                  <TableRow>
                    <TableCell>{t("Bijlage inventarisatielijst")}</TableCell>
                    <TableCell>
                      <Link href={getRequest.data.URL_inventarisatielijst} target="blank">
                        {getPDFName(getRequest.data.URL_inventarisatielijst)}
                      </Link>
                    </TableCell>
                  </TableRow>
                )}

                {getRequest.data.URL_besluit && (
                  <TableRow>
                    <TableCell>{t("Bijlage besluit")}</TableCell>
                    <TableCell>
                      <Link href={getRequest.data.URL_besluit} target="blank">
                        {getPDFName(getRequest.data.URL_besluit)}
                      </Link>
                    </TableCell>
                  </TableRow>
                )}

                {getRequest.data?.embedded?.Bijlagen && (
                  <TableRow>
                    <TableCell>{t("Bijlagen")}</TableCell>
                    <TableCell>
                      <UnorderedList>
                        {getRequest.data?.embedded?.Bijlagen.map((bijlage: any, idx: number) => (
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
        {getRequest.isLoading && <Skeleton height={"200px"} />}
      </PageContent>
    </Page>
  );
};
