import * as React from "react";
import * as styles from "./JumbotronTemplate.module.css";
import { Heading2, Paragraph, Page, PageContent } from "@utrecht/component-library-react/dist/css-module";
import { CardWrapper } from "@conduction/components/lib/components/card";

export const JumbotronTemplate: React.FC = () => {
  return (
    <div style={{ backgroundImage: `url(${process.env.GATSBY_JUMBOTRON_IMAGE_URL})` }} className={styles.wrapper}>
      <Page>
        <PageContent>
          <div>
            <CardWrapper className={styles.card}>
              <Heading2 className={styles.title}>Woo-publicaties van {process.env.GATSBY_ORGANISATION_NAME}</Heading2>

              <Paragraph className={styles.description}>
                Op deze pagina vind u de Woo-publicaties van {process.env.GATSBY_ORGANISATION_NAME}
              </Paragraph>
            </CardWrapper>
          </div>
        </PageContent>
      </Page>
    </div>
  );
};
