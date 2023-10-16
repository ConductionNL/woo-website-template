import * as React from "react";
import * as styles from "./FooterTemplate.module.css";
import { PageFooter, Link, Heading3 } from "@utrecht/component-library-react/dist/css-module";
import { navigate } from "gatsby-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

type TDynamicContentItem = {
  title: string;
  items: { label: string; value: string; link?: string }[];
};

export const FooterTemplate: React.FC = () => {
  const [footerContent, setFooterContent] = React.useState<TDynamicContentItem[]>([]);

  React.useEffect(() => {
    if (!process.env.GATSBY_FOOTER_CONTENT) return;

    try {
      setFooterContent(JSON.parse(process.env.GATSBY_FOOTER_CONTENT));
    } catch {
      console.warn("Could not parse footer content.");
    }
  }, [process.env.GATSBY_FOOTER_CONTENT]);

  return (
    <PageFooter className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.contentGrid}>
          {footerContent?.map((content, idx) => (
            <DynamicSection key={idx} {...{ content }} />
          ))}
        </div>

        <div className={styles.logoAndConduction}>
          <Logo />
          <WithLoveByConduction />
        </div>
      </div>
    </PageFooter>
  );
};

const DynamicSection: React.FC<{ content: TDynamicContentItem }> = ({ content }) => {
  const { t } = useTranslation();

  return (
    <section>
      <Heading3 className={styles.dynamicSectionTitle}>{t(content.title)}</Heading3>

      {content.items.map((item, idx) => (
        <div key={idx} className={styles.dynamicSectionContent}>
          <strong>{t(item.label)}</strong>
          {/* External Link */}
          {item.link && item.link.includes("http") && (
            <Link
              className={styles.link}
              href={item.link}
              target="_blank"
              tabIndex={0}
              aria-label={`${t(item.label)}, ${t("Opens a new window")}`}
            >
              {item.value}
            </Link>
          )}

          {/* Internal Link */}
          {item.link && !item.link.includes("http") && (
            <Link
              className={styles.link}
              onClick={() => navigate(item.link ?? "")}
              tabIndex={0}
              aria-label={`${t(item.label)}, ${t(item.value)}`}
              role="button"
            >
              {item.value}
            </Link>
          )}

          {/* No Link */}
          {!item.link && <span>{item.value}</span>}
        </div>
      ))}
    </section>
  );
};

const Logo: React.FC = () => {
  if (process.env.GATSBY_FOOTER_LOGO_URL === "false") return <></>;
  const { t } = useTranslation();

  return (
    <div className={styles.imageContainer}>
      <img
        className={styles.image}
        onClick={() =>
          process.env.GATSBY_FOOTER_LOGO_HREF ? open(process.env.GATSBY_FOOTER_LOGO_HREF) : navigate("/")
        }
        src={process.env.GATSBY_FOOTER_LOGO_URL}
        alt={t("Footer-logo")}
        aria-label={`${t("Footer-logo")}, ${t("Can open a new window")}`}
        tabIndex={0}
      />
    </div>
  );
};

const WithLoveByConduction: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Link
        className={styles.withLoveLink}
        href="https://github.com/ConductionNL/woo-website-template"
        target="_blank"
        aria-label={`${t("Link to github repository")}, ${t("Opens a new window")}`}
      >
        <FontAwesomeIcon icon={faCode} />
      </Link>{" "}
      with{" "}
      <Link
        className={styles.withLoveLink}
        href="https://github.com/ConductionNL/woo-website-template/graphs/contributors"
        target="_blank"
        aria-label={`${t("Link to github contributors page")}, ${t("Opens a new window")}`}
      >
        <FontAwesomeIcon icon={faHeart} />
      </Link>{" "}
      by{" "}
      <Link
        className={styles.withLoveLink}
        href="https://conduction.nl"
        target="_blank"
        aria-label={`${t("Link to conduction website")}, ${t("Opens a new window")}`}
      >
        <span className={styles.withLoveConductionLink}> Conduction.</span>
      </Link>
    </div>
  );
};
