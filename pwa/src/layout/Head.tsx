import * as React from "react";
import _ from "lodash";
import "../styling/index.css";
import { Helmet } from "react-helmet";
import { getPageTitle } from "../services/getPageTitle";
import { useGatsbyContext } from "../context/gatsby";

export const Head: React.FC = () => {
  const { gatsbyContext } = useGatsbyContext();

  return (
    <Helmet>
      <title>{`WOO | ${
        getPageTitle(gatsbyContext.pageContext?.breadcrumb.crumbs, gatsbyContext.location) ?? "Error"
      }`}</title>
      <link rel="icon" type="svg" href={process.env.GATSBY_FAVICON_URL} />
    </Helmet>
  );
};
