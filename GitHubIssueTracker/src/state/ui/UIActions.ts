import { createAction } from '@reduxjs/toolkit';
import { constants } from '../constants';

export const repoIssuesOnSync = createAction<boolean>(
  constants.ui.REPO_ISSUES_ON_SYNC,
);
