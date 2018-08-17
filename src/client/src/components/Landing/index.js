import React from 'react';
import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as c from '../';

export default _ => (
  <div className="Landing">
    <div className="Intro">
      <div className="IntroText">
        <NavLink className="LinkContainer__link" to="/about">
          <FontAwesomeIcon className="QuoteLeft" icon={['fas', 'quote-left']} />
          Enhancing everyday living through technology
          <FontAwesomeIcon
            className="QuoteRight"
            icon={['fas', 'quote-right']}
          />
        </NavLink>
      </div>
    </div>

    <c.TechnologyBar />

    <c.Projects />

    <div className="TechnologyBar__c">
      <p className="TechnologyBar__p">icons by</p>
      {/* <p className="TechnologyBar__p">by</p> */}

      <a
        className="TechnologyBar__link"
        href="https://fontawesome.com/"
        rel="noopener noreferrer"
        target="_null"
      >
        <FontAwesomeIcon icon={['fab', 'font-awesome']} />
      </a>

      <p className="TechnologyBar__p">and</p>
      <a
        className="TechnologyBar__link"
        href="http://fizzed.com/oss/font-mfizz"
        rel="noopener noreferrer"
        target="_null"
      >
        <p>Fizzed</p>
      </a>
    </div>
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
