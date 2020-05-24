import React, { FC, useContext } from "react";
import styled from "@emotion/styled";
import { AppContext } from "../../containers/App/states";
import { changePage as toTop } from "../../containers/Top";

export const Header: FC = () => {
  const { changeState } = useContext(AppContext);

  return (
    <Wrapper>
      <Logo onClick={() => changeState(toTop())}>Concurrent Demo</Logo>
      <nav>
        <List>
          <Item>
            <a href="https://github.com/takaaa220">Creator's GitHub</a>
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
