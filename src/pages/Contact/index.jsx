import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './index.scss';

import { IconsBy, IconText, Link } from '../../components';
import { withLayout } from '../../layouts';

export default withLayout(
  withRouter(
    class extends React.Component {
      static propTypes = {
        contacts: PropTypes.arrayOf(
          PropTypes.shape({
            href: PropTypes.string.isRequired,
            icon: PropTypes.array.isRequired,
            target: PropTypes.string,
            text: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
          }),
        ),
      };

      static defaultProps = {
        contacts: [
          {
            href: 'mailto:chasamuels@gmail.com',
            icon: ['fas', 'envelope'],
            target: '',
            text: 'chasamuels@gmail.com',
            title: `Click to email Sam`,
          },
          {
            href: 'https://t.me/chasamuels',
            icon: ['fab', 'telegram-plane'],
            text: 'chasamuels',
            title: `Click to Telegram Sam`,
          },
          {
            href: 'https://linkedin.com/in/chasamuels',
            icon: ['fab', 'linkedin'],
            text: 'chasamuels',
            title: `Click to go to Sam's LinkedIn`,
          },
          {
            href: 'https://twitter.com/chasamuels',
            icon: ['fab', 'twitter'],
            text: 'chasamuels',
            title: `Click to go to Sam's Twitter`,
          },
        ],
      };

      render() {
        const { contacts } = this.props;

        return (
          <div className="contact-page">
            {contacts.length > 0 && (
              <div className="links-section">
                {contacts.map(info => {
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
            )}

            <IconsBy fa />
          </div>
        );
      }
    },
  ),
);
