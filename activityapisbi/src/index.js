import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PriceComponent from './classComponent/PriceComponent';
import reportWebVitals from './reportWebVitals';
var stockInfo = [
  "https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/NLC",
  "https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/SBI",
  "https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/NAC"
]
ReactDOM.render(
  <div>
  {stockInfo.map((stock) => {
    return <PriceComponent apiUrl={stock}></PriceComponent>
})}</div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
