import { ADD_TODO, TOGGLE_TODO, DESTROY_TODO } from './types';

const initialState = [];

const todo = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: action.payload.id,
        title: action.payload.title,
        completed: action.payload.completed,
      };
    case TOGGLE_TODO:
      if (state.id !== action.payload) {
        return state;
      }

      return {
        ...state,
        completed: !state.completed,
      };
    case DESTROY_TODO:
      return state.id !== action.payload;
    default:
      return state;
  }
};

const todos  = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        todo(undefined, action)
      ];
    case TOGGLE_TODO:
      return state.map(t => todo(t, action));
    case DESTROY_TODO:
      return state.filter(t => todo(t, action));
    default:
      return state;
  }
};

export default todos;
