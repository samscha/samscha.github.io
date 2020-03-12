import React from 'react';
import './Home.scss';

export default ({ IconsBy, LocationMarker, TechIcon, techs }) => {
    const HomePage = () => {
        return (
            <div className="homepage">
                <LocationMarker location="Austin, TX" />

                {techs.length > 0 && (
                    <div className="technology-container">
                        <div className="technology-bar">
                            {techs
                                .sort((a, b) => {
                                    a = a.text.toUpperCase();
                                    b = b.text.toUpperCase();

                                    if (a < b) return -1;
                                    if (a > b) return 1;
                                    return 0;
                                })
                                .map(tech => (
                                    <div
                                        key={tech.link}
                                        className="technology-bar__icon"
                                    >
                                        <TechIcon {...tech} />
                                    </div>
                                ))}
                        </div>
                    </div>
                )}

                <IconsBy fa fz />

                {/* {projects.length > 0 && (
            <div className="projects">
              Projects
              {projects.map(project => (
                <div key={project.id} className="projects__project">
                  <Project {...project} />
                </div>
              ))}
            </div>
          )} */}
            </div>
        );
    };

    return HomePage;
};
