import React from 'react';
import { useQuery } from 'react-query';

import './About.scss';

export default ({
  ErrorText,
  IconsBy,
  IconText,
  Link,
  Loading,
  infos,
  infoText,
}) => {
  const apiBaseUri = process.env.REACT_APP_API_BASE_URL;

  const types = ['work', 'education'];

  return () => {
    const fetchInfo = async () => {
      const typeQueryParams = types.join(',');
      // TODO: add sort query params

      const response = await fetch(
        `${apiBaseUri}/v1/info?types=${typeQueryParams}`
      );
      if (response.status !== 200) {
        throw new Error(JSON.stringify(response));
      }

      return response.json();
    };

    const infoQuery = useQuery('info', fetchInfo);

    return (
      <div className="about-page">
        {infoQuery.isLoading && <Loading />}
        {infoQuery.isError && <ErrorText />}
        {infoQuery.isSuccess && (
          <>
            {infoQuery.data.info.length > 0 && (
              <div className="infos-section">
                {infoQuery.data.info.map((info) => {
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

            {infoQuery.data.info.length > 0 && <IconsBy fa />}

            {infoQuery.data.info.length === 0 && !infoText && (
              <div>No info to show</div>
            )}
          </>
        )}
      </div>
    );
  };
};
