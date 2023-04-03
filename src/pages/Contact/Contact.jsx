import React from 'react';
// import { useQuery } from 'react-query';
import PropTypes from 'prop-types';

import './Contact.scss';

export default ({
  // ErrorText,
  IconsBy,
  IconText,
  Link,
  // Loading,
  data: { contacts },
}) => {
  const ContactPage = () => {
    // const apiBaseUri = process.env.REACT_APP_API_BASE_URL;

    // const fetchContacts = async () => {
    //   const response = await fetch(`${apiBaseUri}/v1/contacts`);
    //   if (response.status !== 200) {
    //     throw new Error(JSON.stringify(response));
    //   }

    //   return response.json();
    // };

    // const contactsQuery = useQuery('contacts', fetchContacts);

    return (
      <div className="contact-page">
        {/* {contactsQuery.isLoading && <Loading />}
        {contactsQuery.isError && <ErrorText />}
        {contactsQuery.isSuccess && ( */}
        <>
          {contacts.length > 0 ? (
            <>
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
            </>
          ) : (
            <div className="link-container">
              <IconText
                fixedWidth
                icon={['fas', 'file-circle-question']}
                text="No contact info"
              />
            </div>
          )}
        </>
        {/* )} */}
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
