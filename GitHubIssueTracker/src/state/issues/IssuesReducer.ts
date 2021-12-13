import { createReducer } from '@reduxjs/toolkit';
import { Issue } from '../../types';
import { actions } from '../actions';

export type IssuesReduserState = {
  repoOwner: string;
  issues: Issue[];
};

export const INITIAL_STATE: IssuesReduserState = {
  repoOwner: '',
  issues: [],
};

export const issuesReducer = createReducer(INITIAL_STATE, {
  [actions.issues.setRepoIssues.type]: (state, { payload }) => {
    state.issues = payload;
  },

  [actions.issues.setRepoOwner.type]: (state, { payload }) => {
    state.repoOwner = payload;
  },

  [actions.issues.clearRepoOwner.type]: state => {
    state.repoOwner = INITIAL_STATE.repoOwner;
  },
});
