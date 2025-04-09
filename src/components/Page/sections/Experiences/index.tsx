import { Props as PageProps } from '../../index';
import * as utils from './utils';
import './index.css';

interface Props extends Required<Pick<PageProps, 'experiences'>> {}

export const Experiences = (props: Props) => {
  const experiences = props.experiences.map((experience) => {
    const { start, end, present } = experience;
    const from = start;
    const to = present || !end ? utils.getCurrentMonthYear() : end;

    const duration = utils.getExperienceDurationText({
      from,
      to,
    });

    const durationMonths = utils.getTotalMonths(
      utils.formatFromAndToMonthYear({ monthYearFrom: from, monthYearTo: to })
    );

    return {
      ...experience,
      duration,
      durationMonths,
    };
  });

  const totalExperienceDuration = utils.getTotalExperienceDurationText({
    months: experiences.reduce((totalMonths, experience) => {
      return totalMonths + experience.durationMonths;
    }, 0),
  });

  return (
    <div className="experiences">
      <div className="title h2">
        <span className="bold underline">Experiences</span> (
        {totalExperienceDuration})
      </div>

      {experiences.map((experience) => {
        const {
          title,
          start,
          duration,
          present,
          company,
          location,
          descriptions,
        } = experience;

        const end = present ? 'Present' : experience.end;

        const key = `experiences-${JSON.stringify(experience)}`;

        return (
          <div key={key} className="experience">
            <div className="mobile-only">
              <div className="experience-row mobile-only">
                <div className="bold">{title}</div>
                <div>
                  {start}&nbsp;&mdash;&nbsp;{end} ({duration})
                </div>
              </div>
            </div>
            <div className="desktop-only">
              <div className="experience-row">
                <div>
                  <span className="bold">{title}</span> ({duration})
                </div>
                <div>
                  {start}&nbsp;&mdash;&nbsp;{end}
                </div>
              </div>
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
