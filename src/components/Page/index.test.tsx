import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import { Page } from '../';

test('renders Page', async () => {
  const { container } = render(<Page />);

  expect(container.getElementsByClassName('page')).toHaveLength(1);
});

test("doesn't render sections", async () => {
  render(<Page />);

  expect(screen.queryByRole('link')).toBeNull();
  expect(screen.queryByText('Technical Skills')).toBeNull();
  expect(screen.queryByText('Experiences')).toBeNull();
  expect(screen.queryByText('Projects')).toBeNull();
  expect(screen.queryByText('Education')).toBeNull();
});

test('renders header', async () => {
  render(<Page />);

  const header = screen.getByText('Samuel Cha');
  expect(header).toBeInTheDocument();
});

test('renders subheader', async () => {
  render(<Page />);

  const subheader = screen.getByText('Seattle, WA');
  expect(subheader).toBeInTheDocument();
});

test('renders footer', async () => {
  const { container } = render(<Page />);

  const footer = container.getElementsByClassName('footer');
  expect(footer).toHaveLength(1);
});
