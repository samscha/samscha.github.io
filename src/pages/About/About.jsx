import React from 'react';

import './About.scss';

export default ({ IconsBy, IconText, Link, infoText, data: { info } }) => {
  return () => {
    return (
      <div className="about-page">
        {info.length > 0 && (
          <div className="infos-section">
            {info.map((info) => {
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

        {infoText && <p className="info-text">{infoText}</p>}

        {info.length > 0 && <IconsBy fa />}

        {info.length === 0 && !infoText && <div>No info to show</div>}
      </div>
    );
  };
};
