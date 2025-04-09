import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Page } from '../..';
import { getElementWithin, getIncludedText } from '../../testUtils';

describe('Projects', () => {
  it('renders projects', async () => {
    render(
      <Page
        projects={[
          {
            name: 'My Project',
            tools: ['React', 'TypeScript', 'Vite', 'Git'],
            start: '1/2020',
            end: null,
            present: true,
            descriptions: ['Use tools', 'Use other tools'],
          },
        ]}
      />
    );

    const element = getElementWithin(screen.getByText('Projects'));
    const getText = (text: string) => element.getByText(getIncludedText(text));
    const getTexts = (text: string) =>
      element.getAllByText(getIncludedText(text));

    expect(getText('My Project')).toBeInTheDocument();
    expect(getTexts('React')).toHaveLength(2);
    expect(getTexts('TypeScript')).toHaveLength(2);
    expect(getTexts('Vite')).toHaveLength(2);
    expect(getTexts('Git')).toHaveLength(2);
    expect(getText('1/2020')).toBeInTheDocument();
    expect(getText('Present')).toBeInTheDocument();
    expect(getText('Use tools')).toBeInTheDocument();
    expect(getText('Use other tools')).toBeInTheDocument();
  });

  it("doesn't render Present when project not present", async () => {
    render(
      <Page
        projects={[
          {
            name: 'Your Project',
            tools: ['Unknown'],
            start: '12/1999',
            end: '12/1999',
            present: false,
            descriptions: [],
          },
        ]}
      />
    );

    const element = getElementWithin(screen.getByText('Projects'));
    expect(element.queryByText('Present')).toBeNull();
  });
});
