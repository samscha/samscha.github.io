import React from 'react';
import './About.scss';

export default ({
    IconsBy,
    IconText,
    Link,
    LocationMarker,
    infos,
    infoText,
}) => {
    const filteredInfos = infos.filter((i) => i.enabled);
    const getInfo = (types = []) => {
        return (
            filteredInfos.length > 0 && (
                <div className="infos-section">
                    {filteredInfos
                        .filter((info) => types.includes(info.type))
                        .map((info) => {
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
            )
        );
    };

    const AboutPage = () => {
        return (
            <div className="about-page">
                <LocationMarker location="Austin, TX" />

                {getInfo(['work', 'education'])}

                {infoText && <p className="info-text">{infoText}</p>}

                <IconsBy fa />
            </div>
        );
    };

    return AboutPage;
};
