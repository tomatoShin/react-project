import { createAction, handleActions } from "redux-actions";
import createRequestSaga, { createRequestActionTypes } from "../lib/api/posts";
import * as postsAPI from "../lib/api/posts";
import { takeLatest } from "redux-saga/effects";

const [LIST_POSTS, LIST_POST_SUCCESS, LIST_POSTS_FAILURE] =
  createRequestActionTypes("posts/LIST_POSTS");

export const listPosts = createAction(
  LIST_POSTS,
  ({ tag, username, page }) => ({ tag, username, page })
);

const listPostsSaga = createRequestSaga(LIST_POSTS, postsAPI.listPosts);

export function* postSaga() {
  yield takeLatest(LIST_POSTS, listPostsSaga);
}

const initialState = {
  posts: null,
  error: null,
};

const posts = handleActions(
  {
    [LIST_POST_SUCCESS]: (state, { payload: posts }) => ({
      ...state,
      posts,
    }),
    [LIST_POSTS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState
);

export default posts;