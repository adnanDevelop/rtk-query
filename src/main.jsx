import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { post } from "./redux/api.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApiProvider api={post}>
      <App />
    </ApiProvider>
  </React.StrictMode>
);
