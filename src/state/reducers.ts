import { combineReducers } from 'redux';
import { StateType } from 'typesafe-actions';
import app from './app/appReducer';

const rootReducer = combineReducers({
  app,
});

export type RootState = StateType<typeof rootReducer>;

export default rootReducer;
