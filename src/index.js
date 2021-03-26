import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
import { myAction } from './redux/actions';

import App from './App';

store.dispatch(myAction(5));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
