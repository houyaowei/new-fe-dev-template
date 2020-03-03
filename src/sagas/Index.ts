import { all, takeEvery, fork } from "redux-saga/effects";
import * as actionTypes from "@services/types/constant";
import loginFlow from "./Login.saga";

export default function* rootSaga() {
  console.log("sagas-> Index");
  yield all([takeEvery(actionTypes.LOGIN, loginFlow)]);
}
