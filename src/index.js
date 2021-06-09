import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/Footer';
import './components/styles/index.scss';
import Login from './pages/Login';
import Dashboard from './components/Dashboard'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <Login/> */}
    <Dashboard/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
