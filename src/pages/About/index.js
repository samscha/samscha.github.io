import infoText from '../../assets/js/about/infoText';
import { withLayout } from '../../layouts';
import IconsBy from '../../components/IconsBy';
import IconText from '../../components/IconText';
import Link from '../../components/Link';
import { ErrorText } from '../../components/ErrorText';
import { Loading } from '../../components/Loading';
import About from './About.jsx';

export default withLayout(
  About({ ErrorText, IconsBy, IconText, Link, Loading, infoText })
);
