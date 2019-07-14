import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './index.scss';

export default class extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    href: PropTypes.string,
    target: PropTypes.string,
    title: PropTypes.string,
    to: PropTypes.string,
  };

  static defaultProps = {
    target: '_null',
  };

  render() {
    const {
      children,
      className: classNameProp,
      href,
      target,
      title,
      to,
    } = this.props;

    const className = 'link' + (classNameProp ? ` ${classNameProp}` : '');

    return (
      <React.Fragment>
        {to && !href && (
          <NavLink className={className} title={title} to={to}>
            {children}
          </NavLink>
        )}

        {href && !to && (
          <a
            className={className}
            title={title}
            href={href}
            rel="noopener noreferrer"
            target={target}
          >
            {children}
          </a>
        )}
      </React.Fragment>
    );
  }
}
