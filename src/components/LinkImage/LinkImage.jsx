import React from 'react';
import PropTypes from 'prop-types';

export default ({ Image, Link }) => {
    const LinkImage = ({ img: { alt, circle } }) => {};

    LinkImage.propTypes = {
        Image: PropTypes.element.isRequired,
        Link: PropTypes.element.isRequired,
    };

    return LinkImage;
};
