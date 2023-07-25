import { UtrechtParagraph } from "@utrecht/web-component-library-react";
import { domToReact } from "html-react-parser";

export const getParagraph = (props: any, children: any, options: any) => {
  return <UtrechtParagraph {...props}>{domToReact(children, options)}</UtrechtParagraph>;
};
