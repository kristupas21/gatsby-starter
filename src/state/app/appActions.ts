import { action } from 'typesafe-actions';
import { SET_APP_LOADING_STATUS } from './appModel';

export const setAppLoadingStatus = (status = true) =>
  action(SET_APP_LOADING_STATUS, status);
