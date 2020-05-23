import React, { useContext } from "react";
import styled from "@emotion/styled";
import { RouteContext } from "../contexts/RouteContext";
import { changePage as toTodo } from "./Todo";

export const changePage = () =>
  ({
    page: "top",
  } as const);

export const TopPage = () => {
  const { changeState } = useContext(RouteContext);

  return (
    <section>
      <Heading>This site has two React Concurrent Mode Demos.</Heading>
      <List>
        <Item onClick={() => changeState(toTodo())}>Todos</Item>
        <Item>Markdown Editor</Item>
      </List>
    </section>
  );
};

const Heading = styled.h2`
  margin-bottom: 8px;
  font-size: 1.8rem;
`;

const List = styled.ul`
  padding: 20px 8px;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  color: green;
  text-decoration: underline;
  cursor: pointer;
  line-height: 2;

  &::before {
    content: "";
    display: inline-block;
    width: 8px;
    height: 8px;
    margin-right: 8px;
    background-color: black;
  }
`;
