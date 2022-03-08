import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import store from "./store"
import App from './App';

// import Counter from './Counter';
// import store from "./storeCounter"
// import Counter2 from './Counter2';
// import store from "./storeCounter2"

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
    {/* <Counter/> */}
    {/* <Counter2/> */}
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
