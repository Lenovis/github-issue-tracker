import { createReducer } from '@reduxjs/toolkit';
import { Issue } from '../../types';
import { IssuesState } from '../../utils';
import { actions } from '../actions';

export type IssuesReduserState = {
  issues: Issue[];
  issuesState: IssuesState;
  issuesHasNextPage: boolean;
  issuesHasPrevPage: boolean;
  currentIssuesPage: number;
  exist: boolean;
};

export const INITIAL_STATE: IssuesReduserState = {
  issues: [],
  issuesState: IssuesState.open,
  issuesHasNextPage: false,
  issuesHasPrevPage: false,
  currentIssuesPage: 1,
  exist: false,
};

export const issuesReducer = createReducer(INITIAL_STATE, {
  [actions.issues.setRepoIssues.type]: (state, { payload }) => {
    state.issues = payload;
  },

  [actions.issues.clearRepoIssues.type]: () => INITIAL_STATE,

  [actions.issues.setIssuesState.type]: (state, { payload }) => {
    state.issuesState = payload;
  },

  [actions.issues.setIssuesHasNextPage.type]: (state, { payload }) => {
    state.issuesHasNextPage = payload;
  },

  [actions.issues.setIssuesHasPrevPage.type]: (state, { payload }) => {
    state.issuesHasPrevPage = payload;
  },

  [actions.issues.clearIssuesHasNextandPrevPages.type]: state => {
    state.issuesHasNextPage = INITIAL_STATE.issuesHasNextPage;
    state.issuesHasPrevPage = INITIAL_STATE.issuesHasPrevPage;
  },

  [actions.issues.setCurrentIssuesPage.type]: (state, { payload }) => {
    state.currentIssuesPage = payload;
  },

  [actions.issues.resetCurrentIssuesPage.type]: state => {
    state.currentIssuesPage = INITIAL_STATE.currentIssuesPage;
  },

  [actions.issues.setIssuesExist.type]: state => {
    state.exist = true;
  },
});
