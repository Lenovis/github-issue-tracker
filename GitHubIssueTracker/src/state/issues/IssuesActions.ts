import { createAction } from '@reduxjs/toolkit';
import { Issue, IssueRequest } from '../../types';
import { constants } from '../constants';

export const getRepoIssues = createAction<IssueRequest>(
  constants.issues.GET_REPO_ISSUES,
);

export const setRepoIssues = createAction<Issue[]>(
  constants.issues.SET_REPO_ISSUES,
);

export const setRepoOwner = createAction<string>(
  constants.issues.SET_REPO_OWNER,
);

export const clearRepoOwner = createAction(constants.issues.CLEAR_REPO_OWNER);
