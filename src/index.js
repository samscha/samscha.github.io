import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import './index.scss';

import { ScrollToTop } from './components';

ReactDOM.render(
    <Router>
        <ScrollToTop>
            <App />
        </ScrollToTop>
    </Router>,
    document.getElementById('root'),
);
