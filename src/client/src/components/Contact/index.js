import React from 'react';
import { withRouter } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default withRouter(props => (
  <div className="Contact">
    <div className="ContactContainer">
      <a
        className="ContactContainer__contactLink"
        href="mailto:chasamuels@gmail.com"
      >
        <FontAwesomeIcon icon={['fas', 'envelope']} size="2x" />
      </a>
      <p className="ContactContainer__contactText">chasamuels@gmail.com</p>

      <a className="ContactContainer__contactLink" href="tel:4257739223">
        <FontAwesomeIcon icon={['fas', 'mobile']} size="2x" />
      </a>
      <p className="ContactContainer__contactText">425-773-9223</p>

      <a
        className="ContactContainer__contactLink"
        href="https://twitter.com/chasoonjin"
        rel="noopener noreferrer"
        target="_null"
      >
        <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" />
      </a>
      <p className="ContactContainer__contactText">@chasoonjin</p>

      <a
        className="ContactContainer__contactLink"
        href="https://linkedin.com/in/chasoonjin"
        rel="noopener noreferrer"
        target="_null"
      >
        <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />
      </a>
      <p className="ContactContainer__contactText">@chasoonjin</p>

      <a
        className="ContactContainer__contactLink"
        href="https://github.com/samscha"
        rel="noopener noreferrer"
        target="_null"
      >
        <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
      </a>
      <p className="ContactContainer__contactText">@samscha</p>
    </div>

    <div className="GoBackButton">
      <FontAwesomeIcon
        className="GoBackButton__button"
        icon={['fas', 'arrow-circle-left']}
        size="2x"
        onClick={_ => props.history.goBack()}
        href={null}
      />
    </div>

    <div className="Contact__c">
      <p className="Contact__p">icons by</p>

      <a
        className="Contact__link"
        href="https://fontawesome.com/"
        rel="noopener noreferrer"
        target="_null"
      >
        <FontAwesomeIcon icon={['fab', 'font-awesome']} />
      </a>
    </div>
  </div>
));
