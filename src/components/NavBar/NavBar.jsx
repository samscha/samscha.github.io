import React from 'react';
import './NavBar.scss';

export default ({ IconText, Image, Link, useLocation }) => {
    const NavBar = () => {
        const location = useLocation();
        const isAtHome = location.pathname === '/';

        const profileImg = () => {
            const imageClassName = ['header-logo'];

            if (isAtHome) imageClassName.push('nav-bar-link');

            const img = (
                <Image
                    alt="Sam"
                    circle
                    className={imageClassName.join(' ')}
                    src={`${process.env.REACT_APP_IMAGES_BASE_URL}/profile.png`}
                    style={{
                        backgroundSize: '35px',
                    }}
                    tag="div"
                    title={isAtHome ? 'Sam' : undefined}
                />
            );

            if (!isAtHome)
                return (
                    <Link
                        className="profile-img nav-bar-link"
                        title="Go home"
                        to="/"
                    >
                        {img}
                    </Link>
                );

            return img;
        };

        return (
            <div className="nav-bar">
                <div className="nav-bar-links">
                    {profileImg()}
                    <Link
                        className="nav-bar-links__link nav-bar-link"
                        to="/about"
                        title="Go to the about page"
                    >
                        about
                    </Link>
                    <Link
                        className="nav-bar-links__link nav-bar-link"
                        href="https://linkedin.com/in/chasamuels"
                        title="Click to go to Sam's LinkedIn"
                    >
                        <IconText icon={['fab', 'linkedin']} text="" />
                    </Link>
                    <Link
                        className="nav-bar-links__link nav-bar-link"
                        href="https://github.com/samscha"
                        title="Click to go to Sam's GitHub"
                    >
                        <IconText icon={['fab', 'github']} text="" />
                    </Link>
                    {/* <Link
                        className="nav-bar-links__link nav-bar-link"
                        href="https://www.medium.com/@samscha"
                        title="Click to go to Sam's blog on Medium"
                    >
                        <IconText icon={['fab', 'medium']} text="blog" />
                    </Link> */}
                    <Link
                        className="nav-bar-links__link nav-bar-link"
                        to="/contact"
                        title="Go to the contact page"
                    >
                        contact
                    </Link>
                </div>
            </div>
        );
    };

    return NavBar;
};
