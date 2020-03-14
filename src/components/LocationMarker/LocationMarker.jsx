import React from 'react';
import PropTypes from 'prop-types';
import { IconText } from '../../components';

export default () => {
    const LocationMarker = ({ location }) => {
        return <IconText icon={['fas', 'map-marker-alt']} text={location} />;
    };

    LocationMarker.propTypes = {
        location: PropTypes.string.isRequired,
    };

    return LocationMarker;
};
