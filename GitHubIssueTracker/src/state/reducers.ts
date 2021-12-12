import { IssuesReduserState } from './issues/IssuesReducer';
import { UIReducerState } from './ui/UIReducers';

export interface RootState {
  issues: IssuesReduserState;
  ui: UIReducerState;
}
