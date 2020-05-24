import React, { FC } from "react";
import styled from "@emotion/styled";

import { Fetcher } from "~/helpers/fetcher";
import { Todo } from "~/components/Todos";
import { Todos } from "~/components/Todos";
import { AddTodo } from "~/components/Todos/Add";
import { useAppActions, TodoAPI } from "../App/states";

export const ErrorPage = <div>Todoの取得に失敗しました</div>;
export const changePage = () =>
  ({
    page: "todos",
    todosFetcher: new Fetcher<Todo[]>(TodoAPI.fetchAll),
  } as const);

type Props = {
  todosFetcher: Fetcher<Todo[]>;
};

export const TodoPage: FC<Props> = ({ todosFetcher }) => {
  const { updateTodos } = useAppActions();

  const handleSubmit = (title: string) => {
    updateTodos({ title });
  };

  return (
    <Wrapper>
      <Todos todosFetcher={todosFetcher} />
      <AddTodo onSubmit={handleSubmit} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;
