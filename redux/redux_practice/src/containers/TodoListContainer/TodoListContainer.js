/**
 * Created by wangning on 2017/1/20.
 */
import { connect } from 'react-redux';
import TodoList from '../../components/TodoList';

import {
  deleteTodo
} from '../../actions';

export default connect(
  (state) => ({
    todos: state.getIn(['todo', 'todos'])
  }),
  (dispatch) => ({
    onDeleteTodo: (index) => () => (
      dispatch(deleteTodo({ index }))
    )
  })
)(TodoList);