import { call, put, takeLatest } from 'typed-redux-saga';
import Api from '../../api';
import { IssueRequest } from '../../types';
import { actions } from '../actions';

function* fetchRepoIssues({
  payload,
}: {
  payload: IssueRequest;
  type: typeof actions.issues.getRepoIssues.type;
}) {
  try {
    yield* put(actions.ui.repoIssuesOnSync(true));

    const { owner, repo } = payload;

    const { data, status } = yield* call(Api.getRepoIssues, owner, repo);

    if (status) {
      yield* put(actions.issues.setRepoIssues(data));
    }
  } catch (e) {
    console.error(e);
  } finally {
    yield* put(actions.ui.repoIssuesOnSync(false));
  }
}

export function* issuesSagas() {
  yield* takeLatest(actions.issues.getRepoIssues.type, fetchRepoIssues);
}
