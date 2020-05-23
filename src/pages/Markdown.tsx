import React, { useContext } from "react";
import styled from "@emotion/styled";

export const changePage = () =>
  ({
    page: "markdown",
  } as const);

export const MarkdownPage = () => {
  return (
    <section>
      <h2>This page is markdown editor demo.</h2>
    </section>
  );
};
