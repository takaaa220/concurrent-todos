import React, { FC } from "react";
import { Fetcher } from "../helpers/fetcher";
import { Todo } from "../dataSources/todos";

type Props = {
  todosFetcher: Fetcher<Todo[]>;
};

export const Todos: FC<Props> = ({ todosFetcher }) => {
  const todos = todosFetcher.get();

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};
