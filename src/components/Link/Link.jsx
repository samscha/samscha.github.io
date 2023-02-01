import React from 'react';
import PropTypes from 'prop-types';
import './Link.scss';

export default ({ NavLink }) => {
  const Link = ({
    children,
    className: classNameProp,
    href,
    target,
    title,
    to,
  }) => {
    const classNames = ['link'];

    classNameProp && classNames.push(classNameProp);

    const className = classNames.join(' ');

    return (
      <React.Fragment>
        {to && !href && (
          <NavLink className={className} title={title} to={to}>
            {children}
          </NavLink>
        )}

        {href && !to && (
          <a
            className={className}
            title={title}
            href={href}
            rel="noopener noreferrer"
            target={target}
          >
            {children}
          </a>
        )}
      </React.Fragment>
    );
  };

  Link.propTypes = {
    className: PropTypes.string,
    href: PropTypes.string,
    target: PropTypes.string,
    title: PropTypes.string,
    to: PropTypes.string,
  };

  Link.defaultProps = {
    target: '_self',
  };

  return Link;
};

// export default class extends React.Component {
//     static propTypes = {
//         className: PropTypes.string,
//         href: PropTypes.string,
//         target: PropTypes.string,
//         title: PropTypes.string,
//         to: PropTypes.string,
//     };

//     static defaultProps = {
//         target: '_null',
//     };

//     render() {
//         const {
//             children,
//             className: classNameProp,
//             href,
//             target,
//             title,
//             to,
//         } = this.props;

//         const classNames = ['link'];

//         classNameProp && classNames.push(classNameProp);

//         const className = classNames.join(' ');

//         return (
//             <React.Fragment>
//                 {to && !href && (
//                     <NavLink className={className} title={title} to={to}>
//                         {children}
//                     </NavLink>
//                 )}

//                 {href && !to && (
//                     <a
//                         className={className}
//                         title={title}
//                         href={href}
//                         rel="noopener noreferrer"
//                         target={target}
//                     >
//                         {children}
//                     </a>
//                 )}
//             </React.Fragment>
//         );
//     }
// }
