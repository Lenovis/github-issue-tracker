import * as issuesActions from './issues/IssuesActions';
import * as uiActions from './ui/UIActions';
import * as repoActions from './repo/repoActions';
import * as messagesActions from './messages/MessagesActions';

export const actions = {
  issues: issuesActions,
  ui: uiActions,
  repo: repoActions,
  messages: messagesActions,
};
