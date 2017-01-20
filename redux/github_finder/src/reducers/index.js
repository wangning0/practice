/**
 * Created by wangning on 2017/1/20.
 */
import { combineReducers } from 'redux-immutable';
import ui from './ui/uiReducers';
import github from './data/dataReducers';

const rootReducer = combineReducers({
  ui,
  github,
});

export default rootReducer;
