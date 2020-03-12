import React from 'react';
import './Page.scss';

export default ({ Header, Footer }) => {
    return WrappedComponent => {
        return () => (
            <div className="layout-page">
                <Header />
                <div className="main-content">
                    <WrappedComponent />
                </div>
                <Footer />
            </div>
        );
    };
};
