import React from 'react';
import PropTypes from 'prop-types';
import './TechIcon.scss';

export default ({ FontAwesomeIcon, Link }) => {
  const TechIcon = ({ icon, link, text, title, type }) => {
    return (
      <Link className="tech-icon" title={title} href={link}>
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
    icon: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
    link: PropTypes.string,
    text: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.oneOf(['fa', 'fz', 'def']),
  };

  TechIcon.defaultProps = {
    type: 'def',
  };

  return TechIcon;
};
