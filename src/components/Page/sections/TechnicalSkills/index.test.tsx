import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import { Page } from '../..';
import { getElementWithin } from '../../testUtils';

test('renders technical skills', async () => {
  render(
    <Page
      technicalSkills={[
        { technicalSkill: 'Languages', skills: ['Skill A', 'Skill B'] },
        { technicalSkill: 'Frameworks', skills: ['Skill C'] },
        { technicalSkill: 'Developer Tools', skills: ['Skill D', 'Skill E'] },
      ]}
    />
  );

  const element = getElementWithin(screen.getByText('Technical Skills'));

  const expectTechnicalSkills = (technicalSkill: string, skills: string[]) => {
    expect(element.getByText(technicalSkill)).toBeInTheDocument();

    skills.forEach((skill) => {
      expect(
        element.getAllByText((content, _element) => content.includes(skill))
      ).toHaveLength(2); // mobile and desktop
    });
  };

  expectTechnicalSkills('Languages', ['Skill A', 'Skill B']);
  expectTechnicalSkills('Frameworks', ['Skill C']);
  expectTechnicalSkills('Developer Tools', ['Skill D', 'Skill E']);
});
