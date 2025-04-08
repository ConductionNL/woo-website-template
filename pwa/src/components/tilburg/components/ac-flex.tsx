import * as React from "react";
import clsx from "clsx";
import * as styles from "../css/_ac-flex.module.css";

interface AcFlexProps {
  children: React.ReactNode;
  column?: boolean;
  spacing?: string | number;
  margin?: string | number;
  justifyContent?: string;
  alignItems?: string;
  wrap?: boolean;
  grow?: boolean;
  className?: string;
}

export const AcFlex: React.FC<AcFlexProps> = ({
  children,
  column,
  spacing,
  margin,
  justifyContent,
  alignItems,
  wrap,
  grow,
  className,
}) => {
  const getJustifyContent = (justifyContent: string) => {
    switch (justifyContent) {
      case "center":
        return styles.acFlexJustifyContentCenter;
      case "between":
        return styles.acFlexJustifyContentBetween;
      case "start":
        return styles.acFlexJustifyContentStart;
      case "end":
        return styles.acFlexJustifyContentEnd;
      default:
        return "";
    }
  };
  const getAlignItems = (alignItems: string) => {
    switch (alignItems) {
      case "center":
        return styles.acFlexAlignItemsCenter;
      default:
        return "";
    }
  };

  const getSpacing = (spacing: string | number) => {
    switch (spacing) {
      case "xs":
        return styles.acFlexSpacingXs;
      case "sm":
        return styles.acFlexSpacingSm;
      case "md":
        return styles.acFlexSpacingMd;
      case "lg":
        return styles.acFlexSpacingLg;
      case "xl":
        return styles.acFlexSpacingXl;
      case "xxl":
        return styles.acFlexSpacingXxl;
      default:
        return "";
    }
  };

  const getMargin = (margin: string | number) => {
    switch (margin) {
      case "xs":
        return styles.acFlexMarginXs;
      case "sm":
        return styles.acFlexMarginSm;
      case "md":
        return styles.acFlexMarginMd;
      case "lg":
        return styles.acFlexMarginLg;
      case "xl":
        return styles.acFlexMarginXl;
      case "xxl":
        return styles.acFlexMarginXxl;
      default:
        return "";
    }
  };

  const _CLASSES = clsx(
    styles.acFlex,
    column && styles.acFlexColumn,
    spacing !== undefined && getSpacing(spacing),
    margin !== undefined && getMargin(margin),
    wrap && styles.acFlexWrap,
    grow && styles.acFlexGrow,
    justifyContent !== undefined && getJustifyContent(justifyContent),
    alignItems !== undefined && getAlignItems(alignItems),
    className,
  );

  return <div className={_CLASSES}>{children}</div>;
};
