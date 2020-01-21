import * as React from "react";
import "./hello.css";

interface IProps {
  compile: string;
  framework: string;
  description?: string;
  onFunc: () => void;
}

// funtional component
// export const Hello = (props: IProps) => {
//   return <h3>this project is developed by {props.compile} and {props.framework}</h3>
// }

//TODO
interface IState {
  open: boolean;
}
export default class Hello extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      open: false
    };
  }
  public static defaultProps = {
    decription: "default description"
  };

  private show = () => {
    alert("show compile props :" + this.props.compile);
  };

  private showParent = () => {
    this.props.onFunc();
  };

  private changeState = () => {
    this.setState({
      open: !this.state.open
    });
  };
  public static getDerivedStateFromProps(props: IProps, state: IState) {
    console.log("getDerivedStateFromProps open is:", state.open);
    return state.open;
  }
  public getSnapshotBeforeUpdate(prevProps: IProps, prevState: IState) {
    console.log("before update, open is:", prevState.open);
    return prevState.open;
  }
  public componentDidUpdate(
    prevProps: IProps,
    prevState: IState,
    snapshot: boolean
  ) {
    console.log("did update, open is:", prevState.open);
  }
  render() {
    return (
      <div>
        <span className="test">
          this project is developed by {this.props.compile} and{" "}
          {this.props.framework}, parent desciption is {this.props.description},
        </span>
        {this.state.open ? <span>state equals true</span> : ""}
        <button onClick={this.show}>click</button>
        <button onClick={this.showParent}>function from parent</button>
        <button onClick={this.changeState}>change state</button>
      </div>
    );
  }
}
