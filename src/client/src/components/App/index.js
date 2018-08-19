import React from 'react';
import { Switch, Route } from 'react-router-dom';

import * as c from '../';

import init from './init';

init();

export default _ => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/about" component={c.About} />
        <Route exact path="/contact" component={c.Contact} />
        <Route exact path="/" component={c.Landing} />
        <Route path="/" component={c.Four04} />
      </Switch>
    </div>
  );
};
