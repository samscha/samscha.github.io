import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import * as a from '../../actions';

import * as c from '../';

// MOVE THESE TO THE BACKEND **************************************************
const techs = [
  { text: 'AWS', icon: ['fab', 'aws'], opacity: '0.25' },
  { text: 'C', custom: 'icon-c', opacity: '0.25' },
  { text: 'CSS3', icon: ['fab', 'css3-alt'] },
  { text: 'CLI', custom: 'icon-shell' },
  { text: 'Git', icon: ['fab', 'github'] },
  { text: 'Heroku', custom: 'icon-heroku' },
  { text: 'HTML5', icon: ['fab', 'html5'] },
  { text: 'JavaScript', icon: ['fab', 'js-square'] },
  { text: 'LESS', icon: ['fab', 'less'] },
  { text: 'macOS', icon: ['fab', 'apple'] },
  { text: 'Mongo', custom: 'icon-mongodb' },
  { text: 'mySQL', custom: 'icon-mysql-alt', opacity: '0.25' },
  { text: 'Node.js', icon: ['fab', 'node-js'] },
  { text: 'npm', icon: ['fab', 'npm'] },
  { text: 'Python', icon: ['fab', 'python'], opacity: '0.50' },
  { text: 'React', icon: ['fab', 'react'] },
];

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

          <div className="TechnologyBar__c">
            <p className="TechnologyBar__p">icons</p>
            <p className="TechnologyBar__p">by</p>

            <a
              className="TechnologyBar__link"
              href="https://fontawesome.com/"
              rel="noopener noreferrer"
              target="_null"
            >
              <FontAwesomeIcon icon={['fab', 'font-awesome']} />
            </a>

            <p className="TechnologyBar__p">and</p>
            <a
              className="TechnologyBar__link"
              href="http://fizzed.com/oss/font-mfizz"
              rel="noopener noreferrer"
              target="_null"
            >
              <p>Fizzed</p>
            </a>
          </div>
        </div>
      );
    }
  },
);
