import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './index.scss';

import profileImg from '../../assets-tmp/profileImg.png';

import { IconsBy, IconText, Link, LocationMarker } from '../../components';
import { withLayout } from '../../layouts';

export default withLayout(
  withRouter(
    class extends React.Component {
      static propTypes = {
        infos: PropTypes.arrayOf(
          PropTypes.shape({
            text: PropTypes.string,
            title: PropTypes.string,
            link: PropTypes.string,
            external: PropTypes.bool,
            type: PropTypes.oneOf(['work', 'education', 'social']),
          }),
        ),
        infoText: PropTypes.string,
      };

      static defaultProps = {
        infos: [
          {
            text: 'NewPoint Media',
            title: `Click to go to NewPoint Media's website`,
            href: 'http://newpointmediagroup.com/',
            external: true,
            icon: ['fas', 'briefcase'],
            type: 'work',
          },
          {
            text: 'Lambda School',
            title: 'Click to learn more about Lambda School',
            href: 'https://lambdaschool.com/',
            external: true,
            icon: ['fas', 'graduation-cap'],
            type: 'education',
          },
          {
            text: 'University of Washington',
            title: 'Click to learn more about the University of Washington',
            href: 'https://sefs.uw.edu/students/undergraduate/bse-major/',
            external: true,
            icon: ['fas', 'graduation-cap'],
            type: 'education',
          },
          {
            text: 'samscha',
            href: 'https://github.com/samscha',
            title: `Click to go to Sam's GitHub`,
            external: true,
            icon: ['fab', 'github'],
            type: 'social',
          },
          {
            text: 'chasamuels',
            href: 'https://linkedin.com/in/chasamuels',
            title: `Click to go to Sam's LinkedIn`,
            external: true,
            icon: ['fab', 'linkedin'],
            type: 'social',
          },
          {
            text: 'chasamuels',
            href: 'https://twitter.com/chasamuels',
            title: `Click to go to Sam's Twitter`,
            external: true,
            icon: ['fab', 'twitter'],
            type: 'social',
          },
        ],
        infoText: `Hey there! Sam here. Thanks for visiting! Here's some more info about me.

I studied Bioresource Science & Engineering, formerly known as Paper Science Engineering, an ABET-accredited engineering program at the University of Washington in Seattle, WA.

I also went overseas with five others to lead English talking clubs at college and universities in a country with little to no access to native English speakers.

And although all of the above came with challenges and problems to solve, I was never excited to wake up and solve the day’s problems.

That is, until I enrolled in Lambda School’s Computer Science program. There, I went to a fully-remote classroom every weekday fulltime, mastering web development on the front end using React and Redux, configuring back end Express, Node.js, and Django servers, querying noSQL and SQL relational databases like MongoDB and Knex, as well as learning C to build CPUs and queues.

Nowadays, I'm working as a Software Engineer at NewPoint Media, a real estate and integrated marketing company in Austin, TX, with the goal of combining print and technology for the best home buying experience.

More info can also be found at:`,
      };

      getInfo = (types = []) => {
        const { infos } = this.props;

        return (
          infos.length > 0 && (
            <div className="infos-section">
              {infos
                .filter(info => types.includes(info.type))
                .map(info => {
                  const { href, icon, target, text, title } = info;

                  return (
                    href &&
                    icon &&
                    text &&
                    title && (
                      <div key={href} className="link-container">
                        <Link href={href} target={target} title={title}>
                          <IconText fixedWidth icon={icon} text={text} />
                        </Link>
                      </div>
                    )
                  );
                })}
            </div>
          )
        );
      };

      render() {
        const { infoText } = this.props;

        return (
          <div className="about-page">
            {profileImg && (
              <img
                className="profile-img"
                src={profileImg}
                alt="Samuel Cha"
                title="Samuel Cha"
              />
            )}

            <LocationMarker />

            {this.getInfo(['work', 'education'])}

            {infoText && <p className="info-text">{infoText}</p>}

            {this.getInfo(['social'])}

            <IconsBy fa />
          </div>
        );
      }
    },
  ),
);
