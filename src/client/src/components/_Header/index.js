import React from 'react';
import { withRouter } from 'react-router-dom';

export default withRouter(props => (
  <div className="Header" onClick={_ => props.history.push('/')}>
    <div className="Header__title">Samuel Cha</div>

    <div className="Header__subtitle">Software Engineer</div>
  </div>
));
