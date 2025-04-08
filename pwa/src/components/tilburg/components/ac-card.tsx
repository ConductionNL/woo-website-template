import * as React from "react";
import clsx from "clsx";
import * as styles from "../css/_ac-card.module.css";

interface AcCardProps {
  blue?: boolean;
  category?: boolean;
  searchResult?: boolean;
  padding?: string;
  children: React.ReactNode;
  image?: string;
  skeleton?: boolean;
  spaceBetween?: boolean;
}

export const AcCard: React.FC<AcCardProps> = ({
  blue,
  category,
  searchResult,
  padding = "default",
  children,
  image,
  skeleton,
  spaceBetween = false,
}) => {
  console.log({ searchResult });

  const _CLASSES = clsx(
    styles.acCard,
    blue && styles.acCardBlue,
    category && styles.acCardCategory,
    searchResult && styles.acCardSearchResult,
    padding && `ac-card--padding-${padding}`,
    skeleton && styles.acCardSkeleton,
    spaceBetween && styles.acCardSpaceBetween,
  );

  return (
    <div className={_CLASSES}>
      {image && <img src={image} alt="" />}
      <div className={styles.acCardContent}>{children}</div>
    </div>
  );
};
