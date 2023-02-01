import React from 'react';
import './style.scss';

export const Loading = ({ FontAwesomeIcon }) => {
  const component = ({}) => {
    return (
      <FontAwesomeIcon
        icon={['fas', 'circle-notch']}
        className="loading-icon"
      />
    );
  };

  return component;
};
