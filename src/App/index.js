import { Switch, Route } from 'react-router-dom';
import { About, Contact, Four04, Home } from '../pages';
import App from './App';
import init from './init';

init();

export default App({ About, Contact, Four04, Home, Switch, Route });
