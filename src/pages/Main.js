import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, destroyTodo } from '../redux';
import AddTodo from '../components/AddTodo';
import Todos from '../components/Todos';

const Main = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const onAddTodo = useCallback(
    (title) => {
      dispatch(addTodo(title));
    },
    [dispatch],
  );
  const onToggleTodoItem = useCallback(
    (id) => {
      dispatch(toggleTodo(id));
    },
    [dispatch],
  );
  const onDestroyTodoItem = useCallback(
    (id) => {
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
