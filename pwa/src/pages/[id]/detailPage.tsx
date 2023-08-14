import * as React from "react";
import _ from "lodash";
import { PageProps } from "gatsby";
import { WOOItemDetailTemplate } from "../../templates/wooItemDetailTemplate/WOOItemDetailTemplate";

const DetailPage: React.FC<PageProps> = (props: PageProps) => {
  return <WOOItemDetailTemplate wooItemId={props.params.id} />;
};
export default DetailPage;
