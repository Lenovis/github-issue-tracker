import { RootState } from '../reducers';

export const getRepoIssuesOnSync = (state: RootState) =>
  state.ui.repoIssuesOnSync;
