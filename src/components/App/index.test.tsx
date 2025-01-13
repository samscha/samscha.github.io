import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import App from './';

test('renders App', async () => {
  render(<App />);

  expect(screen.getByText('APP')).toBeInTheDocument();
});
