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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faHeart } from "@fortawesome/free-solid-svg-icons";

export const FooterTemplate: React.FC = () => {
  return (
    <PageFooter className={styles.footer}>
      <div>
        <PageContent>
          <UnorderedList className={styles.list}>
            <section className={styles.linksContainer}>
              <UnorderedListItem onClick={() => navigate("/")}>Home</UnorderedListItem>
            </section>
          </UnorderedList>
        </PageContent>
        <div className={styles.container}>
          <img
            className={styles.image}
            onClick={() => navigate("/")}
            src={process.env.GATSBY_FOOTER_LOGO_URL}
            alt={"Footer-logo"}
          />
          <div>
            <Link className={styles.link} href="https://github.com/ConductionNL/woo-website-template" target="_blank">
              <FontAwesomeIcon icon={faCode} />
            </Link>{" "}
            with{" "}
            <Link
              className={styles.link}
              href="https://github.com/ConductionNL/woo-website-template/graphs/contributors"
              target="_blank"
            >
              ❤️
            </Link>{" "}
            by{" "}
            <Link className={styles.link} href="https://conduction.nl" target="_blank">
              Conduction.
            </Link>
          </div>
        </div>
      </div>
    </PageFooter>
  );
};
