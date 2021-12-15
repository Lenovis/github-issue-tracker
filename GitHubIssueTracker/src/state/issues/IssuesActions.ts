import { createAction } from '@reduxjs/toolkit';
import { Issue, IssueRequest } from '../../types';
import { IssuesState } from '../../utils';
import { constants } from '../constants';

export const getRepoIssues = createAction<IssueRequest>(
  constants.issues.GET_REPO_ISSUES,
);

export const setRepoIssues = createAction<Issue[]>(
  constants.issues.SET_REPO_ISSUES,
);

export const setIssuesState = createAction<IssuesState>(
  constants.issues.SET_ISSUES_STATE,
);
