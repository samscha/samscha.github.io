import { Props as PageProps } from '../../';
import './index.css';

interface Props extends Required<Pick<PageProps, 'projects'>> {}

export const Projects = ({ projects }: Props) => {
  return (
    <div className="projects">
      <div className="title h2 bold underline">Projects</div>

      {projects.map((project) => {
        const { name, tools, start, present, descriptions } = project;

        const end = present ? 'Present' : project.end;
        const key = `projects-${JSON.stringify(project)}`;

        return (
          <div key={key} className="project">
            <div className="project-row">
              <div className="info">
                <span className="bold">{name}</span>

                <span className="mobile-only">
                  <span className="tools">
                    {tools.map((tool, idx) => {
                      return (
                        <span
                          key={`${key}-${tool}-${idx}`}
                          className="tool italic"
                        >
                          {tool}
                        </span>
                      );
                    })}
                  </span>
                </span>
                <span className="desktop-only italic">
                  &nbsp;&#65372;&nbsp;{tools.join(', ')}
                </span>
              </div>

              <span>
                {start}&nbsp;&mdash;&nbsp;{end}
              </span>
            </div>

            {!!descriptions.length && (
              <div className="project-row">
                <ul>
                  {descriptions.map((description, idx) => {
                    return (
                      <li key={`${key}-${description}-${idx}`}>
                        {description}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
