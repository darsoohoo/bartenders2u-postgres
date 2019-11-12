import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

import Navbar from './components/Navbar';
import App from './App';
import Footer from './components/Footer';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
      <Navbar />
    <App />
    <Footer />
  </BrowserRouter>
  , document.getElementById('root'));
  serviceWorker.register();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//registerServiceWorker();
