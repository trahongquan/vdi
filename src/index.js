import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import RouterCustom from './router';
import './style/style.scss';

// import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css'; //Allows for server-side rendering.
import 'react-owl-carousel2/src/owl.theme.default.css'; //Allows for server-side rendering.

const root = ReactDOM.createRoot(document.getElementById('root'));
// console.log(React.version);
// console.log(ReactDOM.version);
root.render(
  <React.StrictMode>
    <Router>
      <RouterCustom />
    </Router>
  </React.StrictMode>
);
reportWebVitals();
