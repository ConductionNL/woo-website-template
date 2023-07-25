import {
  UtrechtHeading1,
  UtrechtHeading2,
  UtrechtHeading3,
  UtrechtHeading4,
} from "@utrecht/web-component-library-react";
import { domToReact } from "html-react-parser";

export const getHeader = (name: string, props: any, children: any, options: any) => {
  switch (name) {
    case "h1":
      return <UtrechtHeading1 {...props}>{domToReact(children, options)}</UtrechtHeading1>;
    case "h2":
      return <UtrechtHeading2 {...props}>{domToReact(children, options)}</UtrechtHeading2>;
    case "h3":
      return <UtrechtHeading3 {...props}>{domToReact(children, options)}</UtrechtHeading3>;
    case "h4":
      return <UtrechtHeading4 {...props}>{domToReact(children, options)}</UtrechtHeading4>;
  }
};
