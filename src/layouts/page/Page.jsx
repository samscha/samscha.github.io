import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './Page.scss';

export default WrappedComponent =>
  class extends React.Component {
    render() {
      return (
        <div className="layout-page">
          <Header />
          <div className="main-content">
            <WrappedComponent />
          </div>
          <Footer />
        </div>
      );
    }
  };
