import React from 'react';
import TodoItem  from './TodoItem';
import { ITodo } from '../redux/todos/types';

interface TodosProps {
  todos: ITodo[];
  toggleTodoItemComplete: (id: string) => void;
  destroyTodoItem: (id: string) => void;
}

const Todos = ({todos, toggleTodoItemComplete, destroyTodoItem}: TodosProps) => {
  return (
    <ul style={{margin: '0', padding: '0', listStyle: 'none'} as React.CSSProperties}>
      {todos.map((todo) => (
        <li key={todo.id}>
          <TodoItem
            todo={todo}
            toggleComplete={toggleTodoItemComplete}
            destroy={destroyTodoItem}
          />
        </li>
      ))}
    </ul>
  );
}

export default Todos;
