import React from 'react';
import { ITodo } from '../redux/todos/types';

interface ITodoProps {
  todo: ITodo,
  toggleComplete: (id: string) => void,
  destroy: (id: string) => void,
}

const TodoItem = ({
  todo: {
    title,
    completed,
    id,
  },
  toggleComplete,
  destroy,
}: ITodoProps) => {
  return (
    <div style={{
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: completed ? 'line-through' : 'none',
    } as React.CSSProperties}>
      <p>
        <input type="checkbox" onChange={(): void => { toggleComplete(id) }} checked={completed} /> {' '}
        {title}
        <button onClick={(): void => { destroy(id) }} style={btnStyle}>x</button>
      </p>
    </div>
  );
};

const btnStyle: React.CSSProperties ={
  float: 'right',
  padding: '5px 9px',
  color: '#fff',
  background: '#ff0000',
  border: 'none',
  borderRadius: '50%',
  cursor: 'pointer',
};

export default TodoItem;
