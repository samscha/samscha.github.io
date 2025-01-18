import { render } from '@testing-library/react';
import { expect, test } from 'vitest';
import { Divider } from '../';

test('renders divider', async () => {
  const { container } = render(<Divider />);

  const divider = container.firstChild;
  expect(divider).toHaveClass('divider');

  const dividerLine = divider!.firstChild;
  expect(dividerLine).toHaveClass('divider-line');
});

test('handles classNames', async () => {
  const { container } = render(<Divider classNames={['test-id']} />);

  const divider = container.firstChild;
  expect(divider).toHaveClass('test-id');
});

test('handles 2x size', async () => {
  const { container } = render(<Divider size="2x" />);

  const divider = container.firstChild;
  expect(divider).toHaveClass('md');
});
