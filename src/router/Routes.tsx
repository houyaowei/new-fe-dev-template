import * as React from "react";
import { Router, Route, Switch } from "react-router-dom";
import History from "./history";

import Container from "@/main/Container";
import Login from "@/login/Index";
import main from "@/main/Index";

const Routers: React.SFC = () => {
  return (
    <Router history={History}>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />

        <Container>
          <Switch>
            <Route path="/main" component={main} />
          </Switch>
        </Container>
      </Switch>
    </Router>
  );
};

export default Routers;
