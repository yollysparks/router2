import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from './App2';
import bookStore from './bookStore';

//ReactDOM.render(<App />, document.getElementById('root'));
//Replace the render method in index.js with this and import App2.js
ReactDOM.render(
    <App2 bookStore={bookStore}  />, document.getElementById('root'));
  
