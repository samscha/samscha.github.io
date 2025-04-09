import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Page } from '../..';

describe('Links', () => {
  it('renders links', async () => {
    const { container } = render(
      <Page
        links={[
          {
            href: 'to/link',
            text: 'Render Text',
            title: 'Link title',
          },
        ]}
      />
    );

    const links = container.getElementsByClassName('links');
    expect(links).toHaveLength(1);

    const link = screen.getByText('Render Text');
    expect(link).toBeInTheDocument();
    expect(link.getAttribute('href')).toBe('to/link');
    expect(link.getAttribute('title')).toBeDefined();
  });
});
