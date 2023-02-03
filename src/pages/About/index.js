import infos from '../../assets/js/about/infos';
import infoText from '../../assets/js/about/infoText';
import { withLayout } from '../../layouts';
import IconsBy from '../../components/IconsBy';
import IconText from '../../components/IconText';
import Link from '../../components/Link';
import LocationMarker from '../../components/IconsBy';
import About from './About.jsx';

export default withLayout(
  About({ IconsBy, IconText, Link, LocationMarker, infos, infoText })
);
