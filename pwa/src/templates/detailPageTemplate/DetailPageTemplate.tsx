import * as React from "react";
import { Container } from "@conduction/components";
import { useGitHub } from "../../hooks/resources/gitHub";
import { ParsedHTML } from "../../components/ParsedHTML/ParsedHTML";
import { useGitHubDirectories } from "../../hooks/useGitHubDirectories";

interface DetailPageTemplateProps {
  pageSlug: string;
  detailPageSlug: string;
}

export const DetailPageTemplate: React.FC<DetailPageTemplateProps> = ({ pageSlug, detailPageSlug }) => {
  const { getDetailMdLocation } = useGitHubDirectories();

  const location = getDetailMdLocation(pageSlug, detailPageSlug);

  const getContent = useGitHub().getContent(location);

  return (
    <Container>
      <ParsedHTML contentQuery={getContent} {...{ location }} />
    </Container>
  );
};
