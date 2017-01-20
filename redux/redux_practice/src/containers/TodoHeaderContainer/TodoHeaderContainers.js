/**
 * Created by wangning on 2017/1/20.
 */
import { connect } from 'react-redux';
import TodoHeader from '../../components/TodoHeader';

import {
  changeText,
  createTodo,
} from '../../actions';

export default connect(
  (state) => ({
    todo: state.getIn(['todo', 'todo'])
  }),
  (dispatch) => ({
    onChangeText: (event) => (
      dispatch(changeText({text: event.target.value}))
    ),
    onCreateTodo: () => {
      dispatch(createTodo());
      dispatch(changeText({ text: '' }));
    }
  })
)(TodoHeader);