import React from 'react';
import { NavLink } from 'react-router-dom';

export default _ => (
  <div className="Footer">
    <div className="FlexibleSpace" />

    <NavLink className="Footer__link" to="/about">
      about
    </NavLink>

    <NavLink className="Footer__link" to="/blog">
      blog
    </NavLink>

    <NavLink className="Footer__link" to="/contact">
      contact
    </NavLink>

    <div className="FlexibleSpace" />
  </div>
);
