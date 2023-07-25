import _ from "lodash";

export const getPageTitle = (crumbs: any, location: any) => {
  const _pathname = location.pathname.replace(/\/$/, "");

  const finalSlashIndex = _pathname.lastIndexOf("/");
  const pathnameTitle = _pathname.substring(finalSlashIndex + 1);
  const headTitle = pathnameTitle.replace("_", " ").replace("-", " ");

  if (_.last(crumbs as any[]).crumbLabel.includes("[")) return headTitle; // gatsby adds "[pageSlug]" to dynamic page titles, we're checking on the "["

  return _.capitalize(_.last(crumbs as any[]).crumbLabel);
};
