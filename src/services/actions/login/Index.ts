import { LOGIN, QUERY, LOGIN_SAGA } from "@services/types/constant";

interface IUserLoginAction {
  type: LOGIN;
}
interface IUserQueryAction {
  type: QUERY;
}
export type UserAction = IUserLoginAction | IUserQueryAction;

export const userLogin = (): IUserLoginAction => ({
  type: LOGIN
});
