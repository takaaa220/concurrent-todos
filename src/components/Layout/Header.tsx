import React, { FC } from "react";
import styled from "@emotion/styled";
import { useAppActions } from "~/containers/App/states";

export const Header: FC = () => {
  const { goToTop } = useAppActions();

  return (
    <Wrapper>
      <Logo onClick={goToTop}>Concurrent Demo</Logo>
      <nav>
        <List>
          <Item>
            <a href="https://github.com/takaaa220">GitHub</a>
          </Item>
        </List>
      </nav>
    </Wrapper>
  );
};

const HEADER_HEIGHT = "50px";

const Wrapper = styled.header`
  width: 100%;
  height: ${HEADER_HEIGHT};
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  line-height: ${HEADER_HEIGHT};
  border-bottom: 1px solid lightgray;
`;

const Logo = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  padding: 0 12px;
  color: green;
`;
