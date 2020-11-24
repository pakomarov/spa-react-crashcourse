import { createStore, combineReducers, applyMiddleware } from 'redux';
import { save, load } from 'redux-localstorage-simple';
import { composeWithDevTools } from 'redux-devtools-extension';
import todos from './todos/reducer';

const rootReducer = combineReducers({todos});

const store = createStore(rootReducer, load(), composeWithDevTools(
  applyMiddleware(save())
));

export type TRootState = ReturnType<typeof rootReducer>;

export default store;
