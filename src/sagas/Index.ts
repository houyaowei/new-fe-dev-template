import { all, takeEvery, fork } from "redux-saga/effects";

import { loginFlow } from "./Login.saga";

export default function* rootSaga() {
  // yield all([
  //   takeEvery(types.LOGIN_SAGA, () => {
  //     console.log("login saga");
  //   })
  // ]);
  yield all([loginFlow]);
}
