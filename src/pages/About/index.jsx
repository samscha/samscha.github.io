import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import infos from '../../assets/js/about/infos';
import infoText from '../../assets/js/about/infoText';
import profileImg from '../../assets/images/profileImg.png';
import { IconsBy, IconText, Link, LocationMarker } from '../../components';
import { withLayout } from '../../layouts';
import './index.scss';

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
        profileImg: PropTypes.node,
      };

      static defaultProps = {
        infos: infos,
        infoText: infoText,
        profileImg: profileImg,
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
        const { infoText, profileImg } = this.props;

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
