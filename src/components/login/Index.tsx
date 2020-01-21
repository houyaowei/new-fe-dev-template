import * as React from "react";
import { NavLink } from "react-router-dom";

export default class Login extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <span>login page</span>
        <NavLink to="/main" activeClassName="header-link-active">
          去主页
        </NavLink>
      </div>
    );
  }
}
