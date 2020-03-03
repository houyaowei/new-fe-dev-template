import { LOGIN, QUERY, LOGIN_SAGA } from "@services/types/constant";
import IAction from "../IAction";

export const userLogin = (payload: any): IAction<any> => {
  console.log("user login action,name is:", payload.name);
  return {
    type: LOGIN,
    payload
  };
};
