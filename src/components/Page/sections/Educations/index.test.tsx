import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Page } from '../../';
import { getElementWithin, getIncludedText } from '../../testUtils';

describe('Educations', () => {
  it('renders educations', async () => {
    render(
      <Page
        educations={[
          {
            institution: 'Life',
            focus: 'Adulting',
            location: 'USA',
            start: '2000',
            end: null,
            present: true,
          },
        ]}
      />
    );

    const element = getElementWithin(screen.getByText('Education'));
    const getText = (text: string) => element.getByText(getIncludedText(text));

    expect(getText('Life')).toBeInTheDocument();
    expect(getText('Adulting')).toBeInTheDocument();
    expect(getText('USA')).toBeInTheDocument();
    expect(getText('2000')).toBeInTheDocument();
    expect(getText('Present')).toBeInTheDocument();
  });

  it("doesn't render Present when education not present", async () => {
    render(
      <Page
        educations={[
          {
            institution: 'College',
            focus: 'N/A',
            location: 'N/A',
            start: '1999',
            end: '2000',
            present: false,
          },
        ]}
      />
    );

    const element = getElementWithin(screen.getByText('Education'));
    expect(element.queryByText('Present')).toBeNull();
  });
});
