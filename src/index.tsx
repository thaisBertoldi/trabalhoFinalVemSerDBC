import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './routes';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import store from './store'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
