import { createReducer } from '@reduxjs/toolkit';
import { actions } from '../actions';

export type RepoReduserState = {
  repoName: string;
  repoOwner: string;
};

export const INITIAL_STATE: RepoReduserState = {
  repoName: '',
  repoOwner: '',
};

export const repoReducer = createReducer(INITIAL_STATE, {
  [actions.repo.setRepoOwner.type]: (state, { payload }) => {
    state.repoOwner = payload;
  },

  [actions.repo.clearRepoOwner.type]: state => {
    state.repoOwner = INITIAL_STATE.repoOwner;
  },

  [actions.repo.setRepoName.type]: (state, { payload }) => {
    state.repoName = payload;
  },

  [actions.repo.clearRepoName.type]: state => {
    state.repoName = INITIAL_STATE.repoName;
  },
});
