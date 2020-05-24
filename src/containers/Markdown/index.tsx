import React, { FC, useState } from "react";
import styled from "@emotion/styled";
import { useMarkdown } from "~/worker/useWorker";

export const changePage = () =>
  ({
    page: "markdown",
  } as const);

export const MarkdownPage: FC = () => {
  const { marked, markedText } = useMarkdown();

  return (
    <section>
      <Heading>This page is markdown editor demo.</Heading>
      <textarea onChange={(e) => marked(e.target.value)} />
      <p>{markedText}</p>
    </section>
  );
};

const Heading = styled.h2`
  margin-bottom: 8px;
  font-size: 1.8rem;
`;
