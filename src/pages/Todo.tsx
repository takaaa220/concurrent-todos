import React, { FC } from "react";
import styled from "@emotion/styled";

import { Fetcher } from "../helpers/fetcher";
import { Todo, TodoAPI } from "../dataSources/todos";
import { Todos } from "../components/Todos";

export const ErrorPage = <div>Todoの取得に失敗しました</div>;
export const changePage = () => ({
  page: "todos",
  todosFetcher: new Fetcher<Todo[]>(TodoAPI.fetchAll);
} as const);

type Props = {
  todosFetcher: Fetcher<Todo[]>;
};

export const TodoPage: FC<Props> = ({ todosFetcher }) => {
  return (
    <Wrapper>
      <Todos todosFetcher={todosFetcher} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;
