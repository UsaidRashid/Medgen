import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
<<<<<<< HEAD
import Branded from './Components/Branded-search.jsx';
import Generic from './Components/Generic-search.jsx';
import Compare from './Components/Compare-page.jsx';
=======
>>>>>>> 414cf4e94c1e448a1d5386f26cb1dd6b6dd58db1

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <Compare/>
=======
    <App/>
>>>>>>> 414cf4e94c1e448a1d5386f26cb1dd6b6dd58db1
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
