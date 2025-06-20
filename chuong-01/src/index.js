import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Hello from './components/Hello';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); // id=root
// root.render(
//   <React.StrictMode> {/* Render without StrictMode for single render */}
//     <App />, {/* App component at src/App.js */}
//   </React.StrictMode> {/* Render without StrictMode for single render */}
// );

/* Render without StrictMode for single render */
root.render(
  <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
