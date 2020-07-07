import React from 'react';
import PropTypes from 'prop-types';
import './IconText.scss';

export default ({ FontAwesomeIcon }) => {
    const IconText = ({ icon, fixedWidth, text }) => {
        const className = [];

        text && className.push('icon-text');

        return (
            <div
                className={
                    className.length > 0 ? className.join(' ') : undefined
                }
            >
                <FontAwesomeIcon
                    className="icon"
                    icon={icon}
                    fixedWidth={fixedWidth}
                />
                {text}
            </div>
        );
    };

    IconText.propTypes = {
        fixedWidth: PropTypes.bool,
        icon: PropTypes.arrayOf(PropTypes.string).isRequired,
        text: PropTypes.string,
    };

    IconText.defaultProps = {
        fixedWidth: false,
    };

    return IconText;
};
