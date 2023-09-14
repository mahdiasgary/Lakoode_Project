import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import ContextProvider from "./Lakoode/contextProvider/ContextProvider";
import { movieCoreApi } from "./Lakoode/redux/services/movieDatabase";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApiProvider api={movieCoreApi}>
    <ContextProvider>
      <App />
    </ContextProvider>
  </ApiProvider>
);
