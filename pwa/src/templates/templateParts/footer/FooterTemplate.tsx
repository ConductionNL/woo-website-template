import * as React from "react";
import * as styles from "./FooterTemplate.module.css";
import parse from "html-react-parser";
import {
  PageFooter,
  Link,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Icon,
} from "@utrecht/component-library-react/dist/css-module";
import { navigate } from "gatsby-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { Logo } from "@conduction/components";
import { IconPrefix, IconName } from "@fortawesome/fontawesome-svg-core";
import { useFooterContent } from "../../../hooks/footerContent";

export const DEFAULT_FOOTER_CONTENT_URL =
  "https://raw.githubusercontent.com/ConductionNL/woo-website-template/main/pwa/src/templates/templateParts/footer/FooterContent.json";

type TDynamicContentItem = {
  title: string;
  items: {
    value: string;
    ariaLabel: string;
    link?: string;
    markdownLink?: string;
    multiRow?: string;
    label?: string;
    icon?: {
      icon: IconName;
      prefix: IconPrefix;
      placement: "left" | "right";
    };
    customIcon?: {
      icon: string;
      placement: "left" | "right";
    };
  }[];
};

export const FooterTemplate: React.FC = () => {
  const _useFooterContent = useFooterContent();
  const getFooterContent = _useFooterContent.getContent();

  // For development
  // const [footerContent, setFooterContent] = React.useState<TDynamicContentItem[]>([]);
  // React.useEffect(() => {
  //   const data = require("./FooterContent.json");
  //   setFooterContent(data);
  // }, []);

  return (
    <PageFooter className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.contentGrid}>
          {getFooterContent.data?.map((content: any, idx: string) => (
            <DynamicSection key={idx} {...{ content }} />
          ))}
        </div>

        <div className={styles.logoAndConduction}>
          {window.sessionStorage.getItem("FOOTER_LOGO_URL") !== "false" && (
            <Logo
              variant="footer"
              onClick={() =>
                window.sessionStorage.getItem("FOOTER_LOGO_HREF")
                  ? open(window.sessionStorage.getItem("FOOTER_LOGO_HREF") ?? "")
                  : navigate("/")
              }
            />
          )}

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
      <DynamicSectionHeading heading={window.sessionStorage.getItem("FOOTER_CONTENT_HEADER") ?? ""} {...{ content }} />

      {content.items.map((item, idx) => (
        <div key={idx} className={styles.dynamicSectionContent}>
          {item.label && <strong>{t(item.label)}</strong>}
          {/* External Link */}
          {item.link && item.link.includes("http") && <ExternalLink {...{ item }} />}

          {/* Internal Link */}
          {item.link && !item.link.includes("http") && <InternalLink {...{ item }} />}

          {/* Internal Link Github/Markdown link */}
          {item.markdownLink && <MarkdownLink {...{ item }} />}

          {/* MultiRow */}
          {item.multiRow && <MultiRow {...{ item }} />}

          {/* No Link */}
          {!item.link && !item.markdownLink && !item.multiRow && <NoLink {...{ item }} />}
        </div>
      ))}
    </section>
  );
};

