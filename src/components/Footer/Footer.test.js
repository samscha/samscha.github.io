import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Footer from './index.js';

describe(`Footer`, function () {
  const baseProps = {};

  it(`should render without errors`, function () {
    render(<Footer {...baseProps} />);
  });
});
