import * as React from "react";
import { TLandingDisplayLayout } from "../../../context/displays";
import { CardsResultsTemplate } from "../cardsResultsTemplate/CardsResultsTemplate";
import { TableResultsTemplate } from "../tableResultsTemplate/TableResultsTemplate";

interface LandingDisplayTemplateProps {
  type: TLandingDisplayLayout;
}

export const LandingDisplayTemplate: React.FC<LandingDisplayTemplateProps> = ({ type }) => {
  switch (type) {
    case "cards":
      return <CardsResultsTemplate />;

    case "table":
      return <TableResultsTemplate />;
  }
};
