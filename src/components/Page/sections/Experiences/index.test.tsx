import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import { Page } from '../..';
import { getElementWithin, getIncludedText } from '../../testUtils';

test('renders experiences', async () => {
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

  const element = getElementWithin(screen.getByText('Experiences'));
  const getText = (text: string) => element.getByText(getIncludedText(text));

  expect(getText('CEO')).toBeInTheDocument();
  expect(getText('1/2000')).toBeInTheDocument();
  expect(getText('Present')).toBeInTheDocument();
  expect(getText('My Company')).toBeInTheDocument();
  expect(getText('Earth')).toBeInTheDocument();
  expect(getText('Do stuff')).toBeInTheDocument();
  expect(getText('Do more stuff')).toBeInTheDocument();
});

test("doesn't render Present when experience not present", async () => {
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
