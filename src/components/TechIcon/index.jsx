import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';

import { Link } from '../index';

export default class extends React.Component {
  static propTypes = {
    text: PropTypes.string,
    title: PropTypes.string,
    link: PropTypes.string,
    type: PropTypes.oneOf(['fa', 'fz', 'def']),
    icon: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  };

  static defaultProps = {
    type: 'def',
  };

  render() {
    const { icon, type } = this.props;

    return (
      <Link
        className="tech-icon"
        title={this.props.title}
        href={this.props.link}
      >
        <div className="icon">
          {type === 'fa' && <FontAwesomeIcon icon={icon} />}
          {type === 'fz' && <i className={icon} />}
          {type === 'def' && (
            <FontAwesomeIcon icon={['fas', 'question-circle']} />
          )}
        </div>
        <p className="text">{this.props.text}</p>
      </Link>
    );
  }
}
