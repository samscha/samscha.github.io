import React from 'react';
import { NavLink } from 'react-router-dom';

export default _ => (
  <div className="Footer">
    <NavLink className="Footer__Link" to="/about">
      about
    </NavLink>

    <div className="Footer__Link">blog</div>

    <div className="Footer__Link">blog</div>
  </div>
);
