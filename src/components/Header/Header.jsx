import React from 'react';
import './Header.scss';

export default () => {
    const Header = () => {
        return (
            <div className="header">
                <div className="header-container">
                    <div className="header__item">
                        <div className="title">iLucke & Pastor Blunt</div>
                    </div>
                    <div className="header__item">
                        <div className="subtitle">Software Engineer</div>
                    </div>
                </div>
            </div>
        );
    };

    return Header;
};
