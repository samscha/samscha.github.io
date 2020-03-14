import IconsBy from '../../components/IconsBy';
import contacts from '../../assets/js/contact/contacts';
import IconText from '../../components/IconText';
import Link from '../../components/Link';
import { withLayout } from '../../layouts';
import Contact from './Contact.jsx';

export default withLayout(Contact({ IconsBy, IconText, Link, contacts }));
