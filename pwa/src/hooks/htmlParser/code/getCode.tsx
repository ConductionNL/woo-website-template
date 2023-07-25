import { UtrechtCode, UtrechtCodeBlock } from "@utrecht/web-component-library-react";
import { domToReact } from "html-react-parser";

export const getCode = (name: string, props: any, children: any, options: any) => {
  switch (name) {
    case "code":
      return <UtrechtCode {...props}>{domToReact(children, options)}</UtrechtCode>;
    case "pre":
      return <UtrechtCodeBlock {...props}>{domToReact(children, options)}</UtrechtCodeBlock>;
  }
};
