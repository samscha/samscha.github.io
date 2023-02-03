import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home.jsx';

describe(`Home`, function () {
  const baseProps = {};
  const baseHome = shallow(<Home {...baseProps} />);

  it(`should render without errors`, function () {
    baseHome;
  });
});
