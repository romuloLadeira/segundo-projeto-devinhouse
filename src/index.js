import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {MmoProvider} from './context/mmoContext'


ReactDOM.render(
  <React.StrictMode>
    <MmoProvider>
    <App />
    </MmoProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

