import React, { useContext } from "react";
import styled from "@emotion/styled";

export const changePage = () =>
  ({
    page: "markdown",
  } as const);

export const MarkdownPage = () => {
  return (
    <section>
      <Heading>This page is markdown editor demo.</Heading>
    </section>
  );
};

const Heading = styled.h2`
  margin-bottom: 8px;
  font-size: 1.8rem;
`;
