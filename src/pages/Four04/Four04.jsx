import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class extends React.Component {
    iconSize = '2x';

    render() {
        const { history } = this.props;

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
                        size={this.iconSize}
                        fixedWidth
                    />
                </div>

                <NavLink className="link" title="Go home" to="/">
                    <FontAwesomeIcon
                        icon={['fas', 'home']}
                        size={this.iconSize}
                        fixedWidth
                    />
                </NavLink>
            </div>
        );
    }
}
