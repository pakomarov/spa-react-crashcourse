import React from 'react';
import PropTypes from 'prop-types';

function TodoItem({
  todo: {
    id,
    title,
    completed,
  },
  toggleComplete,
  destroy,
}) {
  return (
    <div style={{
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: completed ? 'line-through' : 'none',
    }}>
      <p>
        <input type="checkbox" onChange={() => toggleComplete(id)} checked={completed} /> {' '}
        {title}
        <button onClick={destroy.bind(this, id)} style={btnStyle}>x</button>
      </p>
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }).isRequired,
  toggleComplete: PropTypes.func.isRequired,
  destroy: PropTypes.func.isRequired,
};

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
