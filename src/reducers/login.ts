import { Map } from "immutable";
import IAction from "../services/actions/IAction";
import * as types from "@services/types/constant";

const initState = Map({
  logininfo: 0,
  loginStatus: 0,
  loginData: []
});

export interface State {
  loginStatus: UserState;
}
export type UserState = typeof initState;

const login = (state = initState, action: IAction<any>) => {
  switch (action.type) {
    case types.LOGIN_SAGA:
      console.log("reducer->login");
      return state.set("loginStatus", 1);
    default:
      return state;
  }
};

export default login;
