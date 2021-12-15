import * as issuesSelectors from './issues/IssuesSelectors';
import * as uiSelectors from './ui/UISelectors';
import * as repoSelectors from './repo/repoSelectors';

export const selectors = {
  issues: issuesSelectors,
  ui: uiSelectors,
  repo: repoSelectors,
};
