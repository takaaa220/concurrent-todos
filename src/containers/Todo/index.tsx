import React, { FC, useTransition } from "react";
import styled from "@emotion/styled";

import { Fetcher } from "~/helpers/fetcher";
import { Todo } from "~/components/Todos";
import { Todos } from "~/components/Todos";
import { AddTodo } from "~/components/Todos/Add";
import { useAppActions } from "../App/states";

type Props = {
  todosFetcher: Fetcher<Todo[]>;
};

export const TodoPage: FC<Props> = ({ todosFetcher }) => {
  const { updateTodos } = useAppActions();
  const [startTransition, isAdding] = useTransition({
    timeoutMs: 10000,
  });

  const handleSubmit = (title: string) => {
    updateTodos(title, startTransition);
  };

  return (
    <Wrapper>
      <Todos todosFetcher={todosFetcher} />
      <AddTodo onSubmit={handleSubmit} adding={isAdding} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;
