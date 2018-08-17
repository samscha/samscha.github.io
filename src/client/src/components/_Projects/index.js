import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as a from '../../actions';

import * as c from '../';

const fetchProjects = a.p.fetchProjects;

export default connect(
  state => ({ projects: state.projects }),
  { fetchProjects },
)(
  class extends Component {
    componentWillMount() {
      // this.props.fetchProjects('recent');
    }

    render() {
      return (
        <div className="Projects">
          {this.props.projects.map(project => {
            return <c.Project key={project.title} project={project} />;
          })}
        </div>
      );
    }
  },
);
