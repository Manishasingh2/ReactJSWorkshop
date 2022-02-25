import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import EmployeeListComponent from './components/EmployeeListComponent';
import App from "./components/AddEmployeeComponent"
import reportWebVitals from './reportWebVitals';
ReactDOM.render(
  <>
    <EmployeeListComponent></EmployeeListComponent>
    <App></App>
  </>
  ,
  document.getElementById('root')
);
reportWebVitals();
