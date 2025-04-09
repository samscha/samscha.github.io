import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Link } from '../';

describe('Link', () => {
  it('renders link', async () => {
    render(<Link href="to/url" text="Link text" title="Link title" />);

    const link = screen.getByText('Link text');

    expect(link).toBeInTheDocument();
    expect(link.getAttribute('href')).toBe('to/url');
    expect(link.getAttribute('title')).toBe('Link title');
    expect(link.getAttribute('target')).toBe('_blank');
    expect(link.getAttribute('rel')).toBe('noreferrer noopener');
  });

  it('handles classNames', async () => {
    const { container } = render(
      <Link href="" text="" title="" classNames={['class-1', 'class-2']} />
    );

    const linkContainer = container.firstChild;
    expect(linkContainer).toHaveClass('class-1');
    expect(linkContainer).toHaveClass('class-2');
  });
});
