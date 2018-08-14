import React, { Component } from 'react';

import Header from '../_Header';
import Footer from '../_Footer';

export default ComposedComponent =>
  class extends Component {
    render() {
      return (
        <div className="Template">
          <Header />

          <ComposedComponent />

          <Footer />
        </div>
      );
    }
  };
