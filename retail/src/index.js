import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { AppError } from './services/Error';

ReactDOM.render(
  <React.StrictMode>
    <AppError>
      <App />
    </AppError>
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();