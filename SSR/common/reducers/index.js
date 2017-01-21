/**
 * Created by wangning on 2017/1/22.
 */
import { combineReducers } from 'redux-immutable';
import counterReducers from './counterReducers'

const rootReducer = combineReducers({
  counterReducers
});

export default rootReducer;
