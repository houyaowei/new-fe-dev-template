import * as React from "react";
import { Router, Route, Switch } from "react-router-dom";
import History from "./history";

import Header from "@/Header";
import Login from "@/login/Index";
import main from "@/main/Index";

const Routers: React.SFC = () => {
  return (
    <Router history={History}>
      <Header />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route path="/main" component={main} />
      </Switch>
    </Router>
  );
};

export default Routers;
