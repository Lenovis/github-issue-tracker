import { createAction } from '@reduxjs/toolkit';
import { constants } from '../constants';

export const setRepoOwner = createAction<string>(constants.repo.SET_REPO_OWNER);

export const clearRepoOwner = createAction(constants.repo.CLEAR_REPO_OWNER);

export const setRepoName = createAction<string>(constants.repo.SET_REPO_NAME);

export const clearRepoName = createAction(constants.repo.CLEAR_REPO_NAME);
