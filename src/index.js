import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import MovieProvider from './context/Movie.context';
import TvProvider from './context/Tv.context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <MovieProvider>
      <TvProvider>
      <App />
      </TvProvider>
     </MovieProvider>
    </BrowserRouter>
  </React.StrictMode>
);


