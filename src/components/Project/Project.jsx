import React from 'react';
import PropTypes from 'prop-types';
import './Project.scss';

export default ({ Image, Link }) => {
    const Project = ({ externalLink, image, info, name, techs }) => {
        return (
            <div className="project">
                <div className="name">{name}</div>
                <div className="techs">Built with: {techs}</div>
                {image && <Image {...image} className="image" />}
                <div className="info">{info}</div>
                {externalLink && (
                    <div className="external-link">
                        <Link {...externalLink}>More Info</Link>
                    </div>
                )}
            </div>
        );
    };

    Project.propTypes = {
        externalLink: PropTypes.object,
        image: PropTypes.object,
        info: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        techs: PropTypes.string.isRequired,
    };

    return Project;
};
