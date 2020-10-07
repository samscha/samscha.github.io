import React from 'react';
import './Home.scss';

export default ({
    IconsBy,
    LocationMarker,
    Project,
    TechIcon,
    projects,
    techs,
}) => {
    const HomePage = () => {
        const primaryTechs = techs.filter(
            (t) => t.set === 'primary' && t.enabled,
        );
        const secondaryTechs = techs.filter(
            (t) => t.set === 'secondary' && t.enabled,
        );
        const filteredProjects = projects.filter((p) => p.enabled);

        return (
            <div className="homepage">
                <LocationMarker location="Austin, TX" />

                {primaryTechs.length > 0 && (
                    <div className="technology-container">
                        <div className="technology-bar">
                            {primaryTechs
                                .sort((a, b) => {
                                    a = a.text.toUpperCase();
                                    b = b.text.toUpperCase();

                                    if (a < b) return -1;
                                    if (a > b) return 1;
                                    return 0;
                                })
                                .map((tech) => (
                                    <div
                                        key={tech.link}
                                        className="technology-bar__icon"
                                    >
                                        <TechIcon {...tech} size="xs" />
                                    </div>
                                ))}
                        </div>
                    </div>
                )}

                {secondaryTechs.length > 0 && (
                    <div className="technology-container">
                        <div className="technology-bar secondary">
                            {secondaryTechs
                                .sort((a, b) => {
                                    a = a.text.toUpperCase();
                                    b = b.text.toUpperCase();

                                    if (a < b) return -1;
                                    if (a > b) return 1;
                                    return 0;
                                })
                                .map((tech) => (
                                    <div
                                        key={tech.link}
                                        className="technology-bar__icon"
                                    >
                                        <TechIcon {...tech} text="" />
                                    </div>
                                ))}
                        </div>
                    </div>
                )}

                <div className="projects">
                    <div className="title">Projects</div>

                    {filteredProjects.length > 0 ? (
                        filteredProjects.map((project) => (
                            <div
                                key={project.name}
                                className="project-container"
                            >
                                <Project {...project} />
                            </div>
                        ))
                    ) : (
                        <div className="no-projects-title">
                            No Projects To Show
                        </div>
                    )}
                </div>

                <IconsBy fa fz />
            </div>
        );
    };

    return HomePage;
};
