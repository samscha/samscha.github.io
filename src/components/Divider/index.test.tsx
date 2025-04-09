import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Divider } from '../';

describe('Divider', () => {
  it('renders divider', async () => {
    const { container } = render(<Divider />);

    const divider = container.firstChild;
    expect(divider).toHaveClass('divider');

    const dividerLine = divider!.firstChild;
    expect(dividerLine).toHaveClass('divider-line');
  });

  it('handles classNames', async () => {
    const { container } = render(<Divider classNames={['test-id']} />);

    const divider = container.firstChild;
    expect(divider).toHaveClass('test-id');
  });

  it('handles 2x size', async () => {
    const { container } = render(<Divider size="2x" />);

    const divider = container.firstChild;
    expect(divider).toHaveClass('md');
  });
});
