import * as React from "react";
import * as styles from "./JumbotronTemplate.module.css";
import { Image } from "@utrecht/component-library-react/dist/css-module";
import { Container } from "@conduction/components";
import { UtrechtHeading1, UtrechtParagraph } from "@utrecht/web-component-library-react";

export const JumbotronTemplate: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Container layoutClassName={styles.container}>
        <div className={styles.content}>
          <UtrechtHeading1>{process.env.GATSBY_JUMBOTRON_TITLE}</UtrechtHeading1>

          <span className={styles.subtitle}>{process.env.GATSBY_JUMBOTRON_SUBTITLE}</span>

          <UtrechtParagraph>{process.env.GATSBY_JUMBOTRON_DESCRIPTION}</UtrechtParagraph>
        </div>

        <Image
          src={process.env.GATSBY_JUMBOTRON_SVG}
          alt={`${process.env.GATSBY_JUMBOTRON_TITLE}-image`}
          className={styles.image}
        />
      </Container>
    </div>
  );
};
