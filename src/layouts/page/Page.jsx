import React from 'react';
import './Page.scss';

export default ({ Header, Footer, NavBar }) => {
  return (WrappedComponent) => {
    return () => (
      <div className="layout-page">
        <NavBar />
        <Header />
        <div className="main-content">
          <WrappedComponent />
        </div>
        <Footer />
      </div>
    );
  };
};
