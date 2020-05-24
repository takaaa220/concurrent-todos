import React, { FC, useState, FormEvent } from "react";
import styled from "@emotion/styled";

import { Fetcher } from "~/helpers/fetcher";
import { Todo } from "~/components/Todos";
import { TodoAPI } from "~/dataSources/todos";
import { Todos } from "~/components/Todos";

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
  const [value, setValue] = useState("");
  const [updateTodoFetcher, setUpdateTodoFetcher] = useState<Fetcher<Todo> | undefined>();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setUpdateTodoFetcher(new Fetcher(() => TodoAPI.write({ title: value })));
  };

  return (
    <Wrapper>
      <Todos todosFetcher={todosFetcher} />
      <form onSubmit={handleSubmit}>
        <input type="todo" value={value} onChange={(e) => setValue(e.target.value)} />
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;
