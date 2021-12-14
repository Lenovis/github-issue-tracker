import { CombinedState, combineReducers } from '@reduxjs/toolkit';
import { issuesReducer, IssuesReduserState } from './issues/IssuesReducer';
import { uiReducer, UIReducerState } from './ui/UIReducers';

export interface RootState {
  issues: IssuesReduserState;
  ui: UIReducerState;
}

export const rootReducer = combineReducers<CombinedState<RootState>>({
  issues: issuesReducer,
  ui: uiReducer,
});
