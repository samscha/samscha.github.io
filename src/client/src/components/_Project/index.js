import React, { Component } from 'react';
import { connect } from 'react-redux';

// import * as a from '../../actions';

export default connect(
  state => ({}),
  {},
)(
  class extends Component {
    componentWillMount() {
      // this.props.fetchProjects('recent');
    }

    render() {
      const { title } = this.props.project;

      return <div className="Project">{title}</div>;
    }
  },
);
