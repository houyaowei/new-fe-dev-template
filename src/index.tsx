import * as React from "react";
import * as ReactDOM from "react-dom";
import Routers from "./router/Routes";

let onfunShow = () => {
  alert("parent func");
};

ReactDOM.render(<Routers />, document.getElementById("app"));
