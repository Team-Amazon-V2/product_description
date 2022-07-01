import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SpecsMain from './SpecsMain';

const root = ReactDOM.createRoot(document.getElementById('specs-root'));
root.render(
  <React.StrictMode>
    <SpecsMain />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
