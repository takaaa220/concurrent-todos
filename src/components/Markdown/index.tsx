import React, { FC, useCallback, ChangeEvent, Suspense } from "react";
import { Fetcher } from "~/helpers/fetcher";
import styled from "@emotion/styled";
import "./markdown.css";

type Props = {
  originalText: string;
  onChange: (text: string) => void;
  markedFetcher: Fetcher<string>;
};

export const Markdown: FC<Props> = ({ markedFetcher, onChange, originalText }) => {
  const markedText = markedFetcher.get();

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      onChange(e.target.value);
    },
    [onChange],
  );

  return (
    <Wrapper>
      <TextArea value={originalText} onChange={handleChange} />
      <Suspense fallback={null}>
        <HTMLArea className="markdown-body" dangerouslySetInnerHTML={{ __html: markedText }} />
      </Suspense>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
`;

const TextArea = styled.textarea`
  width: 49%;
  height: 100%;
  padding: 12px;
  border: none;
  background-color: #1e2126;
  color: #ddd;
  font-size: 1.6rem;
  overflow: scroll;
  line-height: 1.8;
  outline: none;
`;

const HTMLArea = styled.div`
  width: 49%;
  height: 100%;
  padding: 12px 16px;
  overflow: scroll;
  background-color: white;
`;
