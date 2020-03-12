import React from 'react';
import './Header.scss';

export default ({ Image, useHistory, useLocation }) => {
    const Header = () => {
        const history = useHistory();
        const location = useLocation();
        const imageProps = {};

        if (location.pathname !== '/') {
            imageProps.onClick = () => {
                history.push('/');
            };
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
                            // tag="div"
                            title="Sam"
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
