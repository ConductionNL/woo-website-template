import * as React from "react";
import * as styles from "./ObjectDetailTemplate.module.css";
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
import { TEMP_OBJECTS } from "../../data/detail";
import { translateDate } from "../../services/dateFormat";
import { useTranslation } from "react-i18next";
import { navigate } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

interface ObjectDetailTemplateProps {
  objectId: string;
}

export const ObjectDetailTemplate: React.FC<ObjectDetailTemplateProps> = ({ objectId }) => {
  const { t, i18n } = useTranslation();

  const object = TEMP_OBJECTS.find((object) => object.id === objectId);

  return (
    <Page>
      <PageContent className={styles.container}>
        <div>
          <Link className={styles.backLink} onClick={() => navigate("/")}>
            <FontAwesomeIcon icon={faArrowLeft} /> Terug naar home
          </Link>
        </div>
        {object && (
          <>
            <Heading1>{object.name}</Heading1>
            <Table>
              <TableBody>
                {object.reference && (
                  <TableRow>
                    <TableCell>{t("Kenmerk")}</TableCell>
                    <TableCell>{object.reference}</TableCell>
                  </TableRow>
                )}

                {object.subject && (
                  <TableRow>
                    <TableCell>{t("Onderwerp")}</TableCell>
                    <TableCell>{object.subject}</TableCell>
                  </TableRow>
                )}
                {object.resume && (
                  <TableRow>
                    <TableCell>{t("Samenvatting")}</TableCell>
                    <TableCell>{object.resume}</TableCell>
                  </TableRow>
                )}
                {object.termOverrun && (
                  <TableRow>
                    <TableCell>{t("Termijnoverschrijding")}</TableCell>
                    <TableCell>{object.termOverrun}</TableCell>
                  </TableRow>
                )}
                {object.receiptDate && (
                  <TableRow>
                    <TableCell>{t("Ontvangstdatum")}</TableCell>

                    <TableCell>{translateDate(i18n.language, object.receiptDate) ?? "-"}</TableCell>
                  </TableRow>
                )}
                {object.decisionDate && (
                  <TableRow>
                    <TableCell>{t("Besluitdatum")} </TableCell>
                    <TableCell>{translateDate(i18n.language, object.decisionDate) ?? "-"}</TableCell>
                  </TableRow>
                )}
                {object.decision && (
                  <TableRow>
                    <TableCell>{t("Besluit")}</TableCell>
                    <TableCell>{object.decision}</TableCell>
                  </TableRow>
                )}
                {object?.["Theme's"] && (
                  <TableRow>
                    <TableCell>{t("Thema's")}</TableCell>
                    <TableCell>{object?.["Theme's"]}</TableCell>
                  </TableRow>
                )}
                {object?.["attachment information request"] && (
                  <TableRow>
                    <TableCell>{t("Bijlage informatieverzoek")}</TableCell>
                    <TableCell>
                      <Link href={object?.["attachment information request"].href} target="blank">
                        {object?.["attachment information request"].name}
                      </Link>
                    </TableCell>
                  </TableRow>
                )}
                {object?.["attachment inventory list"] && (
                  <TableRow>
                    <TableCell>{t("Bijlage inventarisatielijst")}</TableCell>
                    <TableCell>
                      <Link href={object?.["attachment inventory list"].href} target="blank">
                        {object?.["attachment inventory list"].name}
                      </Link>
                    </TableCell>
                  </TableRow>
                )}
                {object?.["attachment decision"] && (
                  <TableRow>
                    <TableCell>{t("Bijlage besluit")}</TableCell>
                    <TableCell>
                      <Link href={object?.["attachment decision"].href} target="blank">
                        {object?.["attachment decision"].name}
                      </Link>
                    </TableCell>
                  </TableRow>
                )}
                {object.attachments && (
                  <TableRow>
                    <TableCell>{t("Bijlagen")}</TableCell>
                    <TableCell>
                      <UnorderedList className={styles.list}>
                        {object.attachments.map((attachment) => (
                          <UnorderedListItem>
                            <Link href={attachment.href} target="blank">
                              {attachment.name}
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
      </PageContent>
    </Page>
  );
};
