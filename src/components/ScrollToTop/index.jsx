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

