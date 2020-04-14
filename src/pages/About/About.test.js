import React from 'react';
import { shallow } from 'enzyme';
import About from './About.jsx';

describe(`About`, function () {
    const baseProps = {};
    const baseAbout = shallow(<About {...baseProps} />);

    it(`should render without errors`, function () {
        baseAbout;
    });
});
