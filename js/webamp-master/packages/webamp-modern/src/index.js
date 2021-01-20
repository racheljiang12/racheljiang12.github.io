import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import Debugger from "./debugger";
import { create } from "./store";

const store = create();

ReactDOM.render(
  <Provider store={store}>
    {window.location.pathname === "/debugger" ? <Debugger /> : <App />}
  </Provider>,
  document.getElementById("root")
);
