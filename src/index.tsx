import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Routers from "./router/Routes";
import store from "./store";

let onfunShow = () => {
  alert("parent func");
};

ReactDOM.render(
  <Provider store={store}>
    <Routers />
  </Provider>,
  document.getElementById("app")
);
