import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useHistory from '../../hooks/useHistory';
import { withLayout } from '../../layouts';
import Four04 from './Four04.jsx';

export default withLayout(Four04({ FontAwesomeIcon, NavLink, useHistory }));
