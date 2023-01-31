import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App';
import './index.scss';

//import ScrollToTop from './components/ScrollToTop';

//const WrappedApp = ScrollToTop(App);

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
