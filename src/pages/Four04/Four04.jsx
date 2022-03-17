import React from 'react';
import './Four04.scss';

export default ({ FontAwesomeIcon, NavLink, useNavigate }) => {
    const Four04 = () => {
        const iconSize = '2x';
        const navigate = useNavigate();

        return (
            <div className="four04">
                <div className="title">404</div>
                <div className="description">page not found</div>

                <div
                    className="link"
                    title="Go back to the previous page"
                    onClick={() => navigate(-1)}
                >
                    <FontAwesomeIcon
                        icon={['fas', 'arrow-left']}
                        size={iconSize}
                        fixedWidth
                    />
                </div>

                <NavLink className="link" title="Go home" to="/">
                    <FontAwesomeIcon
                        icon={['fas', 'house']}
                        size={iconSize}
                        fixedWidth
                    />
                </NavLink>
            </div>
        );
    };
    return Four04;
};
