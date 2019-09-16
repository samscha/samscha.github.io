import { withRouter } from 'react-router-dom';
import { withLayout } from '../../layouts';
import Contact from './Contact.jsx';

export default withLayout(withRouter(Contact));
