import { library } from '@fortawesome/fontawesome-svg-core';

import forts from '../../assets/js/fortawesome';

export default () => {
    forts.forEach(fort => library.add(fort));
};
