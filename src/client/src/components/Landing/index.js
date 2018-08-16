import React from 'react';

import * as c from '../';

export default _ => (
  <div className="Landing">
    <c.Projects />

    {/* copied from https://github.com/samscha/track-my-jobs/blob/master/src/client/src/components/Construction.js */}
    {/* please note: this is temporary */}
    {/* <div
      className="ConstructionTitle"
      style={{
        margin: '10px 0',
        textAlign: 'center',
      }}
    >
      We're under construction!
    </div>
    <div
      className="ConstructionMain"
      style={{ display: 'flex', justifyContent: 'center' }}
    >
      <ul style={{ listStyle: 'none', margin: '0 auto', padding: '0' }}>
        <li style={{ textAlign: 'center', margin: '20px 0' }}>
          <a
            className="constructionTEMP"
            href="https://github.com/samscha/aboutme"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
        <li style={{ textAlign: 'center', margin: '20px 0' }}>
          <a
            className="constructionTEMP"
            href="mailto:chasamuels@gmail.com"
            rel="noopener noreferrer"
          >
            Email
          </a>
        </li>
      </ul>
    </div> */}
  </div>
);
