import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

export default withRouter(props => (
  <div className="Footer">
    <div className="FlexibleSpace" />

    <NavLink
      className="Footer__link"
      to={props.location.pathname === '/about' ? '/' : '/about'}
    >
      {props.location.pathname === '/about' ? 'home' : 'about'}
    </NavLink>

    <NavLink
      className="Footer__link"
      to={props.location.pathname === '/blog' ? '/' : '/blog'}
    >
      {props.location.pathname === '/blog' ? 'home' : 'blog'}
    </NavLink>

    <NavLink
      className="Footer__link"
      to={props.location.pathname === '/contact' ? '/' : '/contact'}
    >
      {props.location.pathname === '/contact' ? 'home' : 'contact'}
    </NavLink>

    <div className="FlexibleSpace" />
  </div>
));
