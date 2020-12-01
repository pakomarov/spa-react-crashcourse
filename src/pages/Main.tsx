import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TRootState } from '../redux/store';
import { TId } from '../redux/todos/types';
import { addTodo, toggleTodo, destroyTodo } from '../redux';
import AddTodo from '../components/AddTodo';
import Todos from '../components/Todos';
import Filter from '../components/Filter';

const FilterOptions = {
  ALL: "All",
  ACTIVE: "Active",
  COMPLETED: "Completed",
};

export type FilterOption = keyof typeof FilterOptions;

const Main = () => {
  const todos = useSelector((state: TRootState) => state.todos.todos);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState<FilterOption>(FilterOptions.ALL as FilterOption);

  const filteredTodos = todos.filter(todo => {
    switch (filter) {
      case FilterOptions.ALL:
        return true;
      case FilterOptions.ACTIVE:
        return !todo.completed;
      case FilterOptions.COMPLETED:
        return todo.completed;
    }
    return false;
  })

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
  );
  const onFilterChange = (selectedOption: FilterOption) => {
    setFilter(selectedOption);
  };

  return (
    <>
      <AddTodo onSubmit={onAddTodo}/>
      {filteredTodos.length ? (
          <Todos
            todos={filteredTodos}
            toggleTodoItemComplete={onToggleTodoItem}
            destroyTodoItem={onDestroyTodoItem}
          />
        ) : (
          <p>No todos</p>
        )
      }
      <Filter
        options={Object.values(FilterOptions) as FilterOption[]}
        selectedOption={filter}
        onChange={onFilterChange}
      />
      <p>Total: {filteredTodos.length}</p>
    </>
  );
};

export default Main;
