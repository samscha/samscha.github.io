import React from 'react';
import PropTypes from 'prop-types';
import './IconsBy.scss';

export default ({ FontAwesomeIcon, Link }) => {
  const IconsBy = ({ fa, fz }) => {
    return (
      (fa || fz) && (
        <div className="icons-by">
          <p>icons by</p>

          {fa && (
            <Link
              className="link"
              href="https://fontawesome.com/"
              title="Click to learn more about FontAwesome"
            >
              <FontAwesomeIcon icon={['fab', 'font-awesome']} />
            </Link>
          )}

          {fa && fz && <p>and</p>}

          {fz && (
            <Link
              className="link"
              href="http://fizzed.com/oss/font-mfizz"
              title="Click to learn more about fizzed"
            >
              <p>Fizzed</p>
            </Link>
          )}
        </div>
      )
    );
  };

  IconsBy.propTypes = {
    fa: PropTypes.bool,
    fz: PropTypes.bool,
  };

  IconsBy.defaultProps = {
    fa: false,
    fz: false,
  };

  return IconsBy;
};
