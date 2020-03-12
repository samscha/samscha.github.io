import React from 'react';
import PropTypes from 'prop-types';
import './IconText.scss';

export default ({ FontAwesomeIcon }) => {
    const IconText = ({ icon, fixedWidth, text }) => {
        return (
            <div className="icon-text">
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
        text: PropTypes.string.isRequired,
    };

    IconText.defaultProps = {
        fixedWidth: false,
    };

    return IconText;
};
