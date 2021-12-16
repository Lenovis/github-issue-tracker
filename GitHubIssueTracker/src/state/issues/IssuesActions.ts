import { createAction } from '@reduxjs/toolkit';
import { Issue, IssueRequest } from '../../types';
import { IssuesState } from '../../utils';
import { constants } from '../constants';

export const getRepoIssues = createAction<IssueRequest>(
  constants.issues.GET_REPO_ISSUES,
);

export const clearRepoIssues = createAction(constants.issues.CLEAR_ISSUES);

export const setRepoIssues = createAction<Issue[]>(
  constants.issues.SET_REPO_ISSUES,
);

export const setIssuesState = createAction<IssuesState>(
  constants.issues.SET_ISSUES_STATE,
);

export const setIssuesHasNextPage = createAction<boolean>(
  constants.issues.SET_ISSUES_HAS_NEXT_PAGE,
);

export const setIssuesHasPrevPage = createAction<boolean>(
  constants.issues.SET_ISSUES_HAS_PREV_PAGE,
);

export const clearIssuesHasNextandPrevPages = createAction(
  constants.issues.CLEAR_ISSUES_HAS_NEXT_AND_PREV_PAGES,
);

export const setCurrentIssuesPage = createAction<number>(
  constants.issues.SET_CURRENT_ISSUES_PAGE,
);

export const resetCurrentIssuesPage = createAction(
  constants.issues.RESET_CURRENT_ISSUES_PAGE,
);
