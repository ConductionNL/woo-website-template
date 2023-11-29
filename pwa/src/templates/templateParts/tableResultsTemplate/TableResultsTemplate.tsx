import * as React from "react";
import * as styles from "./TableResultsTemplate.module.css";
import clsx from "clsx";
import {
  Table,
  TableHeader,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
} from "@utrecht/component-library-react/dist/css-module";
import { navigate } from "gatsby";
import { translateDate } from "../../../services/dateFormat";
import { useTranslation } from "react-i18next";
import { HorizontalOverflowWrapper } from "@conduction/components";

interface TableResultsTemplateProps {
  requests: any[];
}

export const TableResultsTemplate: React.FC<TableResultsTemplateProps> = ({ requests }) => {
  const { t, i18n } = useTranslation();

  return (
    <HorizontalOverflowWrapper
      ariaLabels={{ scrollLeftButton: t("Left scroll button"), scrollRightButton: t("Right scroll button") }}
    >
      <Table className={styles.table}>
        <TableHeader className={styles.tableHeader}>
          <TableRow>
            <TableHeaderCell>{t("Subject")}</TableHeaderCell>
            <TableHeaderCell>{t("Publication date")}</TableHeaderCell>
            {(window.sessionStorage.getItem("SHOW_CATEGORY") === "true" ||
              window.sessionStorage.getItem("SHOW_ORGANIZATION") === "true") && (
              <>
                {window.sessionStorage.getItem("SHOW_ORGANIZATION") === "true" && (
                  <TableHeaderCell>{t("Municipality")}</TableHeaderCell>
                )}
                {window.sessionStorage.getItem("SHOW_CATEGORY") === "true" && (
                  <TableHeaderCell>{t("Category")}</TableHeaderCell>
                )}
              </>
            )}
            <TableHeaderCell>{t("Summary")}</TableHeaderCell>
            <TableHeaderCell>{t("Summary")}</TableHeaderCell>
            <TableHeaderCell>{t("Summary")}</TableHeaderCell>
            <TableHeaderCell>{t("Summary")}</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody className={styles.tableBody}>
          {requests.map((request) => (
            <TableRow
              className={styles.tableRow}
              key={request._self.id}
              onClick={() => navigate(request._self.id)}
              tabIndex={0}
              aria-label={`${request.titel},  ${
                request.publicatiedatum ? translateDate(i18n.language, request.publicatiedatum) : t("N/A")
              } ${
                window.sessionStorage.getItem("SHOW_ORGANIZATION") === "true"
                  ? `,${request.embedded?.behandelendBestuursorgaan?.naam}`
                  : ""
              } ${window.sessionStorage.getItem("SHOW_CATEGORY") === "true" ? `, ${request.categorie}` : ""}, ${
                request.samenvatting
              }`}
            >
              <TableCell>{request.titel ?? t("No subject available")}</TableCell>
              <TableCell>
                {request.publicatiedatum
                  ? translateDate(i18n.language, request.publicatiedatum)
                  : t("No publication date available")}
              </TableCell>
              {(window.sessionStorage.getItem("SHOW_CATEGORY") === "true" ||
                window.sessionStorage.getItem("SHOW_ORGANIZATION") === "true") && (
                <>
                  {window.sessionStorage.getItem("SHOW_ORGANIZATION") === "true" && (
                    <TableCell className={styles.categoryAndMunicipality}>
                      {request.embedded?.behandelendBestuursorgaan?.naam ?? t("No municipality available")}
                    </TableCell>
                  )}
                  {window.sessionStorage.getItem("SHOW_CATEGORY") === "true" && (
                    <TableCell
                      className={clsx(
                        window.sessionStorage.getItem("SHOW_ORGANIZATION") !== "true" && styles.categoryAndMunicipality,
                      )}
                    >
                      {request.categorie ?? t("No category available")}
                    </TableCell>
                  )}
                </>
              )}
              <TableCell>
                <div className={styles.description}>{request.samenvatting ?? t("No summary available")}</div>
              </TableCell>
              <TableCell>
                <div className={styles.description}>{request.samenvatting ?? t("No summary available")}</div>
              </TableCell>
              <TableCell>
                <div className={styles.description}>{request.samenvatting ?? t("No summary available")}</div>
              </TableCell>
              <TableCell>
                <div className={styles.description}>{request.samenvatting ?? t("No summary available")}</div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </HorizontalOverflowWrapper>
  );
};
