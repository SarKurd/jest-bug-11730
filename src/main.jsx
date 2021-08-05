import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';

import App from './App';
import { customHistory } from '@services/RouterService/RouterService';
import './main.css';

ReactDOM.render(
  <Router history={customHistory}>
    <App />
  </Router>,
  document.getElementById('root'),
);
