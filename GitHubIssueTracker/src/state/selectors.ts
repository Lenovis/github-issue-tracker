import * as issuesSelectors from './issues/IssuesSelectors';
import * as uiSelectors from './ui/UISelectors';
import * as repoSelectors from './repo/repoSelectors';
import * as messagesSelectors from './messages/MessagesSelectors';

export const selectors = {
  issues: issuesSelectors,
  ui: uiSelectors,
  repo: repoSelectors,
  messages: messagesSelectors,
};
