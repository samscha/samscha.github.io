import techs from '../../assets/js/home/techs';
import IconsBy from '../../components/IconsBy';
import LocationMarker from '../../components/LocationMarker';
import TechIcon from '../../components/TechIcon';
import { withLayout } from '../../layouts';
import HomePage from './Home';

export default withLayout(
    HomePage({ IconsBy, LocationMarker, TechIcon, techs }),
);
