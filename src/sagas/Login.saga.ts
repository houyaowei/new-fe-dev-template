import { put, call, takeEvery } from "redux-saga/effects";
import * as actionTypes from "@services/types/constant";
import { userLogin } from "@services/api/Index";

export function* login(payload: object) {
  try {
    const loginStatus = yield call(userLogin);
    yield put({ type: actionTypes.LOGIN_SAGA, loginStatus });
  } catch (err) {
    yield put({ type: actionTypes.ERROR });
  }
}

export function* loginFlow(payload: object) {
  yield takeEvery(actionTypes.LOGIN, login);
}
