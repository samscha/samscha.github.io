import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

export default withRouter(props => (
  <div className="Four04">
    <div className="Four04__Description">page not found!</div>

    <a
      className="Four04__Link"
      onClick={_ => props.history.goBack()}
      href="#null"
    >
      return
    </a>

    <NavLink className="Four04__Link" to="/">
      return home
    </NavLink>
  </div>
));
