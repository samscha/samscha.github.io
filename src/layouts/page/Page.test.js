import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Page from './index.js';

describe.skip(`default layout`, function () {
  const baseProps = {};

  it(`should render div.template`, function () {
    render(<Page {...baseProps} />);
  });
});
