import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/GlobalStyles.css'
import MainRoutes from './router';
import { BrowserRouter } from 'react-router-dom';
import GlobalContextProvider from './contexts/GlobalContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

     <GlobalContextProvider>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </GlobalContextProvider>
);
