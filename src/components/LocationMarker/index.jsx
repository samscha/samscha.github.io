import React from 'react';
import PropTypes from 'prop-types';

import { IconText } from '../index';

export default class extends React.Component {
  static propTypes = {
    myLocation: PropTypes.string.isRequired,
  };
  static defaultProps = {
    myLocation: 'Austin, TX',
  };

  render() {
    const { myLocation } = this.props;

    return <IconText icon={['fas', 'map-marker-alt']} text={myLocation} />;
  }
}
