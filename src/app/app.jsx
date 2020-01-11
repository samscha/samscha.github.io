import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './app.scss';

import { About, Contact, Four04, Home } from '../pages';

export default () => (
  <div className="app">
    <Switch>
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/" component={Home} />
      <Route path="/" component={Four04} />
    </Switch>
  </div>
);
