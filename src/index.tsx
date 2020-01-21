import * as React from "react";
import * as ReactDOM from "react-dom";

import Hello from "@/Hello";
import StateLess from "@/StateLess";

let onfunShow = () => {
  alert("parent func");
};

class Index extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
  }

  render() {
    return (
      <div>
        <Hello
          compile="Typescript"
          framework="Reactjs@16.12"
          onFunc={onfunShow}
        />
        <StateLess name="stateless component" count={0} />
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("app"));
