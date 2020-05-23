import React, { FC, useContext } from "react";
import styled from "@emotion/styled";
import { RouteContext } from "../contexts/RouteContext";
import { changePage as toTodo } from "../pages/Todo";
import { changePage as toTop } from "../pages/Top";
import { changePage as toMarkdown } from "../pages/Markdown";

export const Header: FC = () => {
  const { changeState } = useContext(RouteContext);

  return (
    <Wrapper>
      <Logo>Concurrent Demo</Logo>
      <nav>
        <List>
          <Item onClick={() => changeState(toTop())}>Top</Item>
          <Item onClick={() => changeState(toTodo())}>Todo</Item>
          <Item onClick={() => changeState(toMarkdown())}>Markdown</Item>
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
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  padding: 0 12px;
  cursor: pointer;
  color: green;
  text-decoration: underline;
`;
