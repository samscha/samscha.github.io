import techs from '../../assets/js/home/techs';
import { IconsBy, LocationMarker, TechIcon } from '../../components';
import { withLayout } from '../../layouts';
import HomePage from './Home';

export default withLayout(
    HomePage({ IconsBy, LocationMarker, TechIcon, techs }),
);
