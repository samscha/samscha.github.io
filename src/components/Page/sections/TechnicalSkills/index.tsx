import { Props as PageProps } from '../../';
import './index.css';

interface Props extends Required<Pick<PageProps, 'technicalSkills'>> {}

export const TechnicalSkills = ({ technicalSkills }: Props) => {
  return (
    <div className="technical-skills">
      <div className="title h2 bold underline">Technical Skills</div>

      {technicalSkills
        .filter(({ skills }) => skills.length)
        .map(({ technicalSkill, skills }) => {
          const key = `technicalSkills-${technicalSkill}-${JSON.stringify(skills)}`;

          return (
            <div key={key} className="technical-skill">
              <div>
                <span className="bold">{technicalSkill}</span>:&nbsp;
              </div>

              <div className="mobile-only">
                {skills.map((skill, idx) => {
                  return <div key={`${key}-${skill}-${idx}`}>{skill}</div>;
                })}
              </div>
              <div className="desktop-only">{skills.join(', ')}</div>
            </div>
          );
        })}
    </div>
  );
};
