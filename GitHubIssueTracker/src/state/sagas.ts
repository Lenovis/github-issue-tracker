import { fork } from 'redux-saga/effects';
import { issuesSagas } from './issues/IssuesSaga';

export function* rootSaga() {
  yield fork(issuesSagas);
}
