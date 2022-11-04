import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// import Users from './Users';
import { BrowserRouter } from 'react-router-dom';
// import Github from './Github';
// import Home from './Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>  
);
