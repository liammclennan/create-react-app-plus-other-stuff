import React from 'react';
import logo from './logo.svg';
import './Layout.css';

export default function Layout(props) {
  return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          {props.children}
        </div>
      </div>
    );
}