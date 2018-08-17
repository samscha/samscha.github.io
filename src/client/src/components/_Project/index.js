import React, { Component } from 'react';
import { connect } from 'react-redux';

// import * as a from '../../actions';
import * as c from '../';

import techs from '../_TechnologyBar/technologies.tmp';

// import projectThumb from '../../assets-tmp/pic-me.jpg';

export default connect(
  state => ({}),
  {},
)(
  class extends Component {
    componentWillMount() {
      // this.props.fetchProjects('recent');
    }

    render() {
      const {
        description,
        // thumbAlt,
        subtitle,
        technologies,
        title,
        urls,
      } = this.props.project;
      return (
        <div className="Project">
          {/* <div className="ProjectImage">
            <img src={projectThumb} alt={thumbAlt} />
          </div> */}

          <div className="ProjectBody">
            <a
              className="ProjectHeader"
              href={urls.find(u => u.text === 'Demo').link}
              target="_null"
              rel="noopener noreferrer"
            >
              <div className="ProjectHeader__title">{title}</div>

              <div className="ProjectHeader__subtitle">{subtitle}</div>
            </a>

            <div className="Project__description">{description}</div>

            <div className="Project__links">
              {urls.map(url => {
                return (
                  <a
                    key={url.link}
                    className="ProjectLinkTo"
                    href={url.link}
                    target="_null"
                    rel="noopener noreferrer"
                  >
                    {url.text}
                  </a>
                );
              })}
            </div>

            <div className="Project__technologies">
              {technologies.map(t => {
                const text = t.technology;
                const link = t.link;
                const icon = t.icon;
                const custom = t.custom;

                const iconConfig = techs.find(tech => tech.text === text);
                let iconCustomConfig;

                if (!iconConfig)
                  iconCustomConfig = {
                    text,
                    link,
                    icon: icon ? icon : custom ? null : 'code',
                    custom: custom ? custom : null,
                  };

                return (
                  <c.Technology
                    key={iconConfig ? iconConfig.text : text}
                    tech={iconConfig || iconCustomConfig}
                  />
                );
              })}
            </div>
          </div>
        </div>
      );
    }
  },
);
