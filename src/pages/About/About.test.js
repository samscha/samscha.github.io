import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import aboutComponentFactory from './About.jsx';

describe(`About`, function () {
  const baseComponentProps = { data: { info: [] } };
  let About;

  const baseProps = {};

  beforeEach(() => {
    About = aboutComponentFactory({ ...baseComponentProps });
  });

  it(`should render without errors`, function () {
    render(<About {...baseProps} />);
  });
});
