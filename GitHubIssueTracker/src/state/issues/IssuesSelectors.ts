import { RootState } from '../reducers';

export const getRepoIssues = (state: RootState) => state.issues?.issues;

export const getRepoOwner = (state: RootState) => state.issues?.repoOwner;
