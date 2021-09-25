import { all, fork } from "redux-saga/effects";

import url from "./url";

export default function* rootSaga() {
  yield all([fork(url)]);
}
