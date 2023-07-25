import * as React from "react";
import { PageProps } from "gatsby";
import { DetailPageTemplate } from "../../../../templates/detailPageTemplate/DetailPageTemplate";

const DetailPagePage: React.FC<PageProps> = (props: PageProps) => {
  const detailPageSlug = props.params.detailPageSlug;
  const pageSlug = props.params.pageSlug;

  return <DetailPageTemplate {...{ pageSlug, detailPageSlug }} />;
};

export default DetailPagePage;
