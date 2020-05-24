import React, { FC } from "react";
import { Fetcher } from "../../helpers/fetcher";
import { Todo } from "../../dataSources/todos";
import styled from "@emotion/styled";

type Props = {
  todosFetcher: Fetcher<Todo[]>;
};

export const Todos: FC<Props> = ({ todosFetcher }) => {
  const todos = todosFetcher.get();

  return (
    <List>
      {todos.map((todo) => (
        <Item key={todo.id}>{todo.title}</Item>
      ))}
    </List>
  );
};

const List = styled.ul`
  padding: 0 8px;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
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
