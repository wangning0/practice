/**
 * Created by wangning on 2017/1/20.
 */
import Immutable from 'immutable';

export const TodoState = Immutable.fromJS({
  'todos': [],
  'todo': {
    id: '',
    text: '',
    updateAt: '',
    completed: false,
  }
});