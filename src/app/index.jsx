import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './index.scss';

import { About, Contact, Four04, Home } from '../pages';

import init from './init';
init();

export default class extends React.Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/" component={Home} />
          <Route path="/" component={Four04} />
        </Switch>
      </div>
    );
  }
}
