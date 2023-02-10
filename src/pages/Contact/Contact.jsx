import React from 'react';
import { useQuery } from 'react-query';
import PropTypes from 'prop-types';

import './Contact.scss';

export default ({ ErrorText, IconsBy, IconText, Link, Loading }) => {
  const ContactPage = () => {
    const apiBaseUri = process.env.REACT_APP_API_BASE_URL;

    const fetchContacts = async () => {
      const response = await fetch(`${apiBaseUri}/v1/contacts`);
      if (response.status !== 200) {
        throw new Error(JSON.stringify(response));
      }

      return response.json();
    };

    const contactsQuery = useQuery('contacts', fetchContacts);

    return (
      <div className="contact-page">
        {contactsQuery.isLoading && <Loading />}
        {contactsQuery.isError && <ErrorText />}
        {contactsQuery.isSuccess && (
          <React.Fragment>
            {contactsQuery.data.contacts.length > 0 ? (
              <React.Fragment>
                <div className="links-section">
                  {contactsQuery.data.contacts
                    .filter((c) => c.enabled)
                    .map((info) => {
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

                <IconsBy fa />
              </React.Fragment>
            ) : (
              <div className="link-container">
                <IconText
                  fixedWidth
                  icon={['fas', 'file-circle-question']}
                  text="No contact info"
                />
              </div>
            )}
          </React.Fragment>
        )}
      </div>
    );
  };

  ContactPage.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        href: PropTypes.string.isRequired,
        icon: PropTypes.array.isRequired,
        target: PropTypes.string,
        text: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      })
    ),
  };

  return ContactPage;
};

const backupContacts = [
  {
    href: 'mailto:contact@samscha.com',
    icon: ['fas', 'envelope'],
    target: '',
    text: 'contact@samscha.com',
    title: `Click to email Sam`,
    enabled: true,
  },
  {
    href: 'https://linkedin.com/in/chasamuels',
    icon: ['fab', 'linkedin'],
    text: 'chasamuels',
    title: `Click to go to Sam's LinkedIn`,
    enabled: true,
  },
  {
    href: 'https://twitter.com/chasamuels',
    icon: ['fab', 'twitter'],
    text: 'chasamuels',
    title: `Click to go to Sam's Twitter`,
    enabled: false,
  },
];
