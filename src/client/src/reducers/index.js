import { combineReducers } from 'redux';
// import { persistReducer } from 'redux-persist';

// import { persistConfig } from '../pkgs/reduxPersist';

// import formReducer from './form';
import projectsReducer from './projects';
import userReducer from './user';

const rootReducer = combineReducers({
  // form: formReducer,
  // user: persistReducer(persistConfig, userReducer),
  projects: projectsReducer,
  user: userReducer,
});

export default rootReducer;
