import { Props as PageProps } from '../../';
import './index.css';

interface Props extends Required<Pick<PageProps, 'experiences'>> {}

export const Experiences = ({ experiences }: Props) => {
  return (
    <div className="experiences">
      <div className="title h2 bold underline">Experiences</div>

      {experiences.map((experience) => {
        const { title, start, present, company, location, descriptions } =
          experience;

        const end = present ? 'Present' : experience.end;
        const key = `experiences-${JSON.stringify(experience)}`;

        return (
          <div key={key} className="experience">
            <div className="experience-row">
              <span className="bold">{title}</span>
              <span>
                {start}&nbsp;&mdash;&nbsp;{end}
              </span>
            </div>

            <div className="experience-row">
              <span className="italic">{company}</span>
              <span className="italic">{location}</span>
            </div>

            {!!descriptions.length && (
              <div className="experience-row">
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
