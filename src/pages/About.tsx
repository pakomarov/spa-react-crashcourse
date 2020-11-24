import React from 'react';

const About = () => {
  return (
    <div style={{textAlign: 'center'} as React.CSSProperties}>
      <h1>About</h1>
      <p>Made by <a href="https://github.com/pakomarov">Pavel Komarov</a></p>
      <p>Checkout code:{' '}
        <a href="https://github.com/pakomarov/spa-react-crashcourse">GitHub</a>,{' '}
        <a href="https://glitch.com/~todo-pavel">Glitch</a>
      </p>
      <p>
        Original tutorial:
        "<a href="https://youtu.be/sBws8MSXN7A">
          Drag & Drop With Vanilla JS
        </a>" 
        by{' '}
        <a href="https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA">
          Traversy Media
        </a>
      </p>
    </div>
  );
};

export default About;
