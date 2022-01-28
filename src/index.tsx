import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "antd/dist/antd.less";
import "tailwindcss/tailwind.css";

import _ from "lodash";

const Router = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

ReactDOM.render(<Router />, document.getElementById("app"));
