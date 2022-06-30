import React from "react";
import ReactDOM from "react-dom";
import { Reset } from "styled-reset";
import App from "./App";
import GlobalStyle from "./GlobalStyle";

ReactDOM.render(
  <React.StrictMode>
    <Reset />
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
