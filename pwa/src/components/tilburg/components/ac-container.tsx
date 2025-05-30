import clsx from "clsx";
import React, { HTMLAttributes, ReactNode } from "react";

interface AcContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  compact?: boolean;
  spacing?: number | string;
  margin?: number | string;
  className?: string;
}

export const AcContainer: React.FC<AcContainerProps> = ({
  children,
  compact,
  spacing,
  margin,
  className,
  ...restProps
}) => {
  const _CLASSES = clsx(
    "container",
    compact && "container--compact",
    spacing && `container--spacing-${spacing}`,
    margin && `container--margin-${margin}`,
    className,
  );

  return (
    <div className={_CLASSES} {...restProps}>
      {children}
    </div>
  );
};
