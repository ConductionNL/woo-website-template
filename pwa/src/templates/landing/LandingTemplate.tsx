import * as React from "react";
import { Page, PageContent, Heading1, Paragraph } from "@utrecht/component-library-react/dist/css-module";
import { FiltersTemplate } from "../templateParts/filters/FiltersTemplate";

export const LandingTemplate: React.FC = () => {
  return (
    <Page>
      <PageContent>
        <Heading1>Title</Heading1>

        <Paragraph lead>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris convallis pellentesque nisi quis venenatis.
          Vestibulum sed metus ac augue dapibus feugiat. Aliquam erat volutpat. Praesent euismod ultricies rhoncus.
          Donec rutrum tellus id turpis ornare, in imperdiet arcu commodo.{" "}
        </Paragraph>

        <FiltersTemplate />
      </PageContent>
    </Page>
  );
};
