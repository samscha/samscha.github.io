import { Props as PageProps } from '../../';
import './index.css';

interface Props extends Required<Pick<PageProps, 'educations'>> {}

export const Educations = ({ educations }: Props) => {
  return (
    <div className="educations">
      <div className="title h2 bold underline">Education</div>

      {educations.map((education) => {
        const { institution, location, focus, start, present } = education;

        const end = present ? 'Present' : education.end;
        const key = `experiences-${JSON.stringify(education)}`;

        return (
          <div key={key} className="education">
            <div className="education-row">
              <span className="bold">{institution}</span>
              <span>{location}</span>
            </div>

            <div className="education-row">
              <span className="italic">{focus}</span>
              <span className="italic">
                {start}&nbsp;&mdash;&nbsp;{end}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
