import React, { Component } from 'react';
import TodoItem  from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
    const {todos, toggleTodoItemComplete, destroyTodoItem} = this.props;
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
}

Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  toggleTodoItemComplete: PropTypes.func.isRequired,
  destroyTodoItem: PropTypes.func.isRequired,
}

export default Todos;