import React from 'react';
import { useHistory } from 'react-router-dom';
import Image from '../Image/Image';
// import profileImage from '../../assets/images/profileImg.png';
import './index.scss';

export default () => {
  const history = useHistory();

  const onClick = () => {
    history.push('/');
  };
  // const length = ['a'];

  return (
    <div className="header">
      <div className="header-container">
        <div className="header__item">
          <Image
            alt="Sam"
            circle
            onClick={onClick}
            src="/images/profile.png"
            title="Sam"
          />
        </div>
        <div className="header__item">
          <div>about</div>
        </div>
        <div className="header__item">
          <div>blog</div>
        </div>
        <div className="header__item">
          <div>contact</div>
        </div>
      </div>
    </div>
  );
};

// export default withRouter(
//   class extends React.Component {
//     render() {
//       const { pathname: path } = this.props.location;
//       const atRoot = path === '/';

//       return (
//         <div
//           className={'header' + (atRoot ? ' no-link' : ' link')}
//           title={atRoot ? undefined : 'Go home'}
//           onClick={atRoot ? null : _ => this.props.history.push('/')}
//         >
//           <div className="header__title">Samuel Cha</div>

//           <div className="header__subtitle">Software Engineer</div>
//         </div>
//       );
//     }
//   },
// );
