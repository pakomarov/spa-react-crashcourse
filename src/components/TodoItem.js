import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  _getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
    };
  }

  render() {
    const {
      todo: {
        id,
        title,
        completed,
      },
      toggleComplete,
      destroy,
    } = this.props;
    return (
      <div style={this._getStyle()}>
        <p>
          <input type="checkbox" onChange={toggleComplete.bind(this, id)} checked={completed} /> {' '}
          {title}
          <button onClick={destroy.bind(this, id)} style={btnStyle}>x</button>
        </p>
      </div>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
  toggleComplete: PropTypes.func.isRequired,
  destroy: PropTypes.func.isRequired,
}

const btnStyle ={
  float: 'right',
  padding: '5px 9px',
  color: '#fff',
  background: '#ff0000',
  border: 'none',
  borderRadius: '50%',
  cursor: 'pointer',
};

export default TodoItem;
