import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { App } from "./containers/App";
import { PageLoader } from "./components/Loader";
import { ErrorBoundary } from "./components/ErrorBoundary";
import "./global.css";

const BootStrap = () => (
  <ErrorBoundary>
    <Suspense fallback={<PageLoader />}>
      <App />
    </Suspense>
  </ErrorBoundary>
);

const rootElement = document.getElementById("root") as Element;
ReactDOM.createRoot(rootElement).render(<BootStrap />);
