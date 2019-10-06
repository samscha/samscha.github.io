import { library } from '@fortawesome/fontawesome-svg-core';

import forts from '../fortawesome';

export default () => {
  forts.forEach(fort => library.add(fort));
};
