import React from 'react';
import './Header.scss';

export default ({ Image, Link, useLocation }) => {
    const Header = () => {
        const location = useLocation();
        const isAtHome = location.pathname === '/';

        const profileImg = () => {
            const img = (
                <Image
                    alt="Sam"
                    circle
                    className="header-logo"
                    src="/images/profile.png"
                    style={{
                        backgroundSize: '70px',
                    }}
                    tag="div"
                    title={isAtHome ? 'Sam' : undefined}
                />
            );

            if (!isAtHome)
                return (
                    <Link className="profile-img" title="Go home" to="/">
                        {img}
                    </Link>
                );

            return img;
        };

        return (
            <div className="header">
                <div className="header-container">
                    <div className="header__item">{profileImg()}</div>
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
