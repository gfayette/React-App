import React from 'react';
import bass from './bass.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          I made a website
        </p>
        <p></p>
        <img src={bass} className="App-logo" alt="logo" />
        <p></p>
        <a
          className="App-link"
          href="https://github.com/gfayette"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Github
        </a>
      </header>
    </div>
  );
}

export default App;
