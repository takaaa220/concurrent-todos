import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./App";
import "./global.css";

const rootElement = document.getElementById("root") as Element;
ReactDOM.createRoot(rootElement).render(<App />);
