import { RootState } from '../reducers';

export const getRepoIssues = (state: RootState) => state.issues?.issues;

export const getIssuesState = (state: RootState) => state.issues?.issuesState;

export const getIssuesHasPrevPage = (state: RootState) =>
  state.issues?.issuesHasPrevPage;

export const getIssuesHasNextPage = (state: RootState) =>
  state.issues?.issuesHasNextPage;

export const getIssuesCurrentPage = (state: RootState) =>
  state.issues?.currentIssuesPage;
