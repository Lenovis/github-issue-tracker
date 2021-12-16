import { CombinedState, combineReducers } from '@reduxjs/toolkit';
import { issuesReducer, IssuesReduserState } from './issues/IssuesReducer';
import {
  messagesReducer,
  MessagesReducerState,
} from './messages/MessagesReducer';
import { repoReducer, RepoReduserState } from './repo/repoReducer';
import { uiReducer, UIReducerState } from './ui/UIReducers';

export interface RootState {
  issues: IssuesReduserState;
  ui: UIReducerState;
  repo: RepoReduserState;
  messages: MessagesReducerState;
}

export const rootReducer = combineReducers<CombinedState<RootState>>({
  issues: issuesReducer,
  ui: uiReducer,
  repo: repoReducer,
  messages: messagesReducer,
});
