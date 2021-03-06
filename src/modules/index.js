import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import auth, { authSaga } from "./auth";
import loading from "./loading";
import write, { writeSaga } from "./write";
import post, { postSaga } from './post';

const rootReducer = combineReducers({
  auth,
  loading,
  write,
  post,
});

export function* rootSaga() {
  yield all([authSaga(), writeSaga(), postSaga()]);
}

export default rootReducer;
