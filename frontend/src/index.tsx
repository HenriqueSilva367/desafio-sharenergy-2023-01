import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/GlobalStyles.ts';
import Routes from './router';

const root = ReactDOM.createRoot( document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);

