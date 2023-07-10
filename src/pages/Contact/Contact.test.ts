import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import contactComponentFactory from './Contact.jsx';
import IconText from '../../components/IconText/index.js';
import Contact from './index.js';

describe.skip(`Contact`, function () {
  // const baseComponentProps = {
  //   IconText,
  //   data: { contacts: [] },
  // };
  // let Contact;

  const baseProps = {};

  // beforeEach(() => {
  //   Contact = contactComponentFactory({ ...baseComponentProps });
  // });

  it.skip(`should render without errors`, function () {
    // render(<Contact {...baseProps} />);
  });
});
