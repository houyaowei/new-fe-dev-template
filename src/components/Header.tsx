import * as React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

class Home extends React.Component<any, any> {
  render() {
    return (
      <div className="header">
        <div className="menu">
          <NavLink to="/login" activeClassName="header-link-active">
            login
          </NavLink>
        </div>
        <div className="menu">
          <NavLink to="/main" activeClassName="header-link-active">
            main
          </NavLink>
        </div>
      </div>
    );
  }
}

export default Home;
