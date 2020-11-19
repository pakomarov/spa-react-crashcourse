import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import todos from './todos/reducer';

const rootReducer = todos;

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));

export default store;
