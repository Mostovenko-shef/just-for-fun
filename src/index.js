import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/index.jsx';
import reportWebVitals from './reportWebVitals';
import { ConfigProvider } from 'antd';
import ruRU from 'antd/lib/locale/ru_RU'



ReactDOM.render(

  <ConfigProvider locale={ruRU}>
    <App />
  </ConfigProvider>,
  document.getElementById('root')
);
document.getElementById('root')


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
