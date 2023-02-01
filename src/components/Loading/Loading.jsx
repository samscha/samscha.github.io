import React from 'react';
import './style.scss';

export const Loading = ({ FontAwesomeIcon }) => {
  return () => {
    return (
      <FontAwesomeIcon
        icon={['fas', 'circle-notch']}
        className="loading-icon"
      />
    );
  };
};
