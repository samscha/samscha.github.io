import React from 'react';
import './NavBar.scss';

export default ({ IconText, Link, useLocation }) => {
    const NavBar = () => {
        const location = useLocation();
        const isAbout = location.pathname === '/about';
        const isContact = location.pathname === '/contact';

        return (
            <div className="nav-bar">
                <div className="nav-bar-links">
                    <div />
                    <Link
                        className="nav-bar-links__link"
                        to={isAbout ? '/' : '/about'}
                        title={isAbout ? 'Go home' : 'Go to the about page'}
                    >
                        {isAbout ? 'home' : 'about'}
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
                        to={isContact ? '/' : '/contact'}
                        title={isContact ? 'Go home' : 'Go to the contact page'}
                    >
                        {isContact ? 'home' : 'contact'}
                    </Link>
                    <div />
                </div>
            </div>
        );
    };

    return NavBar;
};
