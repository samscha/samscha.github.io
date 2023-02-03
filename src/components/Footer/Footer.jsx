import React from 'react';
import './Footer.scss';

export default () => {
  const Footer = () => {
    return (
      <div className="footer">
        <div className="copyright-info">
          &copy;&nbsp;2018&#8212;{new Date().getFullYear()}
          &nbsp;Samuel&nbsp;Cha
        </div>
      </div>
    );
  };

  return Footer;
};
