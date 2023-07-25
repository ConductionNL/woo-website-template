import { UtrechtTableRow } from "@utrecht/web-component-library-react";
import { domToReact } from "html-react-parser";

export const getTableRow = (props: any, children: any, options: any) => {
  return <UtrechtTableRow {...props}>{domToReact(children, options)}</UtrechtTableRow>;
};
