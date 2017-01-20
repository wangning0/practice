/**
 * Created by wangning on 2017/1/20.
 */
import { Dispatcher } from 'flux';

class DispateherClass extends Dispatcher {
  handleAction(action) {
    this.dispatch({
      type: action.type,
      payload: action.payload,
    });
  }
}

const AppDispatcher = new DispateherClass();

export default AppDispatcher;