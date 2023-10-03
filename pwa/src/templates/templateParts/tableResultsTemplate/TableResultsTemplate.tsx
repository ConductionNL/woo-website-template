import * as React from "react";
import * as styles from "./TableResultsTemplate.module.css";
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

interface TableResultsTemplateProps {
  requests: any[];
}

export const TableResultsTemplate: React.FC<TableResultsTemplateProps> = ({ requests }) => {
  const { i18n } = useTranslation();

  return (
    <Table className={styles.table}>
      <TableHeader className={styles.tableHeader}>
        <TableRow>
          <TableHeaderCell>Woo-verzoek</TableHeaderCell>
          <TableHeaderCell>Categorie</TableHeaderCell>
          <TableHeaderCell>Publicatiedatum</TableHeaderCell>
          <TableHeaderCell>Ontvangstdatum</TableHeaderCell>
          <TableHeaderCell>Besluitdatum</TableHeaderCell>
          <TableHeaderCell>Besluit</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody className={styles.tableBody}>
        {requests.map((request) => (
          <TableRow className={styles.tableRow} key={request.id} onClick={() => navigate(request.id)}>
            <TableCell>{request.Titel ?? "Geen titel beschikbaar"}</TableCell>
            <TableCell>{request.Categorie ?? "-"}</TableCell>
            <TableCell>
              {request.Publicatiedatum
                ? translateDate(i18n.language, request.Publicatiedatum)
                : "Geen publicatiedatum beschikbaar"}
            </TableCell>
            <TableCell>
              {request.Ontvangstdatum
                ? translateDate(i18n.language, request.Ontvangstdatum)
                : "Geen ontvanstdatum beschikbaar"}
            </TableCell>
            <TableCell>
              {request.Besluitdatum
                ? translateDate(i18n.language, request.Besluitdatum)
                : "Geen besluitdatum beschikbaar"}
            </TableCell>
            <TableCell>{request.Besluit ?? "Geen besluit beschikbaar"}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
