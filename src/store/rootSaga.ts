import { all } from 'redux-saga/effects';
import usersSaga from './usersSaga';
import postsSaga from './postsSaga';


function* rootSaga() {
  yield all([
    usersSaga(),
    postsSaga()
  ]);
}

export default rootSaga;