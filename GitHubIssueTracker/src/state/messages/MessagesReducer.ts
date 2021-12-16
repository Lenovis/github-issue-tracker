import { createReducer } from '@reduxjs/toolkit';
import { actions } from '../actions';

export type MessagesReducerState = {
  info: string | null;
};

export const INITIAL_STATE: MessagesReducerState = {
  info: null,
};

export const messagesReducer = createReducer(INITIAL_STATE, {
  [actions.messages.setInfoMessage.type]: (state, { payload }) => {
    state.info = payload;
  },

  [actions.messages.clearInfoMessage.type]: state => {
    state.info = INITIAL_STATE.info;
  },
});
