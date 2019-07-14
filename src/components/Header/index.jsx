import React from 'react';
import { withRouter } from 'react-router-dom';
import './index.scss';

export default withRouter(
  class extends React.Component {
    render() {
      const { pathname: path } = this.props.location;
      const atRoot = path === '/';

      return (
        <div
          className={'header' + (atRoot ? ' no-link' : ' link')}
          title={atRoot ? undefined : 'Go home'}
          onClick={atRoot ? null : _ => this.props.history.push('/')}
        >
          <div className="header__title">Samuel Cha</div>

          <div className="header__subtitle">Software Engineer</div>
        </div>
      );
    }
  },
);
