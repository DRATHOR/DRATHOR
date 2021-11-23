import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Circle from './d3elements/circle'
import FetchNseApi from './Components/Nse/fetchNseApi';
import ExcleSheet from './Components/ExcleSheet';
import LinePath from './d3elements/LinePath';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
  {/* <Circle/> */}
  {/* <FetchNseApi/> */}
  {/* <ExcleSheet/> */}
  <LinePath/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
