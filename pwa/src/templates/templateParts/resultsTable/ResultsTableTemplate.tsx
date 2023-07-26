import * as React from "react";
import * as styles from "./ResultsTableTemplate.module.css";

import {
  Table,
  TableHeader,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
} from "@utrecht/component-library-react/dist/css-module";
import { navigate } from "gatsby";

export const RestulstTableTemplate: React.FC = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Id</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {TEMP_OBJECTS.map((object) => (
          <TableRow className={styles.tableRow} key={object.id} onClick={() => navigate(`${object.id}`)}>
            <TableCell>{object.name}</TableCell>
            <TableCell>{object.id}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

const TEMP_OBJECTS = [
  { id: "92620d6e-7112-4853-9f9d-a10859ea7e3d", name: "Object 1" },
  { id: "142ea10e-7660-49dc-9eef-d49e87874d44", name: "Object 2" },
  { id: "cc2a2f12-7ef0-4563-8338-ae7a1979178e", name: "Object 3" },
];
