/**
 * Created by wangning on 2017/1/23.
 */
import { createAction } from 'redux-actions';
import WebApi from '../utils/WebApi';

import {
  SHOW_SPINNER,
  HIDE_SPINNER,
  SET_UI,
} from '../constants/actionTypes';

export const showSpinner = createAction(SHOW_SPINNER);
export const hideSpinner = createAction('HIDE_SPINNER');
export const setUi = createAction('SET_UI');