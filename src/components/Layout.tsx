import React, { FC } from "react";
import { Header } from "./Header";
import styled from "@emotion/styled";
import { Footer } from "./Footer";

export const Layout: FC = ({ children }) => (
  <>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </>
);

const Main = styled.main`
  width: 100%;
  min-height: calc(100vh - 100px);
  padding: 24px 16px;
`;
