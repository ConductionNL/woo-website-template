import * as React from "react";
import * as styles from "./FooterTemplate.module.css";

import { PageFooter, Link } from "@utrecht/component-library-react/dist/css-module";
import { navigate } from "gatsby-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

export const FooterTemplate: React.FC = () => {
  return (
    <PageFooter className={styles.footer}>
      <div className={styles.container}>
        <img
          className={styles.image}
          onClick={() =>
            process.env.GATSBY_FOOTER_LOGO_HREF ? open(process.env.GATSBY_FOOTER_LOGO_HREF) : navigate("/")
          }
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
    </PageFooter>
  );
};
