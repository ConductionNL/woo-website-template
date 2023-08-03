import * as React from "react";
import _ from "lodash";
import { PageProps } from "gatsby";
import { RequestDetailTemplate } from "../../templates/requestDetailTemplate/RequestDetailTemplate";

const DetailPage: React.FC<PageProps> = (props: PageProps) => {
  return <RequestDetailTemplate requestId={props.params.id} />;
};
export default DetailPage;
