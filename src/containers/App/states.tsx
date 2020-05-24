import { Fetcher } from "../../helpers/fetcher";
import { Todo } from "../../dataSources/todos";
import React, { createContext, FC, useState, useTransition } from "react";

export type AppState =
  | {
      page: "top";
    }
  | {
      page: "todos";
      todosFetcher: Fetcher<Todo[]>;
    }
  | {
      page: "markdown";
    };

export type ContextType = {
  loading: boolean;
  state: AppState;
  changeState: (page: AppState) => void;
};

export const AppContext = createContext<ContextType>({
  loading: false,
  state: {
    page: "top",
  },
  changeState: () => {
    throw new Error("hello world");
  },
});

export const AppProvider: FC = ({ children }) => {
  const [state, changeState] = useState<AppState>({ page: "top" });
  const [startTransition, loading] = useTransition({
    timeoutMs: 10000,
  });

  const handleChangeState = (state: AppState) => {
    startTransition(() => {
      changeState(state);
    });
  };

  return (
    <AppContext.Provider value={{ loading, state, changeState: handleChangeState }}>
      {children}
    </AppContext.Provider>
  );
};
