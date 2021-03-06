import * as React from "react";
import { NavLink } from "react-router-dom";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { State } from "../../reducers/login";
import { userLogin } from "@services/actions/login/Index";

interface IPops {
  // userLogin: (name: string, password: string) => IUserLoginAction;
  userLogin: (payload: any) => void;
}
interface IState {
  name: string;
  password: string;
}
class Login extends React.Component<IPops, IState> {
  constructor(props: IPops) {
    super(props);

    this.state = {
      name: "",
      password: ""
    };
  }
  onUsernameChange = (e: any) => {
    this.setState({ name: e.target.value });
  };

  onPasswordChange = (e: any) => {
    this.setState({ password: e.target.value });
  };
  login = () => {
    console.log("component -> login");
    this.props.userLogin({
      name: this.state.name,
      password: this.state.password
    });
  };
  render() {
    return (
      <div>
        <span>login page</span>
        <form>
          <input
            type="input"
            name="name"
            onChange={this.onUsernameChange}
            placeholder="用户名"
          />
          <input
            type="password"
            name="password"
            onChange={this.onPasswordChange}
            placeholder="密码"
          />
          <button type="button" onClick={this.login}>
            登陆
          </button>
        </form>
        <NavLink to="/main" activeClassName="header-link-active">
          去主页
        </NavLink>
      </div>
    );
  }
}
const mapStateToProps = (state: State) => ({
  loginStatus: state.loginStatus
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  userLogin: (payload: any) => dispatch(userLogin(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
