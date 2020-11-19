import React from 'react';
import TodoItem  from './TodoItem';
import PropTypes from 'prop-types';

function Todos({todos, toggleTodoItemComplete, destroyTodoItem}) {
  return (
    <ul style={{margin: '0', padding: '0', listStyle: 'none'}}>
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

Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  toggleTodoItemComplete: PropTypes.func.isRequired,
  destroyTodoItem: PropTypes.func.isRequired,
};

export default Todos;
