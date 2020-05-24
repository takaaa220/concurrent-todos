import React, { FC } from "react";
import styled from "@emotion/styled";

export const Footer: FC = () => (
  <Wrapper>
    <a href="https://github.com/takaaa220">GitHub</a>
  </Wrapper>
);

const Wrapper = styled.footer`
  width: 100%;
  padding: 12px 16px;
  border-top: 1px solid lightgray;
  text-align: center;
`;
