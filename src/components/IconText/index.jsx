import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';

export default class extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    fixedWidth: PropTypes.bool,
    icon: PropTypes.arrayOf(PropTypes.string).isRequired,
    text: PropTypes.string.isRequired,
  };

  static defaultProps = {
    className: '',
    fixedWidth: false,
  };

  render() {
    const { className: classNameProp, icon, fixedWidth, text } = this.props;

    const className = 'icon-text' + (classNameProp ? ` ${classNameProp}` : '');

    return (
      <div className={className}>
        <FontAwesomeIcon className="icon" icon={icon} fixedWidth={fixedWidth} />
        {text}
      </div>
    );
  }
}
