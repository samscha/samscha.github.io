import React from 'react';
import './NavBar.scss';

export default ({ IconText, Image, Link, navBarLinks, useLocation }) => {
    const NavBar = () => {
        const location = useLocation();
        const isAtHome = location.pathname === '/';
        const filteredNavBarLinks = navBarLinks.filter((l) => l.enabled);

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
                    {filteredNavBarLinks.map((link) => (
                        <Link
                            key={JSON.stringify(link)}
                            className="nav-bar-links__link nav-bar-link"
                            to={link.to}
                            href={link.href}
                            title={link.title}
                        >
                            <>
                                {link.icon && (
                                    <IconText icon={link.icon} text="" />
                                )}
                                {link.text && link.text}
                            </>
                        </Link>
                    ))}
                </div>
            </div>
        );
    };

    // TODO navBarLinks should be a prop of <NavBar />

    return NavBar;
};
