import { LOGIN, QUERY, LOGIN_SAGA } from "@services/types/constant";

export interface IUserLoginAction {
  name: string;
  password: string;
  type: LOGIN;
}
export interface IUserQueryAction {
  type: QUERY;
}
export type UserAction = IUserLoginAction | IUserQueryAction;

export const userLogin = (
  name: string,
  password: string
): IUserLoginAction => ({
  name,
  password,
  type: LOGIN
});
