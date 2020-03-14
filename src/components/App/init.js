import { library } from '@fortawesome/fontawesome-svg-core';

import forts from '../../assets/fortawesome';

export default () => {
    forts.forEach(fort => library.add(fort));
};
