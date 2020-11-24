import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>TodoList</h1>
      <Link to="/">Home</Link> | <Link to="/about">About</Link>
    </header>
  )
}

const headerStyle: React.CSSProperties = {
  background: '#333',
  color: '#fff',
  textAlign:'center' as any,
  padding: '10px',
};

export default Header;
