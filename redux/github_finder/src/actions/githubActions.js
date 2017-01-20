import 'whatwg-fetch';
import {
  GET_GITHUB_INITIATE,
  GET_GITHUB_SUCCESS,
  GET_GITHUB_FAIL,
  CHANGE_USER_ID,
} from '../constants/actionTypes';

import {
  showSpinner,
  hideSpinner,
} from './uiActions';

export const getGithub = (userId = 'wangning0') => (
  (dispatch) => {
    dispatch({ type: GET_GITHUB_INITIATE });
    dispatch(showSpinner());
    fetch(`https://api.github.com/users/${userId}`)
      .then(res => res.json())
      .then((json) => {
        dispatch({ type: GET_GITHUB_SUCCESS, payload: { data: json } });
        dispatch(hideSpinner());
      })
      .catch(() => dispatch({ type: GET_GITHUB_FAIL }));
  }
);

export const changeUserId = text => ({ type: CHANGE_USER_ID, payload: { userId: text } });