const DynamicSectionHeading: React.FC<{ content: TDynamicContentItem; heading?: string }> = ({ content, heading }) => {
  const { t } = useTranslation();

  switch (heading) {
    case "heading-1":
      return <Heading1 className={styles.dynamicSectionTitle}>{t(content.title)}</Heading1>;
    case "heading-2":
      return <Heading2 className={styles.dynamicSectionTitle}>{t(content.title)}</Heading2>;
    case "heading-3":
      return <Heading3 className={styles.dynamicSectionTitle}>{t(content.title)}</Heading3>;
    case "heading-4":
      return <Heading4 className={styles.dynamicSectionTitle}>{t(content.title)}</Heading4>;
    case "heading-5":
      return <Heading5 className={styles.dynamicSectionTitle}>{t(content.title)}</Heading5>;
    default:
      return <Heading3 className={styles.dynamicSectionTitle}>{t(content.title)}</Heading3>;
  }
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
        <Icon>
          <FontAwesomeIcon icon={faCode} />
        </Icon>
      </Link>{" "}
      with{" "}
      <Link
        className={styles.withLoveLink}
        href="https://github.com/ConductionNL/woo-website-template/graphs/contributors"
        target="_blank"
        aria-label={`${t("Link to github contributors page")}, ${t("Opens a new window")}`}
      >
        <Icon>
          <FontAwesomeIcon icon={faHeart} />
        </Icon>
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

interface LinkComponentProps {
  item: any;
}

const ExternalLink: React.FC<LinkComponentProps> = ({ item }) => {
  const { t } = useTranslation();

  return (
    <Link
      className={styles.link}
      href={item.link}
      target="_blank"
      tabIndex={0}
      aria-label={`${t(item.ariaLabel)}, ${t("Opens a new window")}`}
    >
      {item.customIcon && item.customIcon.placement === "left" && (
        <Icon className={styles.iconLeft}>{parse(item.customIcon.icon)}</Icon>
      )}

      {item.icon && item.icon.placement === "left" && (
        <FontAwesomeIcon className={styles.iconLeft} icon={[item.icon.prefix, item.icon.icon]} />
      )}

      {t(item.value)}

      {item.icon && item.icon.placement === "right" && (
        <FontAwesomeIcon className={styles.iconRight} icon={[item.icon.prefix, item.icon.icon]} />
      )}

      {item.customIcon && item.customIcon.placement === "right" && (
        <Icon className={styles.iconRight}>{parse(item.customIcon.icon)}</Icon>
      )}
    </Link>
  );
};

const InternalLink: React.FC<LinkComponentProps> = ({ item }) => {
  const { t } = useTranslation();

  return (
    <Link
      className={styles.link}
      onClick={(e: any) => {
        e.preventDefault(), navigate(item.link ?? "");
      }}
      tabIndex={0}
      aria-label={`${t(item.ariaLabel)}, ${t(item.value)}`}
      role="button"
      href={item.link}
    >
      {item.icon && item.icon.placement === "left" && (
        <FontAwesomeIcon className={styles.iconLeft} icon={[item.icon.prefix, item.icon.icon]} />
      )}

      {item.customIcon && item.customIcon.placement === "left" && (
        <Icon className={styles.iconLeft}>{parse(item.customIcon.icon)}</Icon>
      )}

      {t(item.value)}

      {item.icon && item.icon.placement === "right" && (
        <FontAwesomeIcon className={styles.iconRight} icon={[item.icon.prefix, item.icon.icon]} />
      )}

      {item.customIcon && item.customIcon.placement === "right" && (
        <Icon className={styles.iconRight}>{parse(item.customIcon.icon)}</Icon>
      )}
    </Link>
  );
};

const MarkdownLink: React.FC<LinkComponentProps> = ({ item }) => {
  const { t } = useTranslation();

  return (
    <Link
      className={styles.link}
      onClick={(e: any) => {
        e.preventDefault(), navigate(`/markdown/${item.value.replaceAll(" ", "_")}/?link=${item.markdownLink}`);
      }}
      tabIndex={0}
      aria-label={`${t(item.ariaLabel)}, ${t(item.markdownLink)}`}
      role="button"
      href={item.markdownLink}
    >
      {item.icon && item.icon.placement === "left" && (
        <FontAwesomeIcon className={styles.iconLeft} icon={[item.icon.prefix, item.icon.icon]} />
      )}

      {item.customIcon && item.customIcon.placement === "left" && (
        <Icon className={styles.iconLeft}>{parse(item.customIcon.icon)}</Icon>
      )}

      {t(item.value)}

      {item.icon && item.icon.placement === "right" && (
        <FontAwesomeIcon className={styles.iconRight} icon={[item.icon.prefix, item.icon.icon]} />
      )}

      {item.customIcon && item.customIcon.placement === "right" && (
        <Icon className={styles.iconRight}>{parse(item.customIcon.icon)}</Icon>
      )}
    </Link>
  );
};

const MultiRow: React.FC<LinkComponentProps> = ({ item }) => {
  return (
    <span className={styles.multiRow}>
      {item.customIcon && item.customIcon.placement === "left" && (
        <Icon className={styles.iconLeft}>{parse(item.customIcon.icon)}</Icon>
      )}

      {item.icon && item.icon.placement === "left" && (
        <FontAwesomeIcon className={styles.iconLeft} icon={[item.icon.prefix, item.icon.icon]} />
      )}

      <div>{item.multiRow}</div>

      {item.icon && item.icon.placement === "right" && (
        <FontAwesomeIcon className={styles.iconRight} icon={[item.icon.prefix, item.icon.icon]} />
      )}

      {item.customIcon && item.customIcon.placement === "right" && (
        <Icon className={styles.iconRight}>{parse(item.customIcon.icon)}</Icon>
      )}
    </span>
  );
};

const NoLink: React.FC<LinkComponentProps> = ({ item }) => {
  const { t } = useTranslation();

  return (
    <span>
      {item.customIcon && item.customIcon.placement === "left" && (
        <Icon className={styles.iconLeft}>{parse(item.customIcon.icon)}</Icon>
      )}

      {item.icon && item.icon.placement === "left" && (
        <FontAwesomeIcon className={styles.iconLeft} icon={[item.icon.prefix, item.icon.icon]} />
      )}

      {t(item.value)}

      {item.icon && item.icon.placement === "right" && (
        <FontAwesomeIcon className={styles.iconRight} icon={[item.icon.prefix, item.icon.icon]} />
      )}

      {item.customIcon && item.customIcon.placement === "right" && (
        <Icon className={styles.iconRight}>{parse(item.customIcon.icon)}</Icon>
      )}
    </span>
  );
};
