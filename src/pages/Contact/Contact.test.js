import React from 'react';
import { shallow } from 'enzyme';
import Contact from './Contact.jsx';

describe(`Contact`, function() {
    const baseProps = {};
    const baseContact = shallow(<Contact {...baseProps} />);
    it(`should render without errors`, function() {
        baseContact;
    });
});
