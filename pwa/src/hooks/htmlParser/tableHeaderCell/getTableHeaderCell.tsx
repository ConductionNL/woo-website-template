import { UtrechtTableHeaderCell } from "@utrecht/web-component-library-react";
import { domToReact } from "html-react-parser";

export const getTableHeaderCell = (props: any, children: any, options: any) => {
  return <UtrechtTableHeaderCell {...props}>{domToReact(children, options)}</UtrechtTableHeaderCell>;
};
