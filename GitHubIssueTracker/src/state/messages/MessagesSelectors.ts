import { RootState } from '../reducers';

export const getInfoMessage = (state: RootState) => state.messages?.info;
