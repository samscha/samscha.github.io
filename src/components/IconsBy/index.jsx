import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';
import Link from '../Link';

export default class IconsBy extends React.Component {
  static propTypes = {
    fa: PropTypes.bool,
    fz: PropTypes.bool,
  };

  static defaultProps = {
    fa: false,
    fz: false,
  };

  render() {
    const { fa, fz } = this.props;

    return (
      (fa || fz) && (
        <div className="icons-by">
          <p>icons by</p>

          {fa && (
            <Link
              className="link"
              href="https://fontawesome.com/"
              title="Click to learn more about FontAwesome"
            >
              <FontAwesomeIcon icon={['fab', 'font-awesome']} />
            </Link>
          )}

          {fa && fz && <p>and</p>}

          {fz && (
            <Link
              className="link"
              href="http://fizzed.com/oss/font-mfizz"
              title="Click to learn more about fizzed"
            >
              <p>Fizzed</p>
            </Link>
          )}
        </div>
      )
    );
  }
}
