import React from 'react';
import './Header.scss';

export default ({ Image, useLocation }) => {
    const Header = () => {
        const location = useLocation();
        const imageProps = {};

        if (location.pathname !== '/') {
            imageProps.href = '/';
            imageProps.title = 'Go Home';
        } else {
            imageProps.title = 'Sam';
        }

        return (
            <div className="header">
                <div className="header-container">
                    <div className="header__item">
                        <Image
                            alt="Sam"
                            circle
                            className="header-logo"
                            src="/images/profile.png"
                            styleProps={{
                                backgroundSize: '70px',
                            }}
                            tag="a"
                            {...imageProps}
                        />
                    </div>
                    <div className="header__item">
                        <div className="title">Samuel Cha</div>
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
