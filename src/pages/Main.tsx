import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TRootState } from '../redux/store';
import { TId } from '../redux/todos/types';
import { addTodo, toggleTodo, destroyTodo } from '../redux';
import AddTodo from '../components/AddTodo';
import Todos from '../components/Todos';

const Main = () => {
  const todos = useSelector((state: TRootState) => state.todos.todos);
  const dispatch = useDispatch();

  const onAddTodo = useCallback(
    (title: string) => {
      dispatch(addTodo({title}));
    },
    [dispatch],
  );
  const onToggleTodoItem = useCallback(
    (id: TId) => {
      dispatch(toggleTodo(id));
    },
    [dispatch],
  );
  const onDestroyTodoItem = useCallback(
    (id: TId) => {
      dispatch(destroyTodo(id))
    },
    [dispatch],
  )

  return (
    <>
      <AddTodo onSubmit={onAddTodo}/>
      {todos.length ? (
          <Todos
            todos={todos}
            toggleTodoItemComplete={onToggleTodoItem}
            destroyTodoItem={onDestroyTodoItem}
          />
        ) : (
          <p>No todos</p>
        )
      }
    </>
  );
};

export default Main;
