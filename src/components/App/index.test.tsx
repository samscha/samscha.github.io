import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import { App } from '../';

test('renders content', async () => {
  render(<App renderContent={<div data-testid="app-id" />} />);

  expect(screen.getByTestId('app-id')).toBeInTheDocument();
});
