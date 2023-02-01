import React, { Component } from 'react';
import { connect } from 'react-redux';

// import * as a from '../../actions';

import * as c from '../';

// const fetchProjects = a.p.fetchProjects;

import projects from './projects.tmp';

export default connect(
  // state => ({ projects: state.projects }),
  (_) => ({}),
  {}
)(
  // { fetchProjects },
  class extends Component {
    componentWillMount() {
      // this.props.fetchProjects('recent');
    }

    render() {
      return (
        <div className="Projects">
          {projects.map((project) => {
            return <c.Project key={project.title} project={project} />;
          })}
        </div>
      );
    }
  }
);
