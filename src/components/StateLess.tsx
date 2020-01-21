import * as React from "react";

interface IProps {
  name: string;
  count: number;
}

const Confirm: React.SFC<IProps> = props => {
  return (
    <span>
      {props.name}, count is {props.count}
      <button>加法器</button>
    </span>
  );
};

export default Confirm;
