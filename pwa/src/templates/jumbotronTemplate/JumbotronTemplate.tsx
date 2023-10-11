import * as React from "react";
import * as styles from "./JumbotronTemplate.module.css";
import { Heading2, Paragraph, Page, PageContent } from "@utrecht/component-library-react/dist/css-module";
import { CardWrapper } from "@conduction/components";
import { useTranslation } from "react-i18next";

export const JumbotronTemplate: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div
      aria-label={t("Jumbotron")}
      role="contentinfo"
      style={{ backgroundImage: `url(${process.env.GATSBY_JUMBOTRON_IMAGE_URL})` }}
      className={styles.wrapper}
    >
      <Page>
        <PageContent>
          <CardWrapper aria-label={t("Jumbotron card")} role="contentinfo" className={styles.card}>
            <Heading2 className={styles.title}>
              {t("Woo-publications of")} {process.env.GATSBY_ORGANISATION_NAME}
            </Heading2>

            <Paragraph className={styles.description}>
              {t("On this page you will find the Woo-publications of")} {process.env.GATSBY_ORGANISATION_NAME}
            </Paragraph>
          </CardWrapper>
        </PageContent>
      </Page>
    </div>
  );
};
