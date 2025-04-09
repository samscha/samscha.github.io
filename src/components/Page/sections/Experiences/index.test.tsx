import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Page } from '../..';
import { getElementWithin, getIncludedText } from '../../testUtils';

describe('Experiences', () => {
  it('renders experiences', async () => {
    render(
      <Page
        experiences={[
          {
            title: 'CEO',
            company: 'My Company',
            start: '1/2000',
            end: null,
            present: true,
            location: 'Earth',
            descriptions: ['Do stuff', 'Do more stuff'],
          },
        ]}
      />
    );

    const element = getElementWithin(
      screen.getByText('Experiences').parentElement!
    );
    const getElements = (text: string) =>
      element.getAllByText(getIncludedText(text));
    const getTexts = (text: string) => {
      const elements = getElements(text);

      if (elements.length === 1) {
        return elements[0];
      }

      return elements;
    };

    expect(getTexts('CEO')).toHaveLength(2);
    expect(getTexts('1/2000')).toHaveLength(2);
    expect(getTexts('Present')).toHaveLength(2);
    expect(getTexts('My Company')).toBeInTheDocument();
    expect(getTexts('Earth')).toBeInTheDocument();
    expect(getTexts('Do stuff')).toBeInTheDocument();
    expect(getTexts('Do more stuff')).toBeInTheDocument();
  });

  it("doesn't render Present when experience not present", async () => {
    render(
      <Page
        experiences={[
          {
            title: 'CTO',
            company: 'Your Company',
            start: '12/1999',
            end: '12/1999',
            present: false,
            location: 'Your Place',
            descriptions: [],
          },
        ]}
      />
    );

    const element = getElementWithin(screen.getByText('Experiences'));
    expect(element.queryByText('Present')).toBeNull();
  });
});
