import { Code, CodeBlock } from "@utrecht/component-library-react/dist/css-module";
import { domToReact } from "html-react-parser";
import { HorizontalOverflowWrapper } from "@conduction/components";
import { TAriaLabels } from "../useHtmlParser";

export const getCode = (name: string, props: any, children: any, options: any, ariaLabels: TAriaLabels) => {
  switch (name) {
    case "code":
      return <Code {...props}>{domToReact(children, options)}</Code>;
    case "pre":
      return (
        <CodeBlock {...props}>
          <HorizontalOverflowWrapper {...{ ariaLabels }}>{domToReact(children, options)}</HorizontalOverflowWrapper>
        </CodeBlock>
      );
  }
};
