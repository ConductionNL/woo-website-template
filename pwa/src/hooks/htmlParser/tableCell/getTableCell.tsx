import * as styles from "./getTableCell.module.css";
import { UtrechtTableCell } from "@utrecht/web-component-library-react";
import { domToReact } from "html-react-parser";

export const getTableCell = (props: any, children: any, options: any) => {
  return (
    <UtrechtTableCell className={styles.tableCell} {...props}>
      {domToReact(children, options)}
    </UtrechtTableCell>
  );
};
