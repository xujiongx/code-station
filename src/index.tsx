import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.less";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import _ from "lodash";

const Router = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

ReactDOM.render(<Router />, document.getElementById("app"));
