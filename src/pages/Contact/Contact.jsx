import React from 'react';
import PropTypes from 'prop-types';
import contacts from '../../assets/js/contact/contacts';
import { IconsBy, IconText, Link } from '../../components';
import './Contact.scss';

export default class extends React.Component {
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
        contacts: contacts,
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
                                        <Link
                                            href={href}
                                            target={target}
                                            title={title}
                                        >
                                            <IconText
                                                fixedWidth
                                                icon={icon}
                                                text={text}
                                            />
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
}
