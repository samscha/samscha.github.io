import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default withRouter(props => (
  <div className="Footer">
    <div className="FlexibleSpace" />

    <NavLink
      className="Footer__link"
      to={props.location.pathname === '/about' ? '/' : '/about'}
    >
      {props.location.pathname === '/about' ? 'home' : 'about'}
    </NavLink>

    <a
      className="Footer__link"
      href="https://www.medium.com/@samscha"
      rel="noopener noreferrer"
      target="_null"
    >
      blog <FontAwesomeIcon icon={['fas', 'external-link-alt']} />
    </a>

    <NavLink
      className="Footer__link"
      to={props.location.pathname === '/contact' ? '/' : '/contact'}
    >
      {props.location.pathname === '/contact' ? 'home' : 'contact'}
    </NavLink>

    <div className="FlexibleSpace" />
  </div>
));
