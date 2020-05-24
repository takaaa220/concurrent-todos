import React from "react";
import { TodoPage } from "../Todo";
import { AppContext, AppProvider, ContextType } from "./states";
import { TopPage } from "../Top";
import { FixedLoader } from "../../components/Loader";
import { Layout } from "../..//components/Layout";
import { MarkdownPage } from "../Markdown";

export const App = () => (
  <AppProvider>
    <AppContext.Consumer>
      {({ state, loading }: ContextType) => (
        <Layout>
          {loading && <FixedLoader />}
          {state.page === "top" && <TopPage />}
          {state.page === "todos" && <TodoPage todosFetcher={state.todosFetcher} />}
          {state.page === "markdown" && <MarkdownPage />}
        </Layout>
      )}
    </AppContext.Consumer>
  </AppProvider>
);
