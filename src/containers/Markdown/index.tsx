import React, { FC, useState, useTransition, useCallback } from "react";
import styled from "@emotion/styled";
import { useMarkdown } from "~/worker/useMarkdown";
import { Fetcher } from "~/helpers/fetcher";
import { Markdown } from "~/components/Markdown";

export const changePage = () =>
  ({
    page: "markdown",
  } as const);

export const MarkdownPage: FC = () => {
  const [text, setText] = useState("");
  const marked = useMarkdown();
  const [startTransition] = useTransition();
  const [markedFetcher, setMarkedFetcher] = useState<Fetcher<string>>(
    new Fetcher(() => new Promise((resolve) => resolve(""))),
  );

  const handleChange = useCallback(
    (value: string) => {
      setText(value);
      startTransition(() => {
        setMarkedFetcher(
          new Fetcher<string>(() => marked(value)),
        );
      });
    },
    [setText],
  );

  return (
    <section>
      <Heading>This page is markdown editor demo.</Heading>
      <Markdown originalText={text} markedFetcher={markedFetcher} onChange={handleChange} />
    </section>
  );
};

const Heading = styled.h2`
  margin-bottom: 8px;
  font-size: 1.8rem;
`;
