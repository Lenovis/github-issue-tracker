import { createReducer } from '@reduxjs/toolkit';
import { Issue } from '../../types';
import { IssuesState } from '../../utils';
import { actions } from '../actions';

export type IssuesReduserState = {
  issues: Issue[];
  issuesState: IssuesState;
};

export const INITIAL_STATE: IssuesReduserState = {
  issues: [],
  issuesState: IssuesState.open,
};

export const issuesReducer = createReducer(INITIAL_STATE, {
  [actions.issues.setRepoIssues.type]: (state, { payload }) => {
    state.issues = payload;
  },

  [actions.issues.setIssuesState.type]: (state, { payload }) => {
    state.issuesState = payload;
  },
});
