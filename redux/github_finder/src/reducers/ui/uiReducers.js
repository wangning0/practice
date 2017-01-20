/**
 * Created by wangning on 2017/1/20.
 */
import { handleActions } from 'redux-actions';
import { UiState } from '../../constants/models';

const uiReducers = handleActions({
  SHOW_SPINNER: state => (
    state.set(
      'spinnerVisible',
      true,
    )
  ),
  HIDE_SPINNER: state => (
    state.set(
      'spinnerVisible',
      false,
    )
  ),
}, UiState);

export default uiReducers;
