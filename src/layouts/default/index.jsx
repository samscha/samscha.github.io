import React from 'react';
import './index.scss';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default WrappedComponent =>
  class extends React.Component {
    render() {
      return (
        <div className="template">
          <Header />

          <div className="main-content">
            <WrappedComponent />
          </div>

          <Footer />
        </div>
      );
    }
  };
