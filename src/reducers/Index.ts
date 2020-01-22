import { combineReducers } from "redux";
import login from "./login";

export interface LoginState {
  loginStatus: boolean;
}

const rootReducer = combineReducers({
  login
});

export default rootReducer;
