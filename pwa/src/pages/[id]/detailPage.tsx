import * as React from "react";
import _ from "lodash";
import { PageProps } from "gatsby";
import { ObjectDetailTemplate } from "../../templates/objectDetailTemplate/ObjectDetailTemplate";

const DetailPage: React.FC<PageProps> = (props: PageProps) => {
  return <ObjectDetailTemplate objectId={props.params.id} />;
};
export default DetailPage;
