import { RootState } from '../reducers';

export const getRepoIssues = (state: RootState) => state.issues?.issues;

export const getIssuesState = (state: RootState) => state.issues?.issuesState;
