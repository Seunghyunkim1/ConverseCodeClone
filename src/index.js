import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";

import "./Styles/Reset.scss";
import "./Styles/Common.scss";

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById("root")
);
