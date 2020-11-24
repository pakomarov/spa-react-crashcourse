import { TId, ITodo, TTodosActionTypes, ADD_TODO, TOGGLE_TODO, DESTROY_TODO } from './types';
import { v4 as uuidv4 } from 'uuid';

interface IAddTodo {
  title: string,
  completed?: boolean,
  id?: string,
}

export const addTodo = ({ title, completed = false, id = uuidv4()}: IAddTodo): TTodosActionTypes => {
  const newTodo: ITodo = {
    title,
    completed,
    id,
  };

  return {
    type: ADD_TODO,
    payload: newTodo,
  };
};

export const toggleTodo = (id: TId): TTodosActionTypes => ({
  type: TOGGLE_TODO,
  payload: id,
});

export const destroyTodo = (id: TId): TTodosActionTypes => ({
  type: DESTROY_TODO,
  payload: id,
});
