import React, { Component } from 'react';
import { connect } from 'react-redux';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import * as a from '../../actions';

import * as c from '../';

import techs from './technologies.tmp';

export default connect(
  state => ({ projects: state.projects }),
  {},
)(
  class extends Component {
    componentWillMount() {
      // this.props.fetchProjects('recent');
    }

    render() {
      return (
        <div className="TechnologyBar">
          <div className="TechnologyBar__grid">
            {techs.map(tech => (
              <c.Technology key={tech.text} tech={tech} />
            ))}
          </div>
        </div>
      );
    }
  },
);
