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

    const { owner, repo, page = 1, state } = payload;

    const issueState = yield* select(selectors.issues.getIssuesState) ||
      state ||
      IssuesState.open;

    if (repo && owner) {
      const { data, status, headers } = yield* call(
        Api.getRepoIssues,
        owner,
        repo,
        page,
        issueState,
      );

      if (status) {
        yield* put(actions.issues.setIssuesExist());

        yield* put(actions.issues.setRepoIssues(data));

        yield* put(actions.issues.setCurrentIssuesPage(page));

        if (headers?.link) {
          yield* put(
            actions.issues.setIssuesHasNextPage(
              headers.link.includes('rel="next"'),
            ),
          );

          yield* put(
            actions.issues.setIssuesHasPrevPage(
              headers.link.includes('rel="prev"'),
            ),
          );
        }
      }
    } else {
      yield* put(actions.messages.setInfoMessage('Someting went wrong'));
      //TODO: global error
    }
  } catch (e) {
    console.log(e);
    yield* put(
      actions.messages.setInfoMessage('This repository does not exists'),
    );
  } finally {
    yield* put(actions.ui.repoIssuesOnSync(false));
  }
}

function* refetchRepoIssues() {
  try {
    yield* put(actions.ui.repoIssuesOnSync(true));
    const repo = yield* select(selectors.repo.getRepoName);
    const owner = yield* select(selectors.repo.getRepoOwner);
    const issueState = yield* select(selectors.issues.getIssuesState);
    if (repo && owner) {
      yield* call(fetchRepoIssues, {
        payload: { repo, owner, state: issueState, page: 1 },
      });
      yield* put(actions.issues.resetCurrentIssuesPage());
    } else {
      //TODO: global error
    }
  } catch (e) {
    yield* put(actions.messages.setInfoMessage('Someting went wrong'));
  } finally {
    yield* put(actions.ui.repoIssuesOnSync(false));
  }
}

export function* issuesSagas() {
  yield* takeLatest(actions.issues.getRepoIssues.type, fetchRepoIssues);
  yield* takeLatest(actions.issues.setIssuesState.type, refetchRepoIssues);
}
