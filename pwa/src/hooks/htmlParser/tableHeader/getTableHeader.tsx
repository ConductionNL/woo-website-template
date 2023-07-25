import { UtrechtTableHeader } from "@utrecht/web-component-library-react";
import { domToReact } from "html-react-parser";

export const getTableHeader = (props: any, children: any, options: any) => {
  return <UtrechtTableHeader {...props}>{domToReact(children, options)}</UtrechtTableHeader>;
};
