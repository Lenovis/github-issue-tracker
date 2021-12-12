import { RootState } from '../reducers';

export const getRepoIssues = (state: RootState) => state.issues?.issues;
