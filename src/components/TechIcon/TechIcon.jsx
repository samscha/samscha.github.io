import React from 'react';
import PropTypes from 'prop-types';
import './TechIcon.scss';

export default ({ FontAwesomeIcon, Link }) => {
  const TechIcon = ({ className, icon, link, text, title, type }) => {
    const classNames = ['tech-icon'];

    if (className) {
      classNames.push(className);
    }

    return (
      <Link className={classNames.join(' ')} title={title} href={link}>
        <div className="icon">
          {type === 'fa' && <FontAwesomeIcon icon={icon} />}
          {type === 'fz' && <i className={icon} />}
          {type === 'def' && (
            <FontAwesomeIcon icon={['fas', 'question-circle']} />
          )}
        </div>
        {text && <p className="text">{text}</p>}
      </Link>
    );
  };

  TechIcon.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
    link: PropTypes.string,
    text: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.oneOf(['fa', 'fz', 'def']),
  };

  TechIcon.defaultProps = {
    className: '',
    type: 'def',
  };

  return TechIcon;
};
