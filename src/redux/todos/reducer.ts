import { ITodosState, TTodosActionTypes, ADD_TODO, TOGGLE_TODO, DESTROY_TODO } from './types';

const initialState: ITodosState = {
  todos: [],
};

const todosReducer  = (state = initialState, action: TTodosActionTypes): ITodosState => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos:[
          {
            title: action.payload.title,
            completed: action.payload.completed,
            id: action.payload.id,
          },
          ...state.todos,
        ],
      };
    case TOGGLE_TODO:
      return {
        todos: state.todos.map(todo => {
          if (todo.id !== action.payload) {
            return todo;
          }
          return {
            ...todo,
            completed: !todo.completed,
          };
        }),
      };
    case DESTROY_TODO:
      return {
        todos: state.todos.filter(todo => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

export default todosReducer;
