import { ADD_TODO, TOGGLE_TODO, DESTROY_TODO } from './types';
import { v4 as uuidv4 } from 'uuid';

export const addTodo = (title, completed = false, id = uuidv4()) => ({
  type: ADD_TODO,
  payload: {
    id,
    title,
    completed,
  }
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const destroyTodo = (id) => ({
  type: DESTROY_TODO,
  payload: id,
});
