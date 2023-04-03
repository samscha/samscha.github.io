import React from 'react';

import './Home.scss';

export default ({
  IconsBy,
  LocationMarker,
  Project,
  TechIcon,
  projects,
  data: {
    location,
    skills: { primarySkills, secondarySkills },
  },
}) => {
  const HomePage = () => {
    const filteredProjects = projects.filter((p) => p.enabled);
    const showProjects = JSON.parse(
      process.env.REACT_APP_SHOW_PROJECTS || 'false'
    );

    return (
      <div className="homepage">
          <LocationMarker location={location} />

          {primarySkills.length === 0 &&
            skills.secondarySkills.length === 0 && (
              <div className="technology-container">
                <div className="technology-bar">
                  <div key="no-skills-key" className="technology-bar__icon">
                    <TechIcon
                      {...{
                        icon: [`far`, `file`],
                        link: `#`,
                        text: `No Skills`,
                        title: 'No technical skills to show',
                        type: 'fa',
                      }}
                    />
                  </div>
                </div>
              </div>
            )}

          {primarySkills.length > 0 && (
            <div className="technology-container">
              <div className="technology-bar">
                {primarySkills.map((tech) => (
                  <div key={tech.link} className="technology-bar__icon">
                    <TechIcon
                      {...tech}
                      size="xs"
                      className={tech.text.length > 10 ? 'xl' : ''}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {secondarySkills.length > 0 && (
            <div className="technology-container">
              <div className="technology-bar secondary">
                {secondarySkills.map((tech) => (
                  <div key={tech.link} className="technology-bar__icon">
                    <TechIcon {...tech} text="" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {showProjects ? (
            <div className="projects">
              <div className="title">Projects</div>
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <div key={project.name} className="project-container">
                    <Project {...project} />
                  </div>
                ))
              ) : (
                <div className="no-projects-title">No Projects To Show</div>
              )}
            </div>
          ) : null}

          <IconsBy fa fz />
      </div>
    );
  };

  return HomePage;
};
