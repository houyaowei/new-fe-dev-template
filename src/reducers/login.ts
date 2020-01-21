import { Map } from "immutable";

import { UserAction } from "@services/actions/login/Index";
import * as types from "@services/types/constant";

const initState = Map({
  logininfo: 0,
  loginStatus: 0,
  loginData: []
});

const login = (state = initState, action: any) => {
  switch (action.types) {
    case types.LOGIN_SAGA:
      state.set("loginStatus", 1);

    default:
      return state;
  }
};

export default login;
