import * as React from "react";
import Header from "./Header";

export default class Container extends React.Component<any, any> {
  
  render() {
    const { children } = this.props;
    return (
      <div>
        <Header />
        <div className="main-layout">{children}</div>
      </div>
    );
  }
}
