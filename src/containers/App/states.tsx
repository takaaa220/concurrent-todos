import { Fetcher } from "../../helpers/fetcher";
import { Todo } from "~/components/Todos";
import { generateStateManagenentTools } from "~/helpers/states";
import { todoApi } from "~/dataSources/todos";
import { Storage } from "~/dataSources/storage";
import { TransitionStartFunction } from "react";

export const TodoAPI = new todoApi(new Storage("todos"));

export type AppState = {
  worker: Worker;
  page: AppPage;
};

export type AppPage =
  | {
      type: "top";
    }
  | {
      type: "todos";
      todosFetcher: Fetcher<Todo[]>;
    }
  | {
      type: "markdown";
    };

const getInitialState = (): AppState => {
  return {
    worker: new Worker("../../worker/index.ts"),
    page: {
      type: "top",
    },
  };
};

export const {
  useManagedState: useAppState,
  useActions: useAppActions,
} = generateStateManagenentTools({
  getInitialState,
  getActions: (setState) => ({
    goToTop: (): void => {
      setState((state) => ({
        ...state,
        page: {
          type: "top",
        },
      }));
    },
    goToMarkdown: (): void => {
      setState((state) => ({
        ...state,
        page: {
          type: "markdown",
        },
      }));
    },
    goToTodos: (): void => {
      const todosFetcher = new Fetcher<Todo[]>(TodoAPI.fetchAll);

      setState(
        (state) => ({
          ...state,
          page: {
            type: "todos",
            todosFetcher,
          },
        }),
        true,
      );
    },
    updateTodos: async (title: string, startTransition: TransitionStartFunction): Promise<void> => {
      const todosFetcher = new Fetcher<Todo[]>(async () => {
        await TodoAPI.write({ title });

        return TodoAPI.fetchAll();
      });

      startTransition(() => {
        setState((state) => ({
          ...state,
          page: {
            ...state.page,
            todosFetcher,
          },
        }));
      });
    },
  }),
});
