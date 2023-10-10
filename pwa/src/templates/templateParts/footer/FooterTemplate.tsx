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
  return (
    <section>
      <Heading3 className={styles.dynamicSectionTitle}>{content.title}</Heading3>

      {content.items.map((item, idx) => (
        <div key={idx} className={styles.dynamicSectionContent}>
          <strong>{item.label}</strong>

          {/* External Link */}
          {item.link && item.link.includes("http") && (
            <Link className={styles.link} href={item.link} target="_blank">
              {item.value}
            </Link>
          )}

          {/* Internal Link */}
          {item.link && !item.link.includes("http") && (
            <Link className={styles.link} onClick={() => navigate(item.link ?? "")}>
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

  return (
    <div className={styles.imageContainer}>
      <img
        className={styles.image}
        onClick={() =>
          process.env.GATSBY_FOOTER_LOGO_HREF ? open(process.env.GATSBY_FOOTER_LOGO_HREF) : navigate("/")
        }
        src={process.env.GATSBY_FOOTER_LOGO_URL}
        alt={"Footer-logo"}
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
        description={t("Link to github repository")}
      >
        <FontAwesomeIcon icon={faCode} />
      </Link>{" "}
      with{" "}
      <Link
        className={styles.withLoveLink}
        href="https://github.com/ConductionNL/woo-website-template/graphs/contributors"
        target="_blank"
        name={t("Link to github contributors page")}
      >
        <FontAwesomeIcon icon={faHeart} />
      </Link>{" "}
      by{" "}
      <Link
        className={styles.withLoveLink}
        href="https://conduction.nl"
        target="_blank"
        description={t("Link to conduction website")}
      >
        <span className={styles.withLoveConductionLink}> Conduction.</span>
      </Link>
    </div>
  );
};
