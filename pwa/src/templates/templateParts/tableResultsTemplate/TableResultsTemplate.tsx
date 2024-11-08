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
import { removeHTMLFromString } from "../../../services/removeHTMLFromString";

interface TableResultsTemplateProps {
  requests: any[];
}

export const TableResultsTemplate: React.FC<TableResultsTemplateProps> = ({ requests }) => {
  const { t, i18n } = useTranslation();

  return (
    <HorizontalOverflowWrapper
      ariaLabels={{
        scrollLeftButton: t("Scroll table to the left"),
        scrollRightButton: t("Scroll table to the right"),
      }}
    >
      <div role="region" aria-label={t("Woo Request")}>
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
            </TableRow>
          </TableHeader>
          <TableBody className={styles.tableBody}>
            {requests.map((request) => (
              <TableRow
                className={styles.tableRow}
                key={request.id}
                onClick={() => navigate(request.id.toString())}
                tabIndex={0}
                aria-label={`${removeHTMLFromString(removeHTMLFromString(request.title))},  ${
                  request.published ? translateDate(i18n.language, request.published) : t("N/A")
                } ${
                  window.sessionStorage.getItem("SHOW_ORGANIZATION") === "true"
                    ? `,${request.catalog?.organization?.title ?? request.organization?.title}`
                    : ""
                } ${window.sessionStorage.getItem("SHOW_CATEGORY") === "true" ? `, ${request.category}` : ""}, ${
                  removeHTMLFromString(removeHTMLFromString(request.summary)) ?? t("No summary available")
                }`}
              >
                <TableCell>
                  {removeHTMLFromString(removeHTMLFromString(request.title)) ?? t("No subject available")}
                </TableCell>
                <TableCell>
                  {request.published
                    ? translateDate(i18n.language, request.published)
                    : t("No publication date available")}
                </TableCell>
                {(window.sessionStorage.getItem("SHOW_CATEGORY") === "true" ||
                  window.sessionStorage.getItem("SHOW_ORGANIZATION") === "true") && (
                  <>
                    {window.sessionStorage.getItem("SHOW_ORGANIZATION") === "true" && (
                      <TableCell className={styles.categoryAndMunicipality}>
                        {request.catalog?.organization?.title ??
                          request.organization?.title ??
                          t("No municipality available")}
                      </TableCell>
                    )}
                    {window.sessionStorage.getItem("SHOW_CATEGORY") === "true" && (
                      <TableCell
                        className={clsx(
                          window.sessionStorage.getItem("SHOW_ORGANIZATION") !== "true" &&
                            styles.categoryAndMunicipality,
                        )}
                      >
                        {request.category ?? t("No category available")}
                      </TableCell>
                    )}
                  </>
                )}
                <TableCell>
                  <div className={styles.description}>
                    {removeHTMLFromString(removeHTMLFromString(request.summary)) ?? t("No summary available")}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </HorizontalOverflowWrapper>
  );
};
