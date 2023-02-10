import React from 'react';
import { useQuery } from 'react-query';

import './Home.scss';

export default ({
  ErrorText,
  IconsBy,
  Loading,
  LocationMarker,
  Project,
  TechIcon,
  projects,
}) => {
  const HomePage = () => {
    const apiBaseUri = process.env.REACT_APP_API_BASE_URL;

    const fetchLocation = async () => {
      const response = await fetch(`${apiBaseUri}/v1/location`);
      if (response.status !== 200) {
        throw new Error(JSON.stringify(response));
      }

      return response.json();
    };
    const fetchSkills = async () => {
      const response = await fetch(`${apiBaseUri}/v1/skills`);
      if (response.status !== 200) {
        throw new Error(JSON.stringify(response));
      }

      return response.json();
    };

    const locationQuery = useQuery('location', fetchLocation);
    const skillsQuery = useQuery('skills', fetchSkills);

    const filteredProjects = projects.filter((p) => p.enabled);
    const showProjects = JSON.parse(
      process.env.REACT_APP_SHOW_PROJECTS || 'false'
    );

    return (
      <div className="homepage">
        {(skillsQuery.isLoading || locationQuery.isLoading) && <Loading />}
        {skillsQuery.isSuccess && locationQuery.isSuccess && (
          <React.Fragment>
            <LocationMarker location={locationQuery.data.location} />

            {skillsQuery.data.primarySkills.length === 0 &&
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

            {skillsQuery.data.primarySkills.length > 0 && (
              <div className="technology-container">
                <div className="technology-bar">
                  {skillsQuery.data.primarySkills.map((tech) => (
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

            {skillsQuery.data.secondarySkills.length > 0 && (
              <div className="technology-container">
                <div className="technology-bar secondary">
                  {skillsQuery.data.secondarySkills.map((tech) => (
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
          </React.Fragment>
        )}

        {(skillsQuery.isError || locationQuery.isError) && <ErrorText />}
      </div>
    );
  };

  return HomePage;
};
