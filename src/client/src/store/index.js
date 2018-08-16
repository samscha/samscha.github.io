import { createStore, applyMiddleware } from 'redux';

import config from './config';

const store = createStore(config.r, applyMiddleware(...config.mw));

export default store;
