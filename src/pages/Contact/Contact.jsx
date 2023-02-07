import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Contact.scss';

export default ({ IconsBy, IconText, Link, Loading }) => {
  const ContactPage = () => {
    const apiBaseUri = process.env.REACT_APP_API_BASE_URL;

    const [contacts, setContacts] = useState(null);

    useEffect(() => {
      const fetchContacts = async () => {
        try {
          setContacts(null);

          const response = await fetch(`${apiBaseUri}/v1/contacts`);
          if (response.status !== 200) {
            console.warn('response not 200 getting contacts', response);
            setContacts(backupContacts);
            return;
          }

          const result = await response.json();
          if (!ignore) {
            setContacts(result.contacts);
          }
        } catch (err) {
          console.warn('error getting contacts', err);
          if (!ignore) {
            setContacts(backupContacts);
          }
        }
      };

      let ignore = false;
      fetchContacts();

      return () => {
        ignore = true;
      };
    }, []);

    return (
      <div className="contact-page">
        {contacts ? (
          <React.Fragment>
            {contacts.length > 0 ? (
              <React.Fragment>
                <div className="links-section">
                  {contacts
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
        ) : (
          <Loading />
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
