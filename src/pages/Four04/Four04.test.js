import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Four04 from './index.js';

describe.skip(`Four04`, function () {
  const baseProps = {};

  it(`should render without errors`, function () {
    render(<Four04 {...baseProps} />);
  });
});
