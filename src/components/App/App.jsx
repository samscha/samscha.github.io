import React from 'react';
import './App.scss';

export default ({ About, Contact, Four04, Home, Route, Switch, init }) => {
    init();

    return () => (
        <div className="app">
            <Switch>
                <Route exact path="/about" component={About} />
                {/* <Route exact path="/contact" component={Contact} /> */}
                <Route exact path="/" component={Home} />
                <Route path="/" component={Four04} />
            </Switch>
        </div>
    );
};
