import { RootState } from '../reducers';

export const getRepoOwner = (state: RootState) => state.repo?.repoOwner;

export const getRepoName = (state: RootState) => state.repo?.repoName;
