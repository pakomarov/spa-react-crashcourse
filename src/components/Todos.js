import React, { Component } from 'react';
import TodoItem  from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
    return (
      <div>
        <h1>Todos</h1>
        {this.props.todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    );
  }
}

Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
}

export default Todos;