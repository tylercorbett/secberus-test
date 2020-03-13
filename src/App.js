import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

const Test = styled.div(props => ({
  background: props.background,
  height: '3rem',
  width: '3rem',
}))

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Test background="red">
          hello world
        </Test>
      </header>
    </div>
  );
}

export default App;
