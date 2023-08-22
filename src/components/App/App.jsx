import React from 'react';

import { Loading } from '../Loading';

export default ({ init }) => {
  init();

  return () => (
    <div className="app">
      <Loading />
    </div>
  );
};
