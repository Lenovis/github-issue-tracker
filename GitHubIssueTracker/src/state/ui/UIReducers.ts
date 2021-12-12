import { createReducer } from '@reduxjs/toolkit';
import { actions } from '../actions';

export interface UIReducerState {
  repoIssuesOnSync: boolean;
}

export const INITIAL_STATE: UIReducerState = {
  repoIssuesOnSync: false,
};

export const uiReducer = createReducer(INITIAL_STATE, {
  [actions.ui.repoIssuesOnSync.type]: (state, { payload }) => {
    state.repoIssuesOnSync = payload;
  },
});
