import React, { FC, Suspense, useState } from "react";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { PageLoader } from "./components/Loader";
import { Router } from "./pages/Router";

export const App: FC = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<PageLoader />}>
        <Router />
      </Suspense>
    </ErrorBoundary>
  );
};
