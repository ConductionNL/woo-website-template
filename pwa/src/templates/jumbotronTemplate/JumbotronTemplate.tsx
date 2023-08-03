import * as React from "react";
import * as styles from "./JumbotronTemplate.module.css";
import { Heading2, Paragraph, Page, PageContent } from "@utrecht/component-library-react/dist/css-module";

export const JumbotronTemplate: React.FC = () => {
  return (
    <div style={{ backgroundImage: `url(${process.env.GATSBY_JUMBOTRON_IMAGE_URL})` }} className={styles.wrapper}>
      <Page>
        <PageContent>
          <div>
            <div className={styles.card}>
              <Heading2>Woo dossiers van {process.env.GATSBY_ORGANISATION_NAME}</Heading2>

              <Paragraph lead>
                Op deze pagina vind u de Woo dossiers van {process.env.GATSBY_ORGANISATION_NAME}
              </Paragraph>
            </div>
          </div>
        </PageContent>
      </Page>
    </div>
  );
};
