import { createReducer } from '@reduxjs/toolkit';
import { Issue } from '../../types';
import { actions } from '../actions';

export type IssuesReduserState = {
  issues: Issue[];
};

export const INITIAL_STATE: IssuesReduserState = {
  issues: [],
};

export const issuesReducer = createReducer(INITIAL_STATE, {
  [actions.issues.setRepoIssues.type]: (state, { payload }) => {
    state.issues = payload;
  },
});
