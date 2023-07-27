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
import { TEMP_OBJECTS } from "../../../data/detail";
import { translateDate } from "../../../services/dateFormat";
import { useTranslation } from "react-i18next";

export const TableResultsTemplate: React.FC = () => {
  const { t, i18n } = useTranslation();

  const objects = TEMP_OBJECTS;
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Ontvangstdatum</TableHeaderCell>
          <TableHeaderCell>Besluitdatum</TableHeaderCell>
          <TableHeaderCell>Kenmerk</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {objects.map((object) => (
          <TableRow className={styles.tableRow} key={object.id} onClick={() => navigate(`${object.id}`)}>
            <TableCell>{object.name}</TableCell>
            <TableCell>{translateDate(i18n.language, object.receiptDate) ?? "-"}</TableCell>
            <TableCell>{translateDate(i18n.language, object.decisionDate) ?? "-"}</TableCell>
            <TableCell>{object.reference}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
