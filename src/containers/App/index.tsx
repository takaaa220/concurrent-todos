import React, { FC } from "react";
import { TodoPage } from "../Todo";
import { useAppState } from "./states";
import { TopPage } from "../Top";
import { FixedLoader } from "~/components/Loader";
import { Layout } from "~/components/Layout";
import { MarkdownPage } from "../Markdown";

export const App: FC = () => {
  const [{ page }, Provider, isPending] = useAppState();

  return (
    <Provider>
      <Layout>
        {isPending && <FixedLoader />}
        {page.type === "top" && <TopPage />}
        {page.type === "todos" && <TodoPage todosFetcher={page.todosFetcher} />}
        {page.type === "markdown" && <MarkdownPage />}
      </Layout>
    </Provider>
  );
};
