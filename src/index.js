import React from 'react';
import ReactDOM from 'react-dom';
import './components/styles/index.css';
import Login from './pages/Login';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
