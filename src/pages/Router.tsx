import React from "react";
import { TodoPage } from "./Todo";
import { RouteContext, RouteProvider, ContextType } from "../contexts/RouteContext";
import { TopPage } from "./Top";
import { FixedLoader } from "../components/Loader";
import { Layout } from "../components/Layout";
import { MarkdownPage } from "./Markdown";

export const Router = () => (
  <RouteProvider>
    <RouteContext.Consumer>
      {({ state, loading }: ContextType) => (
        <Layout>
          {loading && <FixedLoader />}
          {state.page === "top" && <TopPage />}
          {state.page === "todos" && <TodoPage todosFetcher={state.todosFetcher} />}
          {state.page === "markdown" && <MarkdownPage />}
        </Layout>
      )}
    </RouteContext.Consumer>
  </RouteProvider>
);
