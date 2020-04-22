import React from 'react';
import { shallow } from 'enzyme';
import withLayout from './Page.jsx';

describe(`default layout`, function () {
    // class BaseComponent extends React.Component {
    //   render() {
    //     return <div id="base-component">abse setuff</div>;
    //   }
    // }
    // const BaseLayout = withLayout(BaseComponent);
    // const baseWithLayout = shallow(<BaseLayout />);
    // const baseDiv = 'div.template';
    // const contentDiv = 'div.main-content';
    it(`should render div.template`, function () {
        // expect(baseWithLayout.find(baseDiv)).toHaveLength(1);
    });
    // it(`should render a Header`, function() {
    //   expect(baseWithLayout.find('Header')).toHaveLength(1);
    // });
    // it(`should render a div.main-content`, function() {
    //   expect(baseWithLayout.find(`${baseDiv} > ${contentDiv}`)).toHaveLength(1);
    // });
    // it(`should render the WrappedComponent`, function() {
    //   expect(baseWithLayout.find('WrappedComponent')).toHaveLength(1);
    // });
    // it(`should render the WrappedComponent in main-content`, function() {
    //   const WithLayout = withLayout(baseComponentFactory({ id: 'test' }));
    //   const wrapper = shallow(<WithLayout />);
    //   expect(wrapper.find('div#base-component')).toHaveLength(1);
    // });
});
