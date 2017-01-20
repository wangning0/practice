/**
 * Created by wangning on 2017/1/20.
 */
import React from 'react';

const TodoHeader = ({
  onChangeText,
  onCreateTodo,
  todo,
}) => (
  <div>
    <h1>TodoHeader</h1>
    <input type="text" value={todo.get('text')} onChange={onChangeText}/>
    <button onClick={onCreateTodo}>SEND</button>
  </div>
);

export default TodoHeader;