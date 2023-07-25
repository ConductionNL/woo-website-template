import { UtrechtTable } from "@utrecht/web-component-library-react";
import { domToReact } from "html-react-parser";

export const getTable = (props: any, children: any, options: any) => {
  return <UtrechtTable {...props}>{domToReact(children, options)}</UtrechtTable>;
};
