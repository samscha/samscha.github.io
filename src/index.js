import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App';
import './index.scss';

//import ScrollToTop from './components/ScrollToTop';

//const WrappedApp = ScrollToTop(App);

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
  <Router>
    <App />
  </Router>
);
