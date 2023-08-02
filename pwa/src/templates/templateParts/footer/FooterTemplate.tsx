import * as React from "react";
import * as styles from "./FooterTemplate.module.css";

import {
  PageFooter,
  PageContent,
  UnorderedList,
  UnorderedListItem,
  Link,
} from "@utrecht/component-library-react/dist/css-module";

import { navigate } from "gatsby-link";

export const FooterTemplate: React.FC = () => {
  return (
    <PageFooter className={styles.footer}>
      <div>
        <PageContent>
          <UnorderedList className={styles.list}>
            <section className={styles.linksContainer}>
              <UnorderedListItem onClick={() => navigate("/")}>Home</UnorderedListItem>
            </section>

            <img
              className={styles.image}
              onClick={() => navigate("/")}
              src={process.env.GATSBY_FOOTER_LOGO_URL}
              alt={"Footer-logo"}
            />
          </UnorderedList>
        </PageContent>
        <div className={styles.container}>
          <div>Wet open overheid (Woo) template.</div>

          <div>
            Powered by{" "}
            <Link href="https://conduction.nl" target="_blank">
              Conduction.
            </Link>
          </div>
        </div>
      </div>
    </PageFooter>
  );
};
