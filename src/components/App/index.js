import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import * as c from '../';

export default _ => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={c.Landing} />
        </Switch>
      </div>
    </Router>
  );
};
