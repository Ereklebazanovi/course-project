import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // Import your root component
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter> // Only wrap App in <BrowserRouter> here, NOT in App.tsx
);
