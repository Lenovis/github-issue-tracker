import { createAction } from '@reduxjs/toolkit';
import { constants } from '../constants';

export const setInfoMessage = createAction<string | null>(
  constants.messages.SET_INFO_MESSAGE,
);

export const clearInfoMessage = createAction(
  constants.messages.CLEAR_INFO_MESSAGE,
);
