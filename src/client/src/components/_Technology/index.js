import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import * as c from '../';

export default props => (
  <a
    className="Technology"
    href={props.tech.link}
    rel="noopener noreferrer"
    target="_null"
  >
    {/* <a href="www.google.com" target="_null"> */}
    <div
      className="Technology__icon"
      style={{ opacity: props.tech.opacity || 1.0 }}
    >
      {props.tech.custom ? (
        <i className={props.tech.custom} />
      ) : (
        <FontAwesomeIcon icon={props.tech.icon} />
      )}
    </div>

    <div
      className="Technology__text"
      style={{ opacity: props.tech.opacity || 1.0 }}
    >
      {props.tech.text}
    </div>
    {/* </a> */}
  </a>
);
