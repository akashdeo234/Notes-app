import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Context, UserContextFun } from "./Context/Context";

ReactDOM.render(
  <UserContextFun>
    <Context>
      <App />
    </Context>
  </UserContextFun>,

  document.getElementById("root")
);
