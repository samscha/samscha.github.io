import React from 'react';
import './Footer.scss';

export default ({ IconText, Link, useLocation }) => {
    const Footer = () => {
        const location = useLocation();
        const isAbout = location.pathname === '/about';
        const isContact = location.pathname === '/contact';

        return (
            <div className="footer">
                <div className="footer-links">
                    <div />
                    <Link
                        className="footer-links__link"
                        to={isAbout ? '/' : '/about'}
                        title={isAbout ? 'Go home' : 'Go to the about page'}
                    >
                        {isAbout ? 'home' : 'about'}
                    </Link>
                    <Link
                        className="footer-links__link"
                        href="https://www.medium.com/@samscha"
                        title="Click to go to Sam's blog on Medium"
                    >
                        <IconText icon={['fab', 'medium']} text="blog" />
                    </Link>
                    <Link
                        className="footer-links__link"
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

    return Footer;
};
