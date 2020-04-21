import React from 'react';
import './NavBar.scss';

export default ({ IconText, Image, Link, useLocation }) => {
    const NavBar = () => {
        const location = useLocation();
        const isAtHome = location.pathname === '/';

        const profileImg = () => {
            const img = (
                <Image
                    alt="Sam"
                    circle
                    className="header-logo"
                    src="http://images.samscha.com/profile.png"
                    style={{
                        backgroundSize: '35px',
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
            <div className="nav-bar">
                <div className="nav-bar-links">
                    <div />
                    {profileImg()}
                    <Link
                        className="nav-bar-links__link"
                        to="/about"
                        title="Go to the about page"
                    >
                        about
                    </Link>
                    <Link
                        className="nav-bar-links__link"
                        href="https://www.medium.com/@samscha"
                        title="Click to go to Sam's blog on Medium"
                    >
                        <IconText icon={['fab', 'medium']} text="blog" />
                    </Link>
                    <Link
                        className="nav-bar-links__link"
                        to="/contact"
                        title="Go to the contact page"
                    >
                        contact
                    </Link>
                    <div />
                </div>
            </div>
        );
    };

    return NavBar;
};
