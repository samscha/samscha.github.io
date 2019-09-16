import { withRouter } from 'react-router-dom';
import { withLayout } from '../../layouts';
import About from './About.jsx';

export default withLayout(withRouter(About));
