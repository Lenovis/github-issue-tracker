import { CombinedState, combineReducers } from '@reduxjs/toolkit';
import { issuesReducer, IssuesReduserState } from './issues/IssuesReducer';
import { repoReducer, RepoReduserState } from './repo/repoReducer';
import { uiReducer, UIReducerState } from './ui/UIReducers';

export interface RootState {
  issues: IssuesReduserState;
  ui: UIReducerState;
  repo: RepoReduserState;
}

export const rootReducer = combineReducers<CombinedState<RootState>>({
  issues: issuesReducer,
  ui: uiReducer,
  repo: repoReducer,
});
