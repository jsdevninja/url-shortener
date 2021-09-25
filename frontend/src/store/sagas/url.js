import { put, call, takeLatest, all } from "redux-saga/effects";
import api from "src/utils/api";
import actions from "../actions";
import { CREATE_URL_REQUEST, GET_URL_REQUEST } from "../actions/types";

function* createUrl(action) {
  try {
    const { data } = yield call(api.post, "/urls", { longUrl: action.payload });
    yield put(actions.urlAction.createUrlSuccess(data));
  } catch (error) {
    yield put(actions.urlAction.createUrlFail(error));
  }
}

function* getUrl(action) {
  try {
    const { data } = yield call(api.get, `/urls/${action.payload}`);
    yield put(actions.urlAction.getUrlSuccess(data));
  } catch (error) {
    yield put(actions.urlAction.getUrlFail(error));
  }
}
export default function* urlSaga() {
  yield all([takeLatest(CREATE_URL_REQUEST, createUrl)]);
  yield all([takeLatest(GET_URL_REQUEST, getUrl)]);
}
