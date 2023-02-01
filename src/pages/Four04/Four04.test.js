import React from 'react';
import { shallow } from 'enzyme';
import Four04 from './Four04.jsx';

describe(`Four04`, function () {
  const baseProps = {};
  const baseFour04 = shallow(<Four04 {...baseProps} />);

  it(`should render without errors`, function () {
    baseFour04;
  });
});
