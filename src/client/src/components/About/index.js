import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import prof from '../../assets-tmp/profile_tmp.png';

export default withRouter(props => (
  <div className="About">
    <div className="ImgContainer">
      <img src={prof} alt="prof-tmp-alt" />
    </div>
    <div className="AboutMeLinksSection">
      <a
        className="AboutMeLinksSection__link"
        href="https://www.linkedin.com/in/chasoonjin/"
        rel="noopener noreferrer"
        target="_null"
      >
        <FontAwesomeIcon icon={['fab', 'linkedin']} />
      </a>
      <a
        className="AboutMeLinksSection__link"
        href="https://github.com/samscha"
        rel="noopener noreferrer"
        target="_null"
      >
        <FontAwesomeIcon icon={['fab', 'github-square']} />
      </a>
      <a
        className="AboutMeLinksSection__link"
        href="mailto:chasamuels@gmail.com"
      >
        <FontAwesomeIcon icon="envelope-square" />
      </a>
    </div>

    <p className="About__text">
      Hey there! I’m Sam. Thanks for visiting! Allow me tell you a little bit
      about myself (some ways to{' '}
      <NavLink className="About__text_link" to="/contact">
        <u>contact me</u>
      </NavLink>
      ).
      <br />
      <br />I used to make paper as a paper science engineer, teach English as a
      volunteer, and sell computers. And though, all of these came with
      challenges and problems to solve, I was never excited to wake up and solve
      the day’s problems.
      <br />
      <br />
      That is, until I enrolled in{' '}
      <a
        className="About__text_link"
        href="https://lambdaschool.com/"
        rel="noopener noreferrer"
        target="_null"
      >
        <u>Lambda School</u>
      </a>
      ’s Computer Science program. There, I went to a fully-remote classroom
      every weekday fulltime, mastering web development on the front end using
      React and Redux, configuring back end Express, Node.js, and Django
      servers, querying noSQL and SQL relational databases like MongoDB and
      Knex, as well as learning C to build CPUs and queues.
      <br />
      <br />
      By the end of twenty-six weeks, I was able to work with a group on
      building a complex web app for sharing and finding photos - (
      <a
        className="About__text_link"
        href="https://labpicme.herokuapp.com/"
        rel="noopener noreferrer"
        target="_null"
      >
        <u>PicMe</u>
      </a>
      ).
      <br />
      <br />
      Now, I’m looking to raise the standard of living for people everywhere,
      especially in remote or third world countries, through web technologies.
      My long term goal is to change the world, make sure EVERYONE has access to
      web technologies. I’m confident that the skills I learned at Lambda School
      along with my personal projects will enable me to do this. I want to
      utilize my skills at the right company with the right motives led by great
      talent. I hope to hear from you and the company you represent!
    </p>

    <div className="ContactLinkContainer">
      <div />
      <div />

      <a
        className="About__contactLink"
        href="https://www.dropbox.com/s/ce5lhyzij189q3d/samuel-cha-software-engineer-resume.pdf?dl=0"
        rel="noopener noreferrer"
        target="_null"
        style={{ display: 'flex', flexDirection: 'row' }}
      >
        <p>Resume</p>
        <div style={{ margin: '0 0 0 5px' }}>
          <FontAwesomeIcon icon={['fab', 'dropbox']} />
        </div>
      </a>
      <div />

      <div />
      <div />
      <a className="About__contactLink" href="mailto:chasamuels@gmail.com">
        <FontAwesomeIcon icon={['fas', 'envelope']} size="2x" />
      </a>
      <a className="About__contactLink" href="tel:4257739223">
        <FontAwesomeIcon icon={['fas', 'mobile']} size="2x" />
      </a>
      <a
        className="About__contactLink"
        href="https://twitter.com/chasoonjin"
        rel="noopener noreferrer"
        target="_null"
      >
        <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" />
      </a>
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

    <div className="AboutMe__c">
      <p className="AboutMe__p">icons by</p>

      <a
        className="AboutMe__link"
        href="https://fontawesome.com/"
        rel="noopener noreferrer"
        target="_null"
      >
        <FontAwesomeIcon icon={['fab', 'font-awesome']} />
      </a>
    </div>
  </div>
));
