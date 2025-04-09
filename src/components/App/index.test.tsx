import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { App } from '../';

describe('App', () => {
  it('renders content', async () => {
    render(<App renderContent={<div data-testid="app-id" />} />);

    expect(screen.getByTestId('app-id')).toBeInTheDocument();
  });
});
