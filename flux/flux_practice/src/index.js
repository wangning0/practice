import React from 'react';
import ReactDOM from 'react-dom';
import TodoHeader from './components/TodoHeader/TodoHeader';
import TodoList from './components/TodoList/TodoList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      // eslint-disable-next-line
      <div>
        <TodoHeader />
        <TodoList />
      </div>
    );
  }
}
// eslint-disable-next-line
ReactDOM.render(<App />, document.getElementById('app'));