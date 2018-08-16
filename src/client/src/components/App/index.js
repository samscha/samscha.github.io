import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../../store';

import * as c from '../';

export default _ => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={c.Landing} />
            <Route path="/" component={c.Four04} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};
