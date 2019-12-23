import { ActionType } from 'typesafe-actions';
import { Reducer } from 'redux';
import { AppState, SET_APP_LOADING_STATUS } from './appModel';

type AppAction = ActionType<typeof import('./appActions')>;

const initialState: AppState = {
  isLoading: false,
};

const appReducer: Reducer<AppState, AppAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SET_APP_LOADING_STATUS:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;
