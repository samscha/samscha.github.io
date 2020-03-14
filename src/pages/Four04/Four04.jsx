import React from 'react';
import './Four04.scss';

export default ({ FontAwesomeIcon, NavLink, useHistory }) => {
    const Four04 = () => {
        const iconSize = '2x';
        const history = useHistory();

        return (
            <div className="four04">
                <div className="title">404</div>
                <div className="description">page not found</div>

                <div
                    className="link"
                    title="Go back to the previous page"
                    onClick={() => history.goBack()}
                >
                    <FontAwesomeIcon
                        icon={['fas', 'arrow-left']}
                        size={iconSize}
                        fixedWidth
                    />
                </div>

                <NavLink className="link" title="Go home" to="/">
                    <FontAwesomeIcon
                        icon={['fas', 'home']}
                        size={iconSize}
                        fixedWidth
                    />
                </NavLink>
            </div>
        );
    };
    return Four04;
};
