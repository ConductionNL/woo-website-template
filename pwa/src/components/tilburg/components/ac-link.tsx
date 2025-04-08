import * as React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

interface AcLinkProps extends React.HTMLProps<HTMLAnchorElement> {
  href: string;
  type?: "link" | "button";
  children: React.ReactNode;
}

export const AcLink: React.FC<AcLinkProps> = ({ href, type = "link", children, ...restProps }) => {
  const _CLASSES: string = clsx(
    type === "link" && "utrecht-link utrecht-link--html-a",
    type === "button" && "utrecht-button",
  );

  return (
    <Link to={href} className={_CLASSES} {...restProps}>
      {children}
    </Link>
  );
};
