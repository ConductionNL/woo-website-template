import { UtrechtTableBody } from "@utrecht/web-component-library-react";
import { domToReact } from "html-react-parser";

export const getTableBody = (props: any, children: any, options: any) => {
  return <UtrechtTableBody {...props}>{domToReact(children, options)}</UtrechtTableBody>;
};
