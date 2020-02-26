import React from 'react';
import PropTypes from 'prop-types';
import './Image.scss';

const Image = ({ alt, circle, onClick, src, title }) => {
  const className = ['image-with-many-hats'];

  if (circle) className.push('circle');
  if (onClick) className.push('clickable');

  return (
    <img
      className={className.join(' ')}
      alt={alt}
      onClick={onClick}
      src={src}
      title={title}
    />
  );
};

Image.defaultProps = {
  circle: false,
};

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  circle: PropTypes.bool,
  onClick: PropTypes.func,
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Image;
