import projects from '../../assets/js/home/projects';
import IconsBy from '../../components/IconsBy';
import { Loading } from '../../components/Loading';
import LocationMarker from '../../components/LocationMarker';
import Project from '../../components/Project';
import TechIcon from '../../components/TechIcon';
import { withLayout } from '../../layouts';
import HomePage from './Home';

export default withLayout(
  HomePage({
    IconsBy,
    Loading,
    LocationMarker,
    Project,
    TechIcon,
    projects,
  })
);
