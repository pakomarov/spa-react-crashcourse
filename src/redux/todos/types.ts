export type TId = string;

export interface ITodo {
  title: string;
  completed: boolean;
  id: TId;
}

export interface ITodosState {
  todos: ITodo[];
}

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DESTROY_TODO = 'DESTROY_TODO';

interface IAddTodoAction {
  type: typeof ADD_TODO;
  payload: ITodo;
}

interface IToggleTodoAction {
  type: typeof TOGGLE_TODO;
  payload: TId;
}

interface IDesttroyTodoAction {
  type: typeof DESTROY_TODO;
  payload: TId;
}

export type TTodosActionTypes = IAddTodoAction | IToggleTodoAction | IDesttroyTodoAction;
