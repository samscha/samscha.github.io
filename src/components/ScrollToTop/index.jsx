/* old code below
import React from 'react';
 import { withRouter } from 'react-router-dom';

 export default withRouter(
     class extends React.Component {
         componentDidUpdate(prevProps) {
             if (this.props.location.pathname !== prevProps.location.pathname) {
                 window.scrollTo(0, 0);
             }
         }

         render() {
             return this.props.children;
         }
     },
 );
"new" code not working below */

import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function withRouterHOC(WrappedComponent) {
  const location = useLocation();

  const prevLocationPathnameRef = useRef();
  useEffect(() => {
    prevLocationPathnameRef.current = location.pathname;
  }, [location]);

  if (location.pathname !== prevLocationRef.current) {
    window.scrollTo(0, 0);
  }

  return <WrappedComponent />;
}
