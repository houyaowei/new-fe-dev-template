import { put, call, takeEvery } from "redux-saga/effects";
import * as actionTypes from "@services/types/constant";
import { userLogin } from "@services/api/Index";

function* login(payload: any) {
  try {
    const loginStatus = yield call(userLogin, payload);
    console.log("login saga response");
    yield put({ type: actionTypes.LOGIN_SAGA, loginStatus });
  } catch (err) {
    yield put({ type: actionTypes.ERROR });
  }
}

export default function* loginFlow({ payload }: any) {
  console.log("sagas-> loginFlow");
  console.log("params,username:", payload.name, ",password:", payload.password);
  // yield takeEvery(actionTypes.LOGIN, login, payload);
  const response = yield call(login, payload);
}
