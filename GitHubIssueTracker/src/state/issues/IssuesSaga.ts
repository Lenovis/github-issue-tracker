import { call, put, select, takeLatest } from 'typed-redux-saga';
import Api from '../../api';
import { IssueRequest } from '../../types';
import { IssuesState } from '../../utils';
import { actions } from '../actions';
import { selectors } from '../selectors';

function* fetchRepoIssues({
  payload,
}: {
  payload: IssueRequest;
  type: string;
}) {
  try {
    yield* put(actions.ui.repoIssuesOnSync(true));

    const { owner, repo, page = 1, state = IssuesState.open } = payload;

    if (repo && owner) {
      const { data, status } = yield* call(
        Api.getRepoIssues,
        owner,
        repo,
        page,
        state,
      );

      if (status) {
        yield* put(actions.issues.setRepoIssues(data));
      }
    } else {
      //TODO: global error
    }
  } catch (e) {
    console.error(e);
  } finally {
    yield* put(actions.ui.repoIssuesOnSync(false));
  }
}

function* refetchRepoIssues({
  payload = 1,
}: {
  payload?: number;
  type: string;
}) {
  try {
    yield* put(actions.ui.repoIssuesOnSync(true));
    const repo = yield* select(selectors.repo.getRepoName);
    const owner = yield* select(selectors.repo.getRepoOwner);
    const issueState = yield* select(selectors.issues.getIssuesState);
    if (repo && owner) {
      yield* call(fetchRepoIssues, {
        payload: { repo, owner, state: issueState, page: payload },
      });
    } else {
      //TODO: global error
    }
  } catch (e) {
    console.error(e);
  } finally {
    yield* put(actions.ui.repoIssuesOnSync(false));
  }
}

export function* issuesSagas() {
  yield* takeLatest(actions.issues.getRepoIssues.type, fetchRepoIssues);
  yield* takeLatest(actions.issues.setIssuesState.type, refetchRepoIssues);
}
