import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import * as a from '../../actions';

import * as c from '../';

// MOVE THESE TO THE BACKEND **************************************************
const techs = [
  {
    text: 'AWS',
    link: 'https://aws.amazon.com/',
    icon: ['fab', 'aws'],
    opacity: '0.25',
  },
  {
    text: 'C',
    link: 'https://en.wikipedia.org/wiki/C_(programming_language)',
    custom: 'icon-c',
    opacity: '0.25',
  },
  {
    text: 'CSS3',
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3',
    icon: ['fab', 'css3-alt'],
  },
  { text: 'CLI', link: 'https://www.iterm2.com/', custom: 'icon-shell' },
  { text: 'Git', link: 'https://github.com/samscha', icon: ['fab', 'github'] },
  { text: 'Heroku', link: 'https://www.heroku.com', custom: 'icon-heroku' },
  {
    text: 'HTML5',
    link: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
    icon: ['fab', 'html5'],
  },
  {
    text: 'JavaScript',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    icon: ['fab', 'js-square'],
  },
  { text: 'LESS', link: 'http://lesscss.org', icon: ['fab', 'less'] },
  {
    text: 'macOS',
    link: 'https://en.wikipedia.org/wiki/MacOS',
    icon: ['fab', 'apple'],
  },
  { text: 'Mongo', link: 'https://www.mongodb.com', custom: 'icon-mongodb' },
  {
    text: 'mySQL',
    link: 'https://www.mysql.com',
    custom: 'icon-mysql-alt',
    opacity: '0.25',
  },
  { text: 'Node.js', link: 'https://nodejs.org/en/', icon: ['fab', 'node-js'] },
  { text: 'npm', link: 'https://www.npmjs.com', icon: ['fab', 'npm'] },
  {
    text: 'Python',
    link: 'https://www.python.org',
    icon: ['fab', 'python'],
    opacity: '0.50',
  },
  { text: 'React', link: 'https://reactjs.org', icon: ['fab', 'react'] },
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
            <p className="TechnologyBar__p">icons by</p>
            {/* <p className="TechnologyBar__p">by</p> */}

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
