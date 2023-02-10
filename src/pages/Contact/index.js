import IconsBy from '../../components/IconsBy';
import IconText from '../../components/IconText';
import Link from '../../components/Link';
import { ErrorText } from '../../components/ErrorText';
import { Loading } from '../../components/Loading';
import { withLayout } from '../../layouts';
import Contact from './Contact.jsx';

export default withLayout(
  Contact({ ErrorText, IconsBy, IconText, Link, Loading })
);
