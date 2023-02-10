import React from 'react';
import './style.scss';

export const ErrorText = ({ text }) => {
  return () => {
    return (
      <div className="error">
        {text ?? 'Something went wrong. Please try again later'}
      </div>
    );
  };
};
