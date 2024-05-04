import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './store/reducers';
import { Provider } from 'react-redux';




const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(process.env.REACT_APP_API_URL)

root.render(
  <Provider store = {store} >
    <App/>
  </Provider>
);


reportWebVitals();
