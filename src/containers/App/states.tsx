import { Fetcher } from "../../helpers/fetcher";
import { Todo } from "~/components/Todos";
import { generateStateManagenentTools } from "~/helpers/states";
import { TodoAPI } from "~/dataSources/todos";

export type AppState = {
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
  }),
});
