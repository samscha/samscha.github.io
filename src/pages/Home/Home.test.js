import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Home from './Home.jsx';

describe.skip(`Home`, function () {
  const baseProps = {};

  it(`should render without errors`, function () {
    render(<Home {...baseProps} />);
  });
});
